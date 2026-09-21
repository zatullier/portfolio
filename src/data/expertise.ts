export type ExpertiseLevel = 'proficient' | 'advanced' | 'lead';

export type ExpertiseSkill = {
  slug: string;
  title: string;
  category: string;
  level: ExpertiseLevel;
  evidence: string;
};

export const expertiseScale: Record<
  ExpertiseLevel,
  { label: string; definition: string }
> = {
  proficient: {
    label: 'Proficient',
    definition: 'Performs independently within a defined technical scope.',
  },
  advanced: {
    label: 'Advanced',
    definition: 'Owns complex work, resolves ambiguity, and guides technical decisions.',
  },
  lead: {
    label: 'Lead',
    definition: 'Integrates disciplines and is accountable for program-level outcomes.',
  },
};

// Provisional self-assessment based on the public resume and portfolio evidence.
export const expertiseSkills: ExpertiseSkill[] = [
  {
    slug: 'systems-integration',
    title: 'Systems integration',
    category: 'Technical leadership',
    level: 'lead',
    evidence:
      'Leads cross-functional hardware development through requirements, interfaces, supplier execution, testing, and configuration-controlled delivery.',
  },
  {
    slug: 'requirements-interfaces',
    title: 'Requirements & interfaces',
    category: 'Systems engineering',
    level: 'advanced',
    evidence:
      'Develops system requirements, interface definitions, verification plans, and change packages for safety-critical hardware.',
  },
  {
    slug: 'verification-validation',
    title: 'Verification & validation',
    category: 'Systems engineering',
    level: 'advanced',
    evidence:
      'Plans and coordinates verification evidence across analysis, inspection, supplier data, and integrated testing.',
  },
  {
    slug: 'mechanical-fluids',
    title: 'Mechanical & fluid systems',
    category: 'Engineering analysis',
    level: 'advanced',
    evidence:
      'Applies fluid, thermal, mechanical, and pressurized-system fundamentals from design through integration and test.',
  },
  {
    slug: 'configuration-management',
    title: 'Configuration management',
    category: 'Program execution',
    level: 'advanced',
    evidence:
      'Maintains traceability among controlled drawings, requirements, procedures, analyses, and engineering changes.',
  },
  {
    slug: 'cad-drawings',
    title: 'CAD & technical drawings',
    category: 'Mechanical design',
    level: 'proficient',
    evidence:
      'Creates and reviews production drawings using GD&T, ASME Y14 practices, and configuration-controlled CAD workflows.',
  },
  {
    slug: 'manufacturing-test',
    title: 'Manufacturing & test',
    category: 'Hardware execution',
    level: 'proficient',
    evidence:
      'Supports fabrication, precision inspection, assembly documentation, environmental testing, and flight-hardware readiness.',
  },
  {
    slug: 'computational-physics',
    title: 'Computational physics',
    category: 'Research & modeling',
    level: 'proficient',
    evidence:
      'Builds multiphysics models spanning plasma dynamics, magnetic-field interactions, and radiation transport.',
  },
  {
    slug: 'programming-automation',
    title: 'Programming & automation',
    category: 'Digital engineering',
    level: 'proficient',
    evidence:
      'Uses Python, MATLAB, VBA, Java, and LabVIEW for analysis, data workflows, modeling, and engineering automation.',
  },
];


