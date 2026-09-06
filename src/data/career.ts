export type CareerTimelineItem = {
  period: string;
  title: string;
  organization: string;
  startYear: number;
  endYear: number;
  current?: boolean;
  tone: 'foundation' | 'hardware' | 'fluids' | 'systems' | 'research';
  disciplines: string[];
};

export const timelineStartYear = 2016;
export const timelineEndYear = 2026;

export const careerTimeline: CareerTimelineItem[] = [
  {
    period: '2016–2021',
    title: 'Aerospace + Mechanical Engineering',
    organization: 'Oklahoma State University',
    startYear: 2016,
    endYear: 2021,
    tone: 'foundation',
    disciplines: ['Aerospace', 'Mechanical', 'Analysis'],
  },
  {
    period: '2019–2021',
    title: 'Design-to-Flight Engineering',
    organization: 'NASA HUNCH Program',
    startYear: 2019,
    endYear: 2021,
    tone: 'hardware',
    disciplines: ['Flight hardware', 'Manufacturing', 'Verification'],
  },
  {
    period: '2021',
    title: 'Fluid Systems Engineering',
    organization: 'PBK / LEAF Engineers',
    startYear: 2021,
    endYear: 2021,
    tone: 'fluids',
    disciplines: ['Fluid systems', 'Hydraulics', 'Codes'],
  },
  {
    period: '2021–Present',
    title: 'Project Engineering',
    organization: 'Leidos / KBR · NASA contracts',
    startYear: 2021,
    endYear: 2026,
    current: true,
    tone: 'systems',
    disciplines: ['Systems integration', 'Mechanical + fluids', 'Verification', 'Leadership'],
  },
  {
    period: '2024–2026',
    title: 'M.S. Physics Research',
    organization: 'University of Houston–Clear Lake',
    startYear: 2024,
    endYear: 2026,
    tone: 'research',
    disciplines: ['Plasma physics', 'Multiphysics', 'Radiation transport'],
  },
];
