# Changelog

All notable changes to PostGenius (LinkedIn Post Architect) are documented here.

## [1.4.1] - 2026-04-23
### Fixed
- Removed unused `type` parameter from `getCTAs()` function definition and all call sites (ESLint warning).
- Applied global regex flags to casual-tone replacements in `getHooks()` — previously only the first match was replaced per string.
- Removed inline casual-tone overrides from `lesson` and `educational` hook templates that were already correct, reducing redundant replacements.
- Cleaned `package.json`: removed all unused dependencies (React, Vite, Firebase, Tailwind, TypeScript, Express, Lucide) that had accumulated from earlier experiments. Runtime now has zero dependencies; ESLint and Vitest remain as dev-only tools.
- Bumped `package.json` version to `1.4.0` to match current release and set `"type": "module"` for correct ES module resolution in tests.
- Updated `README.md` to accurately reflect the vanilla JS / CSS architecture, project structure, and setup steps. Removed references to React, Vite, and Tailwind that no longer apply.

### Notes
- Firebase config files (`firebase-applet-config.json`, `firebase-blueprint.json`, `firestore.rules`) should be deleted from the repository. They are unused legacy artifacts from an earlier Firebase reference implementation and one contains a hardcoded API key.
- `vite.config.ts` and `tsconfig.json`, if still present, can also be deleted — the project has no build step.

## [1.4.0] - 2026-04-23
### Added
- Copy to Clipboard: one-click copy for generated posts.
- Clear Form button to reset all inputs.
- Real-time character counter on the post idea textarea.
- ARIA labels and improved semantic structure for screen reader support.

### Changed
- Upgraded ESLint and Vitest to latest versions.
- UI refinements for interactive elements and feedback states.
- Consolidated documentation; removed duplicate changelog files.

## [1.3.0] - 2026-04-22
### Added
- Architecture Library: `localStorage`-backed draft persistence — save, view, and delete drafts across sessions.
- Redesigned interface with a two-pane layout, improved typography, and fade-in animations.
- Refined template logic following "The Slide" and "Pattern Interrupt" content strategies.
- Toast notifications for save, delete, copy, and error states.

### Changed
- Removed unused React/Vite runtime references from active application code. Vanilla JS is now the sole source of truth.

## [1.2.0] - 2026-04-22
### Added
- Firebase Authentication (Google login) and Cloud Firestore persistence — reference implementation only, not active in current build.
- My Library workspace for saving, deleting, and reloading drafts.
- Inline success/error states replacing standard browser alerts.

### Changed
- Major overhaul of post generation templates for stronger hook quality.

## [1.1.0] - 2026-04-22
### Added
- Two-pane layout with slate/blue color palette.
- Alternate hook variations per generated post.

## [1.0.0] - 2026-04-22
### Added
- Initial release: core generation logic, style and tone selection, LinkedIn mockup preview.
