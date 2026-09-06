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
    bullets: ['Aerospace', 'Mechanical', 'Analysis'],

  },
  {
    period: '2019–2021',
    title: 'Design-to-Flight Engineering',
    organization: 'NASA HUNCH Program',
    startYear: 2019,
    endYear: 2021,
    tone: 'hunch',
    disciplines: ['Flight hardware', 'Manufacturing', 'Verification'],
    bullets: ['Aerospace', 'Mechanical', 'Analysis'],
  },
  {
    period: '2021',
    title: 'Fluid Systems Engineering',
    organization: 'PBK / LEAF Engineers',
    startYear: 2021,
    endYear: 2021,
    tone: 'fluids',
    disciplines: ['Fluid systems', 'Hydraulics', 'Codes'],
    bullets: ['Aerospace', 'Mechanical', 'Analysis'],
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
    bullets: ['Aerospace', 'Mechanical', 'Analysis'],
  },
  {
    period: '2024–2026',
    title: 'Master of Science, Physics Research',
    organization: 'University of Houston–Clear Lake',
    startYear: 2024,
    endYear: 2026,
    tone: 'mast',
    disciplines: ['Plasma physics', 'Multiphysics', 'Radiation transport'],
    bullets: [Thesis: Suppression of radiation emissions from relativistic plasma by utilizing magnetic perturbations, 
              Developed and analyzed multiphysics models describing plasma-magnetic-field interactions, exploring how imposed magnetic perturbations can modify radiation spectra, energy losses, and confinement behavior - concepts applicable to nuclear, fusion, and high-energy reactor systems.],
  },
];
