# Engineering portfolio

A responsive aerospace/mechanical engineering portfolio built with Astro and configured for
GitHub Pages. The starter emphasizes traceable engineering decisions, reusable project case
studies, technical writing, and careful handling of sensitive work.

> The checked-in content is intentionally sanitized. It does not claim real employers, programs,
> dates, education, performance values, or proprietary technical details. Replace placeholders
> only with facts approved for public release.

## Pages

- Home
- About
- Experience
- Projects and reusable case-study detail pages
- Technical Writing and article detail pages
- Print-ready Resume
- Contact
- Custom 404 page

## Tech stack

- [Astro](https://astro.build/) 7
- TypeScript with Astro's strict configuration
- Plain CSS and a small amount of native browser JavaScript
- GitHub Actions and GitHub Pages

There are no client UI frameworks, runtime APIs, trackers, or external font requests.

## Local development

Requirements:

- Node.js 22.12 or newer (Node.js 24 is used by the deployment action)
- pnpm

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Astro will print the local preview URL in the terminal.

## Validation

Run the static checks and production build before opening a pull request:

```bash
pnpm check
pnpm build
pnpm preview
```

Because `base: '/portfolio'` is configured in `astro.config.mjs`, preview URLs include the
`/portfolio/` path used by the GitHub project site.

## Customize the content

Start with these files:

| Content | File |
| --- | --- |
| Name, role, email, profile links | `src/data/site.ts` |
| Navigation labels | `src/data/site.ts` |
| Project case studies | `src/data/projects.ts` |
| Technical writing | `src/data/writing.ts` |
| Experience placeholders | `src/pages/experience.astro` |
| Resume placeholders | `src/pages/resume.astro` |
| Site colors and layout | `src/styles/global.css` |

See [`docs/CASE_STUDY_TEMPLATE.md`](docs/CASE_STUDY_TEMPLATE.md) for the project authoring and
public-release checklist. Adding an object to `src/data/projects.ts` automatically generates a
case-study page through `src/pages/projects/[slug].astro`.

### Before publishing

1. Replace `your.name@example.com` in `src/data/site.ts`.
2. Replace or remove every bracketed resume and experience prompt.
3. Confirm the display name and professional summary.
4. Review all content under employer, customer, NDA, export-control, and public-release rules.
5. Replace `public/og-card.svg` if the identity or visual direction changes.
6. Run the validation commands above.

## GitHub Pages deployment

`astro.config.mjs` is configured for:

```text
https://zatullier.github.io/portfolio/
```

The workflow at `.github/workflows/deploy.yml` builds and deploys every push to `main`. It can
also be run manually from the Actions tab.

After merging the initial pull request, perform the one-time repository setting if it is not
already enabled:

1. Open **Settings → Pages** in GitHub.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and monitor the `Deploy to GitHub Pages` workflow.

The workflow follows Astro's recommended `withastro/action` build and GitHub's official
`deploy-pages` flow. It does not push generated files to another branch.

### Custom domain

For a future custom domain:

1. Set `site` to the full custom origin in `astro.config.mjs`.
2. Remove the `base` value.
3. Add `public/CNAME` containing the domain.
4. Configure the domain and HTTPS in GitHub Pages settings.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── docs/CASE_STUDY_TEMPLATE.md
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content safety

This repository is public. Do not commit source material, screenshots, diagrams, numbers,
metadata, or descriptions that are proprietary, controlled, customer-owned, NDA-covered, or
otherwise restricted. When in doubt, keep the public description qualitative and seek the
appropriate release review.
