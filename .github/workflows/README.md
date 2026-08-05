# .github/workflows/

- `ci.yml` — quality verification only (install, lint, typecheck,
  build). Runs on every push and PR. No deployment step.
- Deployment workflow (build + publish to GitHub Pages) is still
  deferred to the deployment phase, per explicit instruction not
  to deploy yet — it will be added as a separate workflow file
  when that phase starts, not folded into ci.yml.
