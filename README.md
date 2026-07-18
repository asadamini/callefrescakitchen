# Calle Fresca Mexican Kitchen

Standalone catering website for Calle Fresca Mexican Kitchen, built from the Figma Make export and deployed with GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Quote Form

The quote form posts to FormSubmit at `callefrescakitchen@gmail.com`.

The first time the form is submitted, FormSubmit may send a confirmation email to that inbox. Confirm it once so future requests are delivered.

## Updating Content

- Main website content lives in `src/app/App.tsx`.
- Images used by the Figma export live in `src/imports/`.
- Shared generated UI pieces live in `src/app/components/`.
- Keep replacement image filenames lowercase, descriptive, and hyphenated.

## GitHub Pages Deployment

This project is configured for GitHub Pages under:

```text
https://asadamini.github.io/callefrescakitchen/
```

Deployment runs from `.github/workflows/deploy.yml` whenever changes are pushed to `main`.

To publish manually:

```bash
git add .
git commit -m "Initial Calle Fresca website"
git push origin main
```

Then in GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set source to GitHub Actions if it is not already selected.
