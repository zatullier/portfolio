export type ProjectResource = {
  label: string;
  description: string;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  disciplines: string[];
  tools?: string[];
  challenge: string;
  constraints: string[];
  approachSummary?: string;
  approach: Array<{ title: string; description: string }>;
  artifacts: string[];
  outcome: string;
  reflection: string;
  resourceLabel?: string;
  resources?: ProjectResource[];
};

export const projects: Project[] = [
  {
    slug: 'Bremsstrahlung',
    number: '01',
    title: 'Plasma Radiation Control',
    eyebrow: 'Plasma physics · Reproducible computation',
    summary:
      'A public Python framework connecting selective changes in relativistic electron distributions to radiation-weighted emission, orbit loss, and receptor-response surrogates.',
    status:
      'Active research code · Numerical verification documented · Experimental validation explicitly gated',
    disciplines: ['Plasma physics', 'Numerical modeling', 'Radiation transport'],
    tools: ['Python', 'NumPy', 'SciPy', 'pytest'],
    challenge:
      'The thesis established a multiscale question: can magnetic perturbations reshape the superthermal electron population that drives relativistic radiation losses, and can the resulting benefit be traced without overstating the evidence? This project turns that question into a reproducible model-and-validation framework.',
    constraints: [
      'Authoritative device fields, boundaries, and several experimental datasets are not publicly available',
      'Reduced plasma, orbit, source, and biological-response models have different domains of validity',
      'Every result must distinguish a numerical benchmark, a model response, and an experimental claim',
    ],
    approachSummary:
      'The repository advances in gated milestones: reproduce the thesis, replace surrogate kernels where practical, add kinetic and orbit physics, and fail closed when external evidence is unavailable.',
    approach: [
      {
        title: 'Reproduce the baseline',
        description:
          'Rebuilt and audited the thesis calculations with versioned inputs, generated tables, and executable checks.',
      },
      {
        title: 'Add physical kernels',
        description:
          'Implemented relativistic electron-ion and reduced electron-electron emission models with independent thermal benchmarks.',
      },
      {
        title: 'Connect fields to losses',
        description:
          'Added guiding-center and full-particle orbit models, field-map interfaces, kinetic evolution, and explicit source ledgers.',
      },
      {
        title: 'Gate the claims',
        description:
          'Encoded provenance and acceptance gates so missing authoritative data remains visible instead of being silently replaced by a proxy.',
      },
    ],
    artifacts: [
      'Installable Python package and command-line studies',
      'Unit and regression test suite with GitHub Actions',
      'Versioned model equations, validation status, and data dictionaries',
      'Reproducible figures, audit tables, and milestone reports',
    ],
    outcome:
      'The repository now provides a traceable research scaffold from distribution modification through emission, orbit loss, source accounting, and response surrogates. It also records where public evidence supports a benchmark and where device-level conclusions remain blocked.',
    reflection:
      'A useful scientific model should make its limits as reproducible as its results. The fail-closed gates are part of the engineering output, not an apology for missing data.',
    resourceLabel: 'Project resources',
    resources: [
      {
        label: 'Download source archive',
        description: 'Download the current main branch as a ZIP file.',
        href: 'https://github.com/zatullier/plasma-radiation-control/archive/refs/heads/main.zip',
      },
      {
        label: 'Browse on GitHub',
        description: 'Review the code, tests, model notes, data contracts, and validation gates.',
        href: 'https://github.com/zatullier/plasma-radiation-control',
      },
    ],
  },
  {
    slug: 'magnet-hall-engineering',
    number: '02',
    title: 'Magnet and Hall Sensor Engineering Package',
    eyebrow: 'Bench hardware · CAD · Calculation workbook',
    summary:
      'An open engineering package for exploring axial magnet spacing, Hall-sensor calibration, field estimates, and a printable room-temperature test fixture.',
    status: 'Revision A · Digitally checked · Physical build and measurement remain open',
    disciplines: ['Mechanical design', 'Instrumentation', 'Engineering analysis'],
    tools: ['Excel', 'AutoCAD', 'STEP', 'STL'],
    challenge:
      'Magnet and Hall-sensor experiments need a consistent way to connect editable assumptions, calibrated measurements, fixture geometry, wiring, and field estimates. The package brings those pieces together without presenting example values as acceptance data.',
    constraints: [
      'The axial field calculation is not valid for a sideways sensor pass or an unmodeled off-axis trajectory',
      'No physical build, gaussmeter measurement, aging test, or supplier material certification has been completed',
      'Lifetime and demagnetization conclusions require measured retention data and justified uncertainty inputs',
    ],
    approachSummary:
      'The package combines an auditable workbook with a manufacturable fixture and explicit limits on what the unvalidated model can establish.',
    approach: [
      {
        title: 'Parameterize the setup',
        description:
          'Placed dimensions, travel, surface readings, temperature, calibration data, and uncertainty allowances in editable workbook inputs.',
      },
      {
        title: 'Design the fixture',
        description:
          'Created an adjustable printed fixture with individual STEP/STL parts, assembly references, spacing options, and a mechanical BOM.',
      },
      {
        title: 'Document the circuit',
        description:
          'Added sensor schematics, breadboard layouts, a connection schedule, a calibration log, and electrical purchase information.',
      },
      {
        title: 'Verify the digital package',
        description:
          'Checked workbook boundaries and formulas, model solids and meshes, drawing readback, assembly clearances, and electrical net consistency.',
      },
    ],
    artifacts: [
      'Nine-sheet calculation and calibration workbook',
      'Twenty-two-page engineering package PDF',
      'STEP, STL, DWG, and DXF fixture files',
      'Mechanical BOM, wiring schedule, and calibration log',
    ],
    outcome:
      'Revision A is a complete digital prototype package ready for a controlled physical build and measurement campaign. The repository preserves editable source formats alongside printable and review-ready outputs.',
    reflection:
      'A polished model is still only a model. The most important feature of this package is that it tells the next builder exactly which measurements are needed before the conclusions can become hardware evidence.',
    resourceLabel: 'Engineering package',
    resources: [
      {
        label: 'Download complete package',
        description: 'Download the workbook, PDF, CAD, printable files, BOMs, and calibration records.',
        href: 'https://github.com/zatullier/magnet-hall-engineering/archive/refs/heads/main.zip',
      },
      {
        label: 'Browse on GitHub',
        description: 'Review the package structure, source files, verification notes, and model limitations.',
        href: 'https://github.com/zatullier/magnet-hall-engineering',
      },
    ],
  },
  {
    slug: 'mechanism-concept-trade',
    number: '03',
    title: 'Mechanism Concept Trade',
    eyebrow: 'Design · Sanitized case study',
    summary:
      'A concept selection framework balancing performance, verification burden, integration risk, and graceful failure behavior.',
    status: 'Representative example — architecture and scoring intentionally abstracted',
    disciplines: ['Mechanical design', 'Trade studies', 'Risk reduction'],
    challenge:
      'Several mechanism concepts could satisfy the headline function, but they distributed risk differently across packaging, tolerance, actuation, test, and operations. A simple weighted score was not enough.',
    constraints: [
      'Tight packaging and interface envelopes',
      'Competing objectives across performance, simplicity, and testability',
      'Limited prototype budget during concept maturation',
    ],
    approach: [
      {
        title: 'Separate needs from concepts',
        description:
          'Converted stakeholder preferences into solution-neutral functions, constraints, and verification needs before comparing architectures.',
      },
      {
        title: 'Make risk visible',
        description:
          'Paired the trade matrix with failure modes, maturity evidence, and sensitivity to weighting so a single score could not mask uncertainty.',
      },
      {
        title: 'Prototype the unknown',
        description:
          'Defined focused breadboard tests around the assumptions most capable of changing the down-select.',
      },
      {
        title: 'Record the rationale',
        description:
          'Captured why the selected concept won, what evidence supported it, and which risks moved forward with the design.',
      },
    ],
    artifacts: [
      'Functional decomposition',
      'Criteria and weighting rationale',
      'Concept risk map',
      'Targeted prototype plan',
    ],
    outcome:
      'The trade structure supported a transparent down-select and turned unresolved differences into a practical risk-reduction plan. Identifying design details are omitted.',
    reflection:
      'A useful trade study does more than rank ideas. It reveals which assumptions control the ranking and identifies the cheapest evidence that could change the decision.',
  },
  {
    slug: 'ayo',
    number: '10',
    title: 'ayo',
    eyebrow: 'ayo',
    summary: 'ayo',
    status: 'ayo',
    disciplines: ['ayo'],
    tools: ['ayo'],
    challenge: 'ayo',
    constraints: ['ayo'],
    approachSummary: 'ayo',
    approach: [
      {
        title: 'ayo',
        description: 'ayo',
      },
    ],
    artifacts: ['ayo'],
    outcome: 'ayo',
    reflection: 'ayo',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

