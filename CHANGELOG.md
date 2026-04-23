# Changelog

All notable changes to PostGenius (LinkedIn post architect) are documented here.

## [1.7.1] - 2026-04-23
### Fixed
- **CI/CD Reliability**: Consolidated the deployment pipeline into a single job to prevent triggering and dependency issues.
- **Test Environment**: Added `jsdom` support to Vitest to safely handle browser-specific logic in the CI environment.
- **Unit Tests**: Corrected hashtag generation tests and function argument ordering to ensure 100% test passing.
- **Linting Configuration**: Migrated to a dedicated `.eslintrc.json` file for more stable and professional linting orchestration.

## [1.7.0] - 2026-04-23
### Changed
- **Full Codebase Refactor**: Standardized all JavaScript, HTML, and CSS to comply with the Google Coding Standards.
- **JavaScript Modernization**: Implemented JSDoc documentation, camelCase naming, and 2-space indentation.
- **HTML/CSS Optimization**: Alphabetized all CSS properties and standardized HTML attribute ordering for improved maintainability.
- **Documentation Overhaul**: Aligned all Markdown files with the Google Developer Documentation Style Guide.

## [1.6.0] - 2026-04-23
### Added
- **Skeleton loaders**: Implemented shimmering states for content generation to simulate AI processing.
- **Confetti particle system**: Added a particle burst animation when you save drafts to the library.
- **Dynamic avatar upload**: Added the ability to upload custom photos to the LinkedIn mockup preview.
- **Draft comparison grid**: Added a modal view to compare all generated hook variations side-by-side.
- **Contextual tooltips**: Added strategic guidance icons to form fields.
- **Critical character pulse**: Added an alert animation when the 3,000-character limit is reached.
- **Premium empty states**: Added SVG illustrations to the architecture library for an improved first-run experience.

### Changed
- Refined `style.css` with advanced shimmer, particle, and modal animations.
- Updated `script.js` with `FileReader` logic for avatars and `setTimeout` orchestration for skeleton states.

## [1.5.0] - 2026-04-23
### Added
- **Interactive LinkedIn preview**: Added a live mockup section to visualize your post on the platform.
- **Inline draft editing**: Added the ability to edit all generated sections directly in the UI.
- **Library search**: Added real-time filtering for the architecture library.
- **Dark mode**: Added a high-fidelity dark theme with a manual toggle and persistence.
- **Advanced character progress**: Added a visual progress bar with color-coded alerts.
- **Expanded template engine**: Added over 20 hook and body variations.
- **Documentation**: Added `Skills.md` and `Design.md` files.

### Changed
- Refactored project structure: moved core files to `src/` and tests to `tests/`.
- Optimized `localStorage` operations with robust error handling and duplicate prevention.
- Upgraded the UI with a glassmorphism aesthetic and Inter typography.
