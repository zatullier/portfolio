export type CareerTimelineItem = {
  period: string;
  title: string;
  organization: string;
  startYear: number;
  endYear: number;
  current?: boolean;
  tone: 'foundation' | 'hardware' | 'fluids' | 'systems' | 'research';
  disciplines: string[];
  bullets: string[];
  location: string;
  startMonth: string;
  endMonth: string;
};

export const timelineStartYear = 2016;
export const timelineEndYear = 2026;

export const careerTimeline: CareerTimelineItem[] = [
  {
    period: '2016–2021',
    title: 'Bachelors of Science, Dual Degree - Mechanical + Aerospace Engineering',
    organization: 'Oklahoma State University',
    startYear: 2016,
    endYear: 2021,
    tone: 'Bach',
    disciplines: ['Aerospace', 'Mechanical', 'Analysis'],
    bullets: ['Ayo', 'Ayo', 'Ayo'],
    location: ['Ayo'],
    startMonth: ['Ayo'],
    endMonth: ['Ayo'],

  },
  {
    period: '2019–2021',
    title: 'Design-to-Flight Engineering',
    organization: 'NASA HUNCH Program',
    startYear: 2019,
    endYear: 2021,
    tone: 'hunch',
    disciplines: ['Flight hardware', 'Manufacturing', 'Verification'],
    bullets: ['Ayo', 'Ayo', 'Ayo'],
    location: ['Ayo'],
    startMonth: ['Ayo'],
    endMonth: ['Ayo'],
  },
  {
    period: '2021',
    title: 'Fluid Systems Engineering',
    organization: 'PBK / LEAF Engineers',
    startYear: 2021,
    endYear: 2021,
    tone: 'fluids',
    disciplines: ['Fluid systems', 'Hydraulics', 'Codes'],
    bullets: ['Designed mechanical piping, pumping, and venting systems across commercial and institutional facilities, applying code-driven requirements (IPC, IMC, NFPA) and engineering criteria for pressure containment, flow performance, materials compatibility, and operational safety.', 
              'Performed pressure-drop, flow balance, and hydraulic performance calculations to validate line sizing, pump requirements, vent routing, and system stability under normal and off-nominal operating conditions.', 
              'Developed standardized analysis tools (Excel/VBA, Python templates) for fluid flow calculations, enabling consistent design packages and reducing engineering cycle time across the team.',
              'Authored repeatable reporting templates capturing system assumptions, performance criteria, load conditions, and compliance considerations - used by multiple design teams to maintain documentation quality.',
              'Conducted on-site inspections to compare real-world installation constraints with engineered models, validating space envelopes, routing feasibility, materials condition, tie-in locations, and as-built compliance.',
              'Coordinated with mechanical, civil, architectural, and controls disciplines to refine routing decisions, address conflicts, and ensure system integration met functional and regulatory requirements.',
              'Evaluated constructability constraints and provided recommendations to resolve installation conflicts in congested mechanical spaces.',
              'Supported the creation of equipment schedules, material specifications, and cut sheets to ensure selected components met performance, durability, and code-compliance requirements.',
              ],
    location: ['Ayo'],
    startMonth: ['Ayo'],
    endMonth: ['Ayo'],
  },
  {
    period: '2021–Present',
    title: 'Project Engineering',
    organization: 'Leidos / KBR · NASA contracts',
    startYear: 2021,
    endYear: 2026,
    current: true,
    tone: 'pe',
    disciplines: ['Systems integration', 'Mechanical + fluids', 'Verification', 'Leadership'],
    bullets: ['Lead $5M hardware development projects for life support systems supporting Artemis and Blue Origin Moon missions and International Space Station missions.',
              'Evaluate project impacts on budget, schedule, and resource allocation.', 
              'Developed and maintained system architecture documentation, including system-level requirements, interface definitions, verification plans, test requirements, and mechanical/fluid schematics.',
              'Interfaced with mechanical, electrical/I&amp;C, software, thermal, structural, quality assurance, procurement, NASA stakeholders, test, and safety teams to ensure system-level requirements were met and maintained through configuration control.',
              'Assessed design changes through engineering change packages, coordinating updates to system drawings, requirements, test procedures, and analytical models.',
              'Developed, integrated, and tested safety-critical mechanical and fluid systems for spaceflight hardware, applying strict configuration management, design controls, and standards compliance under NASA/JSC protocols.',
              'Translated mission and safety requirements into Design Basis-style documents, engineering specifications, and validation plans.',
              'Assessed system-level failure modes or analyzed component-level impacts on mission-critical systems.',
              'Create and interpret engineering drawings in compliance with GD&amp;T, ASME Y14, and NASA/JSC standards, including material, process, and fastener specifications.',
              'Generated technical documentation packages, design reports, verification matrices, safety assessments, and configuration-controlled change packages supporting design certification.',
              'Provided technical direction to suppliers for component fabrication, verification data packages, inspection requirements, and materials/process compliance.',
               'Automated data workflows for assemblies comprising 400+ subcomponents.'],
    location: ['Johnson Space Center - Houston, Texas'],
    startMonth: ['Ayo'],
    endMonth: ['Ayo'],
  },
  {
    period: '2024–2026',
    title: 'Master of Science, Physics Research',
    organization: 'University of Houston–Clear Lake',
    startYear: 2024,
    endYear: 2026,
    tone: 'mast',
    disciplines: ['Plasma physics', 'Multiphysics', 'Radiation transport'],
    bullets: ['Thesis: Suppression of radiation emissions from relativistic plasma by utilizing magnetic perturbations', 
              'Developed and analyzed multiphysics models describing plasma-magnetic-field interactions, exploring how imposed magnetic perturbations can modify radiation spectra, energy losses, and confinement behavior - concepts applicable to nuclear, fusion, and high-energy reactor systems.',
              'Conducted advanced theoretical and computational modeling of relativistic plasmas, focusing on the mechanisms governing Bremsstrahlung and synchrotron radiation in high-temperature, high-density environments.',
              'Developed and analyzed multiphysics models describing plasma-magnetic-field interactions, exploring how imposed magnetic perturbations can modify radiation spectra, energy losses, and confinement behavior - concepts applicable to nuclear, fusion, and high-energy reactor systems.',
              'Applied quantum and classical radiation theory, transport equations, and field-particle interaction models to evaluate how perturbative magnetic geometries influence emissivity, stability, and energy balance.',
              'Produced research combining plasma physics, electrodynamics, computational modeling, and radiation transport - skills directly translatable to nuclear system analysis, radiation effects evaluation, and multiphysics design integration.'
              ],
    location: ['Houston, Texas'],
    startMonth: ['Ayo'],
    endMonth: ['Ayo'],
    
  },
];
