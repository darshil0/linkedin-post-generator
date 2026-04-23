# Changelog

All notable changes to PostGenius (LinkedIn Post Architect) are documented here.

## [1.5.0] - 2026-04-23
### Added
- **Interactive LinkedIn Preview**: A live mockup section that visualizes exactly how your post will look on the platform.
- **Inline Draft Editing**: All generated sections (Hook, Body, CTA, Tags) are now editable directly in the UI before saving.
- **Library Search**: Real-time filtering for the Architecture Library to find old drafts instantly.
- **Dark Mode**: High-fidelity dark theme with a manual toggle and persistence.
- **Advanced Character Progress**: Visual progress bar with color-coded alerts for LinkedIn's 3,000-character limit.
- **Expanded Template Engine**: Added 20+ new hook and body variations for better variety.
- **Documentation**: Added `Skills.md` and `Design.md` to the codebase.

### Changed
- Refactored project structure: moved core files to `src/` and tests to `tests/`.
- Optimized `localStorage` operations with robust error handling and duplicate prevention.
- Upgraded the UI with a premium Glassmorphism aesthetic and Inter typography.

## [1.4.1] - 2026-04-23
### Added
- Converted project to use ES Modules (ESM) for better consistency with modern JS standards and test environment.
- Updated `index.html` to use `type="module"` and simplified `script.test.js` imports.

### Fixed
- Removed unused `type` parameter from `getCTAs()` and `getBodies()` function definitions and all call sites (ESLint cleanup).
- Optimized casual-tone replacements in `getHooks()` using global case-insensitive regex for "master".
- Ensured "trajectory" -> "path" replacement is functional by updating the professional hook template.
- Cleaned `package.json`: removed all unused dependencies. ESLint and Vitest remain as dev-only tools.
- Bumped `package.json` version to `1.4.1`.
- Updated `README.md` to accurately reflect the vanilla JS / CSS architecture.

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
