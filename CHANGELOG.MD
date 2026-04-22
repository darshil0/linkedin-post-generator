# Changelog

All notable changes to the LinkedIn Post Architect project will be documented in this file.

## [1.2.0] - 2026-04-22
### Added
- **Firebase Integration**: Full user authentication (Google login) and Cloud Firestore persistence.
- **My Library**: A workspace where users can save, delete, and reload post drafts.
- **Enhanced UI Feedback**: Replaced standard alerts with inline success/error states and checkmark animations.
- **GitHub Pages Fix**: Resolved issue where the app would fail to load on sub-path deployments (GitHub Pages) by updating a relative base path in Vite.

### Changed
- **Elite Prompt Strategy**: Major overhaul of the AI system instructions to follow top-tier content strategy (Mix of short/long sentences, sparse emoji protocol, restrictive jargon).
- **Reflective CTAs**: Updated the generation logic to prefer reflective questions over generic engagement bait.

## [1.1.0] - 2026-04-22
### Added
- **Clean Minimalism Theme**: Applied a refined professional aesthetic with a two-pane layout and slate/blue color palette.
- **Alternate Versions**: Support for generating multiple hook variations and draft variations in a single click.

## [1.0.0] - 2026-04-22
### Added
- **Initial Release**: Core generation logic using Gemini AI, style/tone selection, and basic LinkedIn mockup preview.
