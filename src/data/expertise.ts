export type ExpertiseLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ExpertiseSkill = {
  slug: string;
  title: string;
  category: string;
  level: ExpertiseLevel;
  evidence: string;
};

export const expertiseScale: Record<ExpertiseLevel, string> = {
  1: 'Exposure',
  2: 'Foundation',
  3: 'Developing',
  4: 'Applied',
  5: 'Proficient',
  6: 'Advanced',
  7: 'Specialist',
  8: 'Mastery',
};

// Provisional self-assessment based on the public resume. Adjust the level (1–8)
// whenever you want to tune how much mission range the visualization communicates.
export const expertiseSkills: ExpertiseSkill[] = [
  {
    slug: 'systems-integration',
    title: 'Systems integration',
    category: 'Technical leadership',
    level: 8,
    evidence:
      'Leads cross-functional hardware development through requirements, interfaces, supplier execution, testing, and configuration-controlled delivery.',
  },
  {
    slug: 'requirements-interfaces',
    title: 'Requirements & interfaces',
    category: 'Systems engineering',
    level: 7,
    evidence:
      'Develops system requirements, interface definitions, verification plans, and change packages for safety-critical hardware.',
  },
  {
    slug: 'verification-validation',
    title: 'Verification & validation',
    category: 'Systems engineering',
    level: 7,
    evidence:
      'Plans and coordinates verification evidence across analysis, inspection, supplier data, and integrated testing.',
  },
  {
    slug: 'mechanical-fluids',
    title: 'Mechanical & fluid systems',
    category: 'Engineering analysis',
    level: 7,
    evidence:
      'Applies fluid, thermal, mechanical, and pressurized-system fundamentals from design through integration and test.',
  },
  {
    slug: 'configuration-management',
    title: 'Configuration management',
    category: 'Program execution',
    level: 7,
    evidence:
      'Maintains traceability among controlled drawings, requirements, procedures, analyses, and engineering changes.',
  },
  {
    slug: 'cad-drawings',
    title: 'CAD & technical drawings',
    category: 'Mechanical design',
    level: 6,
    evidence:
      'Creates and reviews production drawings using GD&T, ASME Y14 practices, and configuration-controlled CAD workflows.',
  },
  {
    slug: 'manufacturing-test',
    title: 'Manufacturing & test',
    category: 'Hardware execution',
    level: 6,
    evidence:
      'Supports fabrication, precision inspection, assembly documentation, environmental testing, and flight-hardware readiness.',
  },
  {
    slug: 'computational-physics',
    title: 'Computational physics',
    category: 'Research & modeling',
    level: 6,
    evidence:
      'Builds multiphysics models spanning plasma dynamics, magnetic-field interactions, and radiation transport.',
  },
  {
    slug: 'programming-automation',
    title: 'Programming & automation',
    category: 'Digital engineering',
    level: 5,
    evidence:
      'Uses Python, MATLAB, VBA, Java, and LabVIEW for analysis, data workflows, modeling, and engineering automation.',
  },
];

