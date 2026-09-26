export type WritingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type WritingResource = {
  label: string;
  description: string;
  href: string;
};

export type WritingPiece = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  lede: string;
  sections: WritingSection[];
  documentType?: string;
  cta?: string;
  resources?: WritingResource[];
};

export const writing: WritingPiece[] = [
  {
    slug: 'decision-memos-engineers-can-use',
    category: 'Master\'s thesis',
    title: 'Biological implications of suppressing radiation emissions',
    summary:
      'A multiscale framework connecting magnetic control of relativistic plasmas to radiation transport, absorbed dose, and biologically weighted risk.',
    readTime: 'July 2026 · 121 pages',
    lede:
      'This thesis asks whether controlled magnetic perturbations can reshape the superthermal electron population that drives relativistic bremsstrahlung—and how any resulting spectral change propagates through shielding, dosimetry, and biological response.',
    documentType: 'Master\'s thesis · University of Houston–Clear Lake',
    cta: 'Explore thesis',
    resources: [
      {
        label: 'Download thesis PDF',
        description: 'Read the complete compiled thesis.',
        href: 'https://github.com/zatullier/Latex/raw/refs/heads/main/assets/Thesis%20-%20Biological%20Implications%20of%20Suppressing%20Radiation%20Emissions.pdf',
      },
      {
        label: 'Browse LaTeX source',
        description: 'View the source files, figures, and project structure.',
        href: 'https://github.com/zatullier/Latex/tree/main/src/Masters/Thesis',
      },
    ],
    sections: [
      {
        heading: 'From plasma kinetics to consequence',
        paragraphs: [
          'Relativistic plasmas can lose a significant share of stored energy through bremsstrahlung, synchrotron emission, and related high-energy photon processes. The work examines magnetic perturbations as a way to selectively deplete or redistribute the superthermal electrons that contribute disproportionately to those losses.',
          'This work extends the mathematics beyond controlling the nuclear process and describes how those changes impact the people working on the physical hardware. The redistributed photons are analyzed through their entire lifetime, including transportation through structures and shielding and impact on biological specimin using absorbed dose and cellular response.',
        ],
      },
      {
        heading: 'A source-to-dose framework',
        paragraphs: [
          'The thesis builds a common causal chain from the electron distribution function to photon emissivity, transport, dosimetry, DNA damage, and cell survival. It treats source suppression and shielding as complementary controls and preserves spectral information instead of assuming that equal reductions in total power produce equal biological benefit.',
        ],
        bullets: [
          'A number-conserving cutoff-and-redistribution representation for superthermal electrons.',
          'An energy-dependent magnetic loss operator for relativistic kinetic modeling.',
          'A spectrally resolved transfer model from emitted radiation to absorbed dose.',
          'A shared validation plan spanning plasma diagnostics, spectroscopy, transport, dosimetry, and biological assays.',
        ],
      },
      {
        heading: 'Scope and next phase',
        paragraphs: [
          'The numerical examples are reproducible, illustrative calculations rather than unreported experimental results. The proposed magnetic configurations remain physics concepts, not final reactor hardware. The recommended next phase is a staged validation campaign that first confirms electron-tail control, closes the energy balance, measures the absolute photon spectrum, and validates transport and dosimetry before biological testing.',
        ],
      },
    ],
  },
];

