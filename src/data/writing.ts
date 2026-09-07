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
          'The engineering question does not end at reduced radiated power. A changed photon spectrum must still be transported through structures and shielding, converted to absorbed dose, and evaluated against molecular and cellular response.',
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
  {
    slug: 'model-to-test-correlation',
    category: 'Verification',
    title: 'A practical guide to model-to-test correlation',
    summary:
      'How to learn from disagreement while keeping analytical updates physically defensible.',
    readTime: '5 min read',
    lede:
      'Correlation is not the act of tuning a model until its curve resembles test data. It is a structured investigation into why two representations of the same hardware disagree.',
    sections: [
      {
        heading: 'Define success before the test',
        paragraphs: [
          'Choose comparison metrics, tolerances, and update rules before data arrives. Preserve the pre-test prediction. Otherwise, hindsight makes it too easy to accept a plausible-looking but weakly justified change.',
        ],
      },
      {
        heading: 'Work from the test boundary inward',
        paragraphs: [
          'Begin with sensor health, units, synchronization, fixtures, and boundary conditions. Only then move toward mesh density, material properties, joint behavior, or other model details.',
        ],
        bullets: [
          'Confirm the measured quantity matches the modeled quantity.',
          'Check global behavior before explaining local peaks.',
          'Change one physical assumption at a time.',
          'Keep an explicit log of every update and its rationale.',
        ],
      },
      {
        heading: 'State the model’s new domain of trust',
        paragraphs: [
          'A correlated model is not universally validated. Document the loads, configurations, frequencies, or temperatures covered by the evidence—and be equally clear about the regions still supported only by engineering judgment.',
        ],
      },
    ],
  },
  {
    slug: 'design-reviews-surface-uncertainty',
    category: 'Engineering practice',
    title: 'Design reviews that surface uncertainty early',
    summary:
      'A review structure that rewards clear unknowns and produces sharper follow-through.',
    readTime: '4 min read',
    lede:
      'The most valuable design review is not the one with the fewest questions. It is the one that finds consequential uncertainty while there is still time to act on it.',
    sections: [
      {
        heading: 'Organize around claims',
        paragraphs: [
          'Instead of walking slide by slide through design history, state the claims the design must support: it fits, carries load, survives the environment, can be built, and can be verified. Pair each claim with evidence and uncertainty.',
        ],
      },
      {
        heading: 'Show margins and maturity together',
        paragraphs: [
          'A positive margin based on a low-maturity input should not read like a closed item. Display analytical result, input maturity, and verification status together so reviewers can see where confidence is earned and where it is provisional.',
        ],
        bullets: [
          'What must be true for this conclusion to hold?',
          'Which assumption has the most leverage?',
          'What evidence would change the design?',
          'Who owns the uncertainty and when will it close?',
        ],
      },
      {
        heading: 'Treat actions as engineering output',
        paragraphs: [
          'A review is complete only when each action has a precise question, owner, due point, and closure evidence. Good action wording turns a meeting observation into a bounded piece of engineering work.',
        ],
      },
    ],
  },
];

