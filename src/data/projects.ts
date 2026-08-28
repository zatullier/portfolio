export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  disciplines: string[];
  challenge: string;
  constraints: string[];
  approach: Array<{ title: string; description: string }>;
  artifacts: string[];
  outcome: string;
  reflection: string;
};

export const projects: Project[] = [
  {
    slug: 'thermal-margin-assessment',
    number: '01',
    title: 'Thermal Margin Assessment',
    eyebrow: 'Analysis · Sanitized case study',
    summary:
      'A traceable way to turn uncertain environments, heat paths, and limits into a decision-ready margin story.',
    status: 'Representative example — values and program context intentionally omitted',
    disciplines: ['Thermal analysis', 'Requirements', 'Sensitivity studies'],
    challenge:
      'A flight-like assembly needed a defensible view of thermal margin across several operating modes. The useful answer was not a single temperature; it was a clear explanation of assumptions, sensitivities, and decision thresholds.',
    constraints: [
      'Incomplete early-phase inputs and evolving boundary conditions',
      'Multiple operating modes with different dominant heat paths',
      'A review audience spanning analysis, design, and systems engineering',
    ],
    approach: [
      {
        title: 'Frame the decision',
        description:
          'Translated the request into explicit questions, success criteria, and a small set of controlling requirements.',
      },
      {
        title: 'Build traceability',
        description:
          'Structured the calculation flow so each assumption, input source, model step, and margin result could be reviewed independently.',
      },
      {
        title: 'Expose sensitivity',
        description:
          'Varied the highest-uncertainty inputs to show which unknowns materially changed the recommendation and which did not.',
      },
      {
        title: 'Communicate the result',
        description:
          'Condensed the analysis into a review package organized around margins, risks, and the next most valuable piece of evidence.',
      },
    ],
    artifacts: [
      'Assumption and source register',
      'Mode-by-mode thermal balance',
      'Sensitivity matrix',
      'Decision-focused review summary',
    ],
    outcome:
      'The resulting framework made the margin logic auditable and highlighted the uncertainties worth resolving first. Quantitative results and identifying details are intentionally excluded from this public example.',
    reflection:
      'The strongest technical deliverable was the chain of reasoning, not the final number. A model becomes decision-grade when another engineer can challenge its assumptions and still follow the logic.',
  },
  {
    slug: 'structural-test-correlation',
    number: '02',
    title: 'Structural Test Correlation',
    eyebrow: 'Verification · Sanitized case study',
    summary:
      'A disciplined model-to-test workflow that treats disagreement as information instead of hiding it in a scale factor.',
    status: 'Representative example — geometry, loads, and results generalized',
    disciplines: ['Structural analysis', 'Test planning', 'Data reduction'],
    challenge:
      'An analytical model and a physical test needed to tell a coherent story about load path and stiffness. The central task was to distinguish instrumentation effects, boundary-condition mismatch, and model-form error.',
    constraints: [
      'Limited sensor coverage and finite test time',
      'Boundary conditions that could not be reproduced perfectly in analysis',
      'The need to preserve pre-test predictions and avoid hindsight bias',
    ],
    approach: [
      {
        title: 'Define correlation metrics',
        description:
          'Set comparison quantities and acceptance logic before reviewing test results, including both local and global response measures.',
      },
      {
        title: 'Protect the baseline',
        description:
          'Archived pre-test assumptions and predictions so later model updates remained explicit, reviewable engineering choices.',
      },
      {
        title: 'Interrogate mismatches',
        description:
          'Worked from measurement quality and fixture behavior toward model detail, changing one defensible assumption at a time.',
      },
      {
        title: 'Close the loop',
        description:
          'Documented what the test validated, what remained uncertain, and how the correlated model could be used responsibly.',
      },
    ],
    artifacts: [
      'Pre-test prediction package',
      'Sensor-to-model mapping',
      'Correlation scorecard',
      'Model update log',
    ],
    outcome:
      'The process produced a bounded, explainable model update and a clearer understanding of residual uncertainty. Program-specific acceptance values are not included.',
    reflection:
      'Correlation is most credible when every adjustment has a physical explanation. Agreement by itself is not evidence that the model is right for the right reason.',
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
