# Project case-study template

The live case-study layout is implemented by `src/components/ProjectCaseStudy.astro`. Project
content lives in `src/data/projects.ts`, where the `Project` type documents every required field.

To add a case study:

1. Duplicate one object in the exported `projects` array.
2. Give it a unique, URL-safe `slug` and sequential `number`.
3. Replace every field using the editorial prompts below.
4. Run `pnpm check` and `pnpm build`.
5. Review the generated page on desktop, mobile, and in print where relevant.

The dynamic route at `src/pages/projects/[slug].astro` will create the page automatically.

## Editorial prompts

### Title and summary

- Use a problem or decision name, not an internal program name.
- Explain why the work mattered in one sentence.
- Mark the case study as sanitized when any context has been generalized.

### Challenge

- What decision or engineering question was unresolved?
- What made the question difficult?
- Avoid customer names, vehicle names, drawing numbers, part numbers, and controlled categories.

### Constraints

- Which physical, schedule, interface, evidence, or maturity constraints shaped the method?
- Prefer qualitative descriptions unless a value is explicitly approved for public release.

### Approach

Use four stages that make the reasoning reviewable. A useful pattern is:

1. Frame the decision.
2. Establish a baseline and traceable inputs.
3. Test high-leverage assumptions or sensitivities.
4. Communicate the recommendation and remaining risk.

### Artifacts

Name the engineering outputs without exposing their contents—for example, “correlation scorecard,”
“assumption register,” or “test readiness package.”

### Outcome

- State what changed in the decision, risk posture, or team understanding.
- Do not invent metrics. Use a qualitative result when a number cannot be disclosed.
- Distinguish the work you personally owned from team output.

### Reflection

Capture one transferable engineering lesson. This is the best place to show judgment without
sharing restricted details.

## Public-release checklist

- [ ] Employer and customer policies permit publication.
- [ ] No proprietary, export-controlled, ITAR, CUI, or NDA-covered details are present.
- [ ] Images and diagrams are original or cleared for use.
- [ ] Every number and outcome is verifiable and approved.
- [ ] Personal contribution is precise and does not claim team work as individual work.
- [ ] Metadata, filenames, alt text, and document links have also been reviewed.
