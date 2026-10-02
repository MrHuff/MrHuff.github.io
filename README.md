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

The two papers use the same format as the other arXiv publications: year,
arXiv venue, linked title, authors, and code links. The original Graphcore
technical-report PDFs remain hosted in `public/papers/` at their existing URLs.

- `fast-polynomial-transcendentals.pdf`: the attributed Graphcore report from
  `MrHuff/fast-polynomial-transcendentals` at `e022698`, copied unchanged from
  `extras/paper/manuscript/main.pdf` (September 2026 cover).
- `mfu-fp4-training.pdf`: built from the public Graphcore-branded source in
  `MrHuff/mfu-fp4-training` at `0e9716e`, using
  `docs/technical_report/main.tex` and its existing figures. This source includes
  the branding update made after release `v0.2.3`.

The publication titles link to
[2610.00049](https://arxiv.org/abs/2610.00049) (polynomial transcendentals) and
[2610.00053](https://arxiv.org/abs/2610.00053) (FP4 fusion).

## Posts

The `/posts/` page lives in `app/posts/page.tsx` and shares the navigation in
`app/components/site-header.tsx` with the homepage. It lists posts with a date,
title and short summary. The first post, [The case for FP4](https://mrhuff.github.io/posts/the-case-for-fp4/),
is dated 2 October 2026 and lives in `app/posts/the-case-for-fp4/page.tsx`.
Add future posts under `app/posts/<slug>/page.tsx` and add a dated link and
summary to the index. Both the index and individual posts are exported by
`npm run build:pages` for GitHub Pages.

The Pages build exports without trailing-slash redirects, then
`scripts/prepare-pages.mjs` adds directory indexes for URLs such as `/posts/`.
This avoids a Vinext prerender issue that silently skips redirected routes.
The build fails if any route is skipped or either page entry point is missing.
