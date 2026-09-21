export type CapabilityProof = {
  label: string;
  href: string;
};

export type EngineeringCapability = {
  number: string;
  title: string;
  ownership: string;
  contexts: string[];
  evidence: string;
  methods: string[];
  proofs?: CapabilityProof[];
};

export type ToolkitGroup = {
  title: string;
  items: string[];
};

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    number: '01',
    title: 'Technical leadership & program execution',
    ownership:
      'Coordinate multidisciplinary work from open technical questions through decisions, execution, and controlled delivery.',
    contexts: ['Human-spaceflight programs', 'Cross-functional hardware teams'],
    evidence:
      'Led work across engineering, suppliers, manufacturing, test, and stakeholders while maintaining a traceable technical baseline.',
    methods: ['Technical planning', 'Risk and issue closure', 'Supplier coordination', 'Design reviews'],
  },
  {
    number: '02',
    title: 'Systems engineering & integration',
    ownership:
      'Develop requirements, define interfaces, establish verification approaches, and manage technical change for complex hardware.',
    contexts: ['Safety-critical hardware', 'Multidisciplinary system integration'],
    evidence:
      'Developed system requirements, interface definitions, verification plans, and change packages supporting hardware development and integration.',
    methods: ['Requirements development', 'Interface control', 'Verification matrices', 'Change control'],
  },
  {
    number: '03',
    title: 'Mechanical & fluid hardware',
    ownership:
      'Develop mechanical and fluid hardware from concept and trade studies through detailed design, integration, and test.',
    contexts: ['Pressurized and fluid systems', 'Mechanisms, fixtures, and test hardware'],
    evidence:
      'Applied fluid, thermal, mechanical, and pressure-system fundamentals while moving hardware from design definition into integration and testing.',
    methods: ['CAD and drawing review', 'GD&T', 'ASME Y14 practices', 'Fluid and thermal analysis'],
    proofs: [
      {
        label: 'Magnet and Hall engineering package',
        href: '/portfolio/projects/magnet-hall-engineering/',
      },
    ],
  },
  {
    number: '04',
    title: 'Verification, test & readiness',
    ownership:
      'Define how requirements will be verified and coordinate analysis, inspection, supplier, and test evidence through closure.',
    contexts: ['Qualification and acceptance', 'Integrated hardware testing'],
    evidence:
      'Planned and coordinated verification evidence across analysis, inspection, supplier data, and integrated testing for safety-critical hardware.',
    methods: ['Verification planning', 'Test procedures', 'Evidence review', 'Readiness assessment'],
  },
  {
    number: '05',
    title: 'Manufacturing & configuration control',
    ownership:
      'Translate designs into controlled technical packages and support fabrication, inspection, assembly, and configuration accountability.',
    contexts: ['Flight and prototype hardware', 'Supplier and in-house manufacturing'],
    evidence:
      'Maintained traceability among drawings, requirements, procedures, analyses, inspection results, and engineering changes.',
    methods: ['Production drawings', 'BOMs and work instructions', 'Precision inspection', 'Configuration management'],
  },
  {
    number: '06',
    title: 'Computational engineering & research',
    ownership:
      'Build auditable models and automation with explicit assumptions, validation boundaries, and reproducible outputs.',
    contexts: ['Plasma and radiation physics', 'Engineering analysis and data workflows'],
    evidence:
      'Developed multiphysics research models and engineering automation spanning plasma dynamics, magnetic-field interactions, radiation transport, and data reduction.',
    methods: ['Python', 'MATLAB', 'Excel and VBA', 'Java and LabVIEW'],
    proofs: [
      {
        label: 'Plasma radiation control',
        href: '/portfolio/projects/Bremsstrahlung/',
      },
    ],
  },
];

export const technicalToolkit: ToolkitGroup[] = [
  {
    title: 'Systems & execution',
    items: [
      'Requirements development',
      'Interface management',
      'Verification planning',
      'Configuration and change control',
      'Technical risk management',
      'Design reviews',
    ],
  },
  {
    title: 'Mechanical & hardware',
    items: [
      'CAD and technical drawings',
      'GD&T and ASME Y14 practices',
      'Fluid, thermal, and mechanical analysis',
      'Manufacturing support',
      'Inspection and test',
      'Hardware integration',
    ],
  },
  {
    title: 'Computation & research',
    items: [
      'Python',
      'MATLAB',
      'Excel and VBA',
      'Java',
      'LabVIEW',
      'Numerical modeling and data workflows',
    ],
  },
];

