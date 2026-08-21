# Applied Teaming — Documentation

A step-by-step walkthrough of the Applied Teaming student and faculty experience,
built with [VitePress](https://vitepress.dev).

## Develop

```bash
npm install
npm run docs:dev      # local dev server
npm run docs:build    # build to docs/.vitepress/dist
npm run docs:preview  # preview the build
```

## Deploy

Pushing to `main` builds and publishes the site to **GitHub Pages** via
`.github/workflows/deploy.yml` (enable Pages once: repo **Settings → Pages →
Source: GitHub Actions**). The site is served under `/appliedteaming-docs/`.

To host elsewhere (e.g. Vercel), build with `DOCS_BASE=/` and serve
`docs/.vitepress/dist`.
