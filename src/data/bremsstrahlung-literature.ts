export type LiteratureTopic = 'plasma' | 'control' | 'dosimetry' | 'biology';

export type LiteratureNode = {
  id: string;
  title: string;
  shortTitle: string;
  authors: string;
  year: number;
  venue: string;
  topic: LiteratureTopic;
  href: string;
  summary: string;
  lane?: number;
  seed?: boolean;
};

export type LiteratureLink = {
  source: string;
  target: string;
};

export const literatureTopics: Array<{
  id: 'all' | LiteratureTopic;
  label: string;
}> = [
  { id: 'all', label: 'All domains' },
  { id: 'plasma', label: 'Plasma physics' },
  { id: 'control', label: 'Magnetic control' },
  { id: 'dosimetry', label: 'Dosimetry' },
  { id: 'biology', label: 'Radiobiology' },
];

export const literatureNodes: LiteratureNode[] = [
  {
    id: 'bethe-1954',
    title: 'Theory of Bremsstrahlung and Pair Production. I. Differential Cross Section',
    shortTitle: 'Bethe–Maximon',
    authors: 'Hans A. Bethe · Leonard C. Maximon',
    year: 1954,
    venue: 'Physical Review',
    topic: 'plasma',
    href: 'https://doi.org/10.1103/PhysRev.93.768',
    summary:
      'A foundational differential cross-section treatment that anchors the electron–ion bremsstrahlung kernel used throughout the thesis.',
  },
  {
    id: 'koch-1959',
    title: 'Bremsstrahlung Cross-Section Formulas and Related Data',
    shortTitle: 'Koch–Motz',
    authors: 'H. W. Koch · J. W. Motz',
    year: 1959,
    venue: 'Reviews of Modern Physics',
    topic: 'plasma',
    href: 'https://doi.org/10.1103/RevModPhys.31.920',
    summary:
      'The classic review and data compilation used to compare practical bremsstrahlung cross-section formulations across energy regimes.',
  },
  {
    id: 'blumenthal-1970',
    title: 'Bremsstrahlung, Synchrotron Radiation, and Compton Scattering of High-Energy Electrons Traversing Dilute Gases',
    shortTitle: 'Blumenthal–Gould',
    authors: 'George R. Blumenthal · Robert J. Gould',
    year: 1970,
    venue: 'Reviews of Modern Physics',
    topic: 'plasma',
    href: 'https://doi.org/10.1103/RevModPhys.42.237',
    summary:
      'Connects high-energy electron distributions to radiative output and provides a broad relativistic-radiation reference point.',
  },
  {
    id: 'rechester-1978',
    title: 'Electron Heat Transport in a Tokamak with Destroyed Magnetic Surfaces',
    shortTitle: 'Rechester–Rosenbluth',
    authors: 'A. B. Rechester · M. N. Rosenbluth',
    year: 1978,
    venue: 'Physical Review Letters',
    topic: 'control',
    href: 'https://doi.org/10.1103/PhysRevLett.40.38',
    summary:
      'A key transport result for stochastic magnetic fields, informing how perturbations can alter energetic-electron confinement.',
  },
  {
    id: 'attix-1986',
    title: 'Introduction to Radiological Physics and Radiation Dosimetry',
    shortTitle: 'Attix',
    authors: 'Frank H. Attix',
    year: 1986,
    venue: 'Wiley',
    topic: 'dosimetry',
    href: 'https://doi.org/10.1002/9783527617135',
    summary:
      'Provides the absorbed-dose, kerma, charged-particle equilibrium, and measurement foundations used to translate spectra into dose.',
  },
  {
    id: 'ward-1988',
    title: 'DNA Damage Produced by Ionizing Radiation in Mammalian Cells',
    shortTitle: 'Ward',
    authors: 'John F. Ward',
    year: 1988,
    venue: 'Progress in Nucleic Acid Research and Molecular Biology',
    topic: 'biology',
    href: 'https://doi.org/10.1016/S0079-6603(08)60611-X',
    summary:
      'A foundational account of radiation-induced DNA lesion types, their formation mechanisms, and their reparability.',
  },
  {
    id: 'goodhead-1994',
    title: 'Initial Events in the Cellular Effects of Ionizing Radiations: Clustered Damage in DNA',
    shortTitle: 'Goodhead',
    authors: 'Dudley T. Goodhead',
    year: 1994,
    venue: 'International Journal of Radiation Biology',
    topic: 'biology',
    href: 'https://doi.org/10.1080/09553009414550021',
    summary:
      'Establishes clustered DNA damage as a bridge between microscopic energy deposition and biological effectiveness.',
  },
  {
    id: 'rider-1995',
    title: 'Fundamental Limitations on Plasma Fusion Systems Not in Thermodynamic Equilibrium',
    shortTitle: 'Rider',
    authors: 'Todd H. Rider',
    year: 1995,
    venue: 'Physics of Plasmas',
    topic: 'plasma',
    href: 'https://doi.org/10.1063/1.871273',
    summary:
      'Frames bremsstrahlung as a system-level constraint for non-equilibrium fusion plasmas and motivates source-term control.',
  },
  {
    id: 'sutherland-2000',
    title: 'Clustered DNA Damages Induced in Isolated DNA and in Human Cells by Low Doses of Ionizing Radiation',
    shortTitle: 'Sutherland et al.',
    authors: 'Betsy M. Sutherland · Paula V. Bennett · Olga Sidorkina · Jacques Laval',
    year: 2000,
    venue: 'Proceedings of the National Academy of Sciences',
    topic: 'biology',
    href: 'https://doi.org/10.1073/pnas.97.1.103',
    summary:
      'Experimental evidence connecting low-dose ionizing radiation with biologically consequential clustered lesions.',
  },
  {
    id: 'ma-2001',
    title: 'AAPM Protocol for 40–300 kV X-Ray Beam Dosimetry in Radiotherapy and Radiobiology',
    shortTitle: 'AAPM TG-61',
    authors: 'C.-M. Ma et al.',
    year: 2001,
    venue: 'Medical Physics',
    topic: 'dosimetry',
    href: 'https://doi.org/10.1118/1.1374247',
    summary:
      'A traceable measurement protocol for kilovoltage photon beams, relevant to benchmarking a nonstandard plasma-generated spectrum.',
    lane: -1,
  },
  {
    id: 'evans-2004',
    title: 'Suppression of Large Edge-Localized Modes in High-Confinement DIII-D Plasmas with a Stochastic Magnetic Boundary',
    shortTitle: 'Evans et al.',
    authors: 'T. E. Evans et al.',
    year: 2004,
    venue: 'Physical Review Letters',
    topic: 'control',
    href: 'https://doi.org/10.1103/PhysRevLett.92.235003',
    summary:
      'An experimental demonstration that externally imposed magnetic perturbations can reshape plasma transport and stability.',
    lane: -1,
  },
  {
    id: 'hubbell-2004',
    title: 'Tables of X-Ray Mass Attenuation Coefficients and Mass Energy-Absorption Coefficients',
    shortTitle: 'NIST XCOM',
    authors: 'J. H. Hubbell · S. M. Seltzer',
    year: 2004,
    venue: 'NISTIR 5632',
    topic: 'dosimetry',
    href: 'https://www.nist.gov/pml/x-ray-mass-attenuation-coefficients',
    summary:
      'Reference attenuation and energy-absorption data used to propagate a changed photon spectrum through matter and into dose.',
    lane: 1,
  },
  {
    id: 'icrp-2007',
    title: 'The 2007 Recommendations of the International Commission on Radiological Protection',
    shortTitle: 'ICRP 103',
    authors: 'International Commission on Radiological Protection',
    year: 2007,
    venue: 'Annals of the ICRP',
    topic: 'dosimetry',
    href: 'https://doi.org/10.1016/j.icrp.2007.10.003',
    summary:
      'Defines the protection quantities and tissue-weighting framework used to keep absorbed, equivalent, and effective dose distinct.',
  },
  {
    id: 'favaudon-2014',
    title: 'Ultrahigh Dose-Rate FLASH Irradiation Increases the Differential Response Between Normal and Tumor Tissue in Mice',
    shortTitle: 'Favaudon et al.',
    authors: 'Vincent Favaudon et al.',
    year: 2014,
    venue: 'Science Translational Medicine',
    topic: 'biology',
    href: 'https://doi.org/10.1126/scitranslmed.3008973',
    summary:
      'A landmark FLASH study illustrating why source timing and pulse structure must be carried into biological interpretation.',
  },
  {
    id: 'embreus-2016',
    title: 'Effect of Bremsstrahlung Radiation Emission on Distributions of Runaway Electrons in Magnetized Plasmas',
    shortTitle: 'Embréus et al.',
    authors: 'Ola Embréus et al.',
    year: 2016,
    venue: 'New Journal of Physics',
    topic: 'plasma',
    href: 'https://doi.org/10.1088/1367-2630/18/9/093023',
    summary:
      'Models the feedback between bremsstrahlung losses and the energetic tail of a magnetized electron distribution.',
  },
  {
    id: 'munirov-2023',
    title: 'Suppression of Bremsstrahlung Losses from Relativistic Plasma with Energy Cutoff',
    shortTitle: 'Munirov–Fisch',
    authors: 'Vadim R. Munirov · Nathaniel J. Fisch',
    year: 2023,
    venue: 'arXiv:2304.01476',
    topic: 'control',
    href: 'https://arxiv.org/abs/2304.01476',
    summary:
      'The central seed paper: it proposes suppressing radiative loss by selectively removing the superthermal electrons that contribute disproportionately to bremsstrahlung.',
    lane: -1,
    seed: true,
  },
  {
    id: 'ochs-2023',
    title: 'Confinement Time and Ambipolar Potential in a Relativistic Mirror-Confined Plasma',
    shortTitle: 'Ochs et al.',
    authors: 'Ian E. Ochs · Vadim R. Munirov · Nathaniel J. Fisch',
    year: 2023,
    venue: 'Physics of Plasmas',
    topic: 'control',
    href: 'https://doi.org/10.1063/5.0147466',
    summary:
      'Develops the confinement physics needed to judge whether an energy-selective loss mechanism is plausible in a relativistic mirror plasma.',
    lane: 1,
  },
  {
    id: 'tullier-2026',
    title: 'Biological Implications of Suppressing Radiation Emissions from Relativistic Plasmas Using Magnetic Perturbations',
    shortTitle: 'Tullier thesis',
    authors: 'Zachary Tullier',
    year: 2026,
    venue: 'Master’s thesis · integrated theoretical draft',
    topic: 'control',
    href: 'https://github.com/zatullier/Latex/raw/refs/heads/main/assets/Thesis%20-%20Biological%20Implications%20of%20Suppressing%20Radiation%20Emissions.pdf',
    summary:
      'The synthesis node: a multiscale framework connecting energy-selective electron control to the photon source term, transport, dosimetry, and radiobiological endpoints.',
    seed: true,
  },
];

// These paths express how the thesis organizes the literature. They are thematic
// relationships, not assertions that every source directly cites the next one.
export const literatureLinks: LiteratureLink[] = [
  { source: 'bethe-1954', target: 'koch-1959' },
  { source: 'koch-1959', target: 'blumenthal-1970' },
  { source: 'blumenthal-1970', target: 'embreus-2016' },
  { source: 'rider-1995', target: 'munirov-2023' },
  { source: 'embreus-2016', target: 'munirov-2023' },
  { source: 'rechester-1978', target: 'evans-2004' },
  { source: 'evans-2004', target: 'ochs-2023' },
  { source: 'ochs-2023', target: 'munirov-2023' },
  { source: 'attix-1986', target: 'ma-2001' },
  { source: 'hubbell-2004', target: 'ma-2001' },
  { source: 'ma-2001', target: 'icrp-2007' },
  { source: 'ward-1988', target: 'goodhead-1994' },
  { source: 'goodhead-1994', target: 'sutherland-2000' },
  { source: 'sutherland-2000', target: 'favaudon-2014' },
  { source: 'munirov-2023', target: 'tullier-2026' },
  { source: 'ochs-2023', target: 'tullier-2026' },
  { source: 'icrp-2007', target: 'tullier-2026' },
  { source: 'favaudon-2014', target: 'tullier-2026' },
];

