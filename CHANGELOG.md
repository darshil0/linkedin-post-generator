# Changelog

All notable changes to the LinkedIn Post Architect project will be documented in this file.

## [1.3.0] - 2026-04-22
### Added
- **Architecture Library**: Implemented local persistence using `localStorage`, allowing users to save and manage drafts.
- **Enhanced UI/UX**: Completely redesigned the interface with a professional two-pane layout, improved typography, and smooth animations.
- **Elite Generation Engine**: Refined the template logic to follow "The Slide" and "Pattern Interrupt" content strategies.
- **Toast Notifications**: Added non-intrusive feedback for user actions like saving and deleting.

### Changed
- **Tech Stack Cleanup**: Confirmed codebase uses Vanilla JS as the source of truth for static GitHub Pages deployment.
- **Dependencies**: Removed unused React/Vite/Firebase dependencies to simplify the build and deployment pipeline.

### Fixed
- **Template String Substitution**: Corrected dynamic template strings in `getBodies()` function to properly interpolate `${idea}` in medium and long length variations.
- **Package.json**: Updated to reflect zero-dependency static application.
- **Build Configuration**: Removed unnecessary Vite, TypeScript, and Tailwind configuration files.

## [1.2.0] - 2026-04-22
### Added (Reference Version)
- **Firebase Integration**: Full user authentication (Google login) and Cloud Firestore persistence (archived reference).
- **My Library**: A workspace where users can save, delete, and reload post drafts.
- **Enhanced UI Feedback**: Replaced standard alerts with inline success/error states and checkmark animations.

### Changed
- **Elite Prompt Strategy**: Major overhaul of the AI system instructions to follow top-tier content strategy.

## [1.1.0] - 2026-04-22
### Added
- **Clean Minimalism Theme**: Applied a refined professional aesthetic with a two-pane layout and slate/blue color palette.
- **Alternate Versions**: Support for generating multiple hook variations.

## [1.0.0] - 2026-04-22
### Added
- **Initial Release**: Core generation logic, style/tone selection, and basic LinkedIn mockup preview.
