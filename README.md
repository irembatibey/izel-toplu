# İzel Toplu — Website

Personal, educational website for İzel Toplu, Dil ve Konuşma Terapisti.
Static Next.js site, no backend, deployed to GitHub Pages on a custom domain.

## Status

**Phase 1 — Scaffolding.** Project structure, configuration, and
dependency manifest only. No design tokens, components, or pages
are implemented yet — see `/plan` discussion history for the full
phased roadmap.

## Getting started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in real values before
running anything that needs them (currently just the Formspree
endpoint, once that account exists).

## Architecture

- **Framework:** Next.js (App Router), TypeScript, static export (`output: 'export'`)
- **Styling:** Tailwind CSS + shadcn/ui (copied-in components, not an npm dependency)
- **Content:** MDX files under `src/content/`, kept separate from presentation components
- **Motion:** Framer Motion, respecting `prefers-reduced-motion`
- **Icons:** lucide-react exclusively — no emoji anywhere in the UI
- **Hosting:** GitHub Pages, custom domain (to be configured in the deployment phase)
- **Contact:** Formspree (no custom backend, no database, no auth)

## Quality gate (mandatory, every phase)

No phase is considered complete until all of the following pass:

1. `npm install` (or `npm ci` in CI)
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. GitHub Actions CI (`.github/workflows/ci.yml`) passing on the corresponding commit

If any of these fail, work stops, the issue and proposed fix are explained, and the next phase does not start until it's resolved and approved.

## Security notes

- No secrets are used or required by this project at present — the
  only environment variable (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`) is a
  public form identifier, not a secret.
- Real environment values are never committed — see `.gitignore`.
- No API routes, database, or authentication exist, by design —
  the site has no functionality that requires them.
