# AI Contributor Guide

Cadl Ranch is a pnpm monorepo for defining API scenarios and mock APIs, running
them with a test server, and collecting client-generator coverage.

## Repository layout

- `packages/cadl-ranch`: CLI, server, validation, and coverage tooling.
- `packages/cadl-ranch-api`, `packages/cadl-ranch-expect`, and
  `packages/cadl-ranch-coverage-sdk`: shared libraries used by the CLI.
- `packages/cadl-ranch-specs/http`: scenario specifications (`main.cadl`) and
  their mock APIs (`mockapi.ts`).
- `packages/cadl-ranch-dashboard`: coverage dashboard.
- `docs`: authoring and usage guides.

## Development

- Use Node.js 16+ and pnpm 7.6.0+.
- Install dependencies with `pnpm install`.
- Build all packages with `pnpm build`; use `pnpm watch` for watch mode.
- Run focused checks while working. Before a pull request, follow the README
  checklist: `pnpm validate-scenarios`, `pnpm validate-mock-apis`,
  `pnpm generate-scenarios-summary`, `pnpm format`, `pnpm cspell`, and
  `pnpm changeset add` (or `pnpm changeset add --empty`). Also use `pnpm lint`
  and `pnpm check-format` when appropriate.
- `pnpm generate-scenarios-summary` regenerates the scenario summary. Include
  generated changes only when they are part of the task.
- Do not run upload commands unless explicitly requested; they publish coverage
  or manifests to shared storage.

## Scenario contributions

- Add scenarios under `packages/cadl-ranch-specs/http`, following
  `docs/writing-scenario-spec.md`.
- Give each scenario a meaningful name, a focused behavior, and documentation
  that explains the expected client behavior.
- Add or update the companion `mockapi.ts` in the same scenario directory.
  Follow `docs/writing-mock-apis.md`.
- Check the contribution checklist in `.github/pull_request_template.md`.
- For package changes, follow the repository's changeset guidance. Avoid
  unrelated edits and do not manually edit generated files.

When working in any package, check its `package.json` for package-specific
scripts and use the existing tooling rather than introducing new tools.
