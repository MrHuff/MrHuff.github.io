# Robert Hu — academic website

Personal academic website for Robert Hu, built with React and Vinext and prepared
for deployment at https://mrhuff.github.io/.

## Local development

Install dependencies with npm install, then start the local site with npm run
dev.

## Validation

- npm run build creates the standard Sites deployment build.
- npm run build:pages creates the static GitHub Pages build in dist/client.
- npm test builds the site and checks the rendered homepage.

## Publishing

Push the main branch to the public MrHuff/mrhuff.github.io repository. The
GitHub Actions workflow builds the static version and publishes it with GitHub
Pages.

Research and career content is based on Robert's August 2026 CV and linked
primary publication records.

## Technical reports

The two Graphcore Research technical reports are listed with the date
3 September 2026, matching their early-September public report history.
Their PDFs are hosted in `public/papers/` and their publication entries in
`app/page.tsx` link to the corresponding code repositories.

- `fast-polynomial-transcendentals.pdf`: the attributed Graphcore report from
  `MrHuff/fast-polynomial-transcendentals` at `e022698`, copied unchanged from
  `extras/paper/manuscript/main.pdf` (September 2026 cover).
- `mfu-fp4-training.pdf`: built from the public Graphcore-branded source in
  `MrHuff/mfu-fp4-training` at `0e9716e`, using
  `docs/technical_report/main.tex` and its existing figures. This source includes
  the branding update made after release `v0.2.3`.

When an arXiv record becomes available, add its URL as the publication's `href`.
The title will link to arXiv while the separate `pdf` download remains available.
