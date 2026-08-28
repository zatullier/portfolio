export type WritingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type WritingPiece = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  lede: string;
  sections: WritingSection[];
};

export const writing: WritingPiece[] = [
  {
    slug: 'decision-memos-engineers-can-use',
    category: 'Technical communication',
    title: 'Decision memos engineers can actually use',
    summary:
      'A compact structure for preserving technical reasoning without burying the decision.',
    readTime: '4 min read',
    lede:
      'A good decision memo lets a reader understand what changed, why it matters, and what evidence supports the recommendation—without recreating the entire analysis.',
    sections: [
      {
        heading: 'Start with the decision, not the history',
        paragraphs: [
          'Open with the choice that must be made, the recommended path, and the consequence of waiting. Background belongs only where it changes how the reader should evaluate the recommendation.',
          'This framing is especially useful in multidisciplinary work, where each reviewer needs a common decision surface before diving into discipline-specific evidence.',
        ],
      },
      {
        heading: 'Make the evidence traceable',
        paragraphs: [
          'Summarize the analysis at the level needed for the decision, then link each conclusion to an assumption, test, calculation, or source. Traceability builds confidence without turning the memo into a report.',
        ],
        bullets: [
          'State the controlling requirement or objective.',
          'Name the assumptions that could reverse the recommendation.',
          'Separate observed evidence from engineering judgment.',
          'Record dissent, residual risk, and the owner of the next action.',
        ],
      },
      {
        heading: 'End with a durable record',
        paragraphs: [
          'Close with the decision, conditions of approval, and follow-up actions. Months later, another engineer should be able to tell what was known at the time and why the chosen path was reasonable.',
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
