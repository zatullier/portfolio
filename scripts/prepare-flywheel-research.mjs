import { access, copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { deflateRawSync } from 'node:zlib';

const archiveRoot = 'public/downloads/flywheel-research';
const documentsRoot = `${archiveRoot}/documents`;
const zipPath = 'public/downloads/flywheel-exercise-device-research.zip';

const downloads = [
  ['https://www.nasa.gov/wp-content/uploads/2026/04/lsah-newsletter-2026-vol31-issue1.pdf', `${documentsRoot}/02-nasa-from-friction-to-flywheel.pdf`],
  ['https://ntrs.nasa.gov/api/citations/20230001466/downloads/Flywheel%20Dev%20and%20Eval%20Poster-HRP_IWS-2023.pptx.pdf', `${documentsRoot}/03-ntrs-flywheel-development-and-evaluation-2023.pdf`],
  ['https://ntrs.nasa.gov/api/citations/20250000276/downloads/KBox%20vs%20Flywheel_HRP%20IWS%20poster_2025_v3.pptx', `${documentsRoot}/04-ntrs-orion-flywheel-vs-kbox-2025.pptx`],
  ['https://ntrs.nasa.gov/api/citations/20260002262/downloads/HRP%20IWS%20kBox%20vs%20Flywheel%20Presentation_v2.pdf', `${documentsRoot}/05-ntrs-orion-flywheel-vs-kbox-results-2026.pdf`],
  ['https://ntrs.nasa.gov/api/citations/20260002521/downloads/2026_HRP_IWS_Flywheel.pdf', `${documentsRoot}/06-ntrs-orion-flywheel-efficacy-study-2026.pdf`],
  ['https://ntrs.nasa.gov/api/citations/20220010451/downloads/ICES-2022-45%20Slides_Abney_Presentation.pdf', `${documentsRoot}/07-ntrs-orion-crew-exercise-slides-2022.pdf`],
  ['https://www.nasa.gov/wp-content/uploads/2026/02/life-in-orion-fact-sheet-2026-2.pdf', `${documentsRoot}/10-nasa-life-inside-orion-fact-sheet.pdf`],
  ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Flywheel_exercise_device_of_Orion_spacecraft.jpg', 'public/images/orion-flywheel-exercise-device.jpg'],
];

await mkdir(documentsRoot, { recursive: true });
await mkdir('public/images', { recursive: true });
await Promise.all([
  `${documentsRoot}/01-nasa-artemis-ii-reference-guide-flywheel-extract.pdf`,
  `${documentsRoot}/05-ntrs-orion-flywheel-vs-kbox-results-2026-extract.pdf`,
  `${documentsRoot}/09-nasa-jsc-2024-annual-report-flywheel-extract.pdf`,
].map((path) => rm(path, { force: true })));

for (const [url, destination] of downloads) {
  let exists = false;
  try {
    exists = (await stat(destination)).size > 0;
  } catch {
    // Download below.
  }
  if (exists) continue;

  const response = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'zatullier-portfolio research archive builder' },
  });
  if (!response.ok) throw new Error(`Could not download ${url}: ${response.status}`);
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
}

const sources = JSON.parse(await readFile('src/data/flywheel-news.json', 'utf8'));
const csvCell = (value = '') => `"${String(value).replaceAll('"', '""')}"`;
const csvHeader = ['id', 'category', 'date', 'title', 'publisher', 'format', 'url', 'description', 'highlight', 'archive_status', 'included_file'];
const csvRows = sources.map((source) => [source.id, source.category, source.date, source.title, source.publisher, source.format, source.url, source.description, source.highlight ? 'yes' : 'no', source.includedFile ? 'included' : 'link-only', source.includedFile ?? '']);
await writeFile(`${archiveRoot}/sources.csv`, [csvHeader, ...csvRows].map((row) => row.map(csvCell).join(',')).join('\n') + '\n');

const grouped = Map.groupBy(sources, (source) => source.category);
const markdown = [
  '# Orion Flywheel Exercise Device source catalog',
  '',
  `Compiled September 13, 2026. ${sources.length} annotated public sources.`,
  '',
  'An `[included]` marker means a public/public-use source file is present in this archive. Everything else is intentionally link-only.',
  '',
];
for (const [category, items] of grouped) {
  markdown.push(`## ${category}`, '');
  for (const source of items) {
    const included = source.includedFile ? ` **[included: ${source.includedFile}]**` : '';
    markdown.push(`- **[${source.title}](${source.url})** - ${source.publisher}, ${source.date}; ${source.format}.${included}`);
    markdown.push(`  ${source.description}`, '');
  }
}
markdown.push('## Research notes', '', '- The flown device is the unpowered Orion Flywheel (OFW).', '- References to the earlier motorized ROCKY concept are retained only as design lineage and are labeled accordingly.', '- Search emphasis: NASA and NTRS primary sources first, then CSA material, peer-reviewed research, independent reporting, media, and public discussion.', '');
await writeFile(`${archiveRoot}/SOURCES.md`, markdown.join('\n'));

await mkdir(`${archiveRoot}/media`, { recursive: true });
await copyFile('public/images/orion-flywheel-exercise-device.jpg', `${archiveRoot}/media/orion-flywheel-exercise-device.jpg`);

const archiveFiles = [];
async function walk(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const childRelative = relative ? `${relative}/${entry.name}` : entry.name;
    const childPath = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await walk(childPath, childRelative);
    else if (entry.name !== 'archive-manifest.json') archiveFiles.push({ path: childRelative, bytes: (await stat(childPath)).size });
  }
}
await walk(archiveRoot);
archiveFiles.sort((a, b) => a.path.localeCompare(b.path));
await writeFile(`${archiveRoot}/archive-manifest.json`, JSON.stringify({ compiled: '2026-09-13', sourceCount: sources.length, files: archiveFiles }, null, 2) + '\n');

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date) {
  const year = Math.max(date.getFullYear(), 1980);
  return {
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
  };
}

async function createZip(root, destination) {
  const entries = [];
  async function collect(directory, relative = '') {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const childRelative = relative ? `${relative}/${entry.name}` : entry.name;
      const childPath = `${directory}/${entry.name}`;
      if (entry.isDirectory()) await collect(childPath, childRelative);
      else entries.push({ path: childPath, name: childRelative });
    }
  }
  await collect(root);
  entries.sort((a, b) => a.name.localeCompare(b.name));

  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const timestamp = dosDateTime(new Date('2026-09-13T12:00:00-05:00'));

  for (const entry of entries) {
    const data = await readFile(entry.path);
    const compressed = deflateRawSync(data, { level: 9 });
    const name = Buffer.from(entry.name.replaceAll('\\', '/'), 'utf8');
    const crc = crc32(data);

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0x0800, 6);
    localHeader.writeUInt16LE(8, 8);
    localHeader.writeUInt16LE(timestamp.time, 10);
    localHeader.writeUInt16LE(timestamp.date, 12);
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(compressed.length, 18);
    localHeader.writeUInt32LE(data.length, 22);
    localHeader.writeUInt16LE(name.length, 26);
    localParts.push(localHeader, name, compressed);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0x0800, 8);
    centralHeader.writeUInt16LE(8, 10);
    centralHeader.writeUInt16LE(timestamp.time, 12);
    centralHeader.writeUInt16LE(timestamp.date, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(compressed.length, 20);
    centralHeader.writeUInt32LE(data.length, 24);
    centralHeader.writeUInt16LE(name.length, 28);
    centralHeader.writeUInt32LE(offset, 42);
    centralParts.push(centralHeader, name);
    offset += localHeader.length + name.length + compressed.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  await writeFile(destination, Buffer.concat([...localParts, centralDirectory, end]));
}

await createZip(archiveRoot, zipPath);
await access(zipPath);
console.log(`Prepared ${sources.length} sources and ${(await stat(zipPath)).size} archive bytes.`);

