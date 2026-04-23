# Changelog

All notable changes to the LinkedIn Post Architect project will be documented in this file.

## [1.3.0] - 2026-04-22
### Added
- **A/B Preference Learning**: Users can now select winning variations in A/B mode. selections are stored in Firestore and used to bias future AI generations towards the user's preferred structures and hooks.
- **Multi-Source Trend Scouting**: Integrated Reddit as a secondary trend source alongside LinkedIn, powered by Gemini + Google Search real-time grounding.
- **Recursive Refinement Engine**: A new chat-like interface to refine specific parts of generated posts based on follow-up user feedback.
- **A/B Performance Mode**: Side-by-side comparison view for contrasting two distinct AI-generated psychological angles.

## [1.2.0] - 2026-04-22
### Added
- **Firebase Integration**: Full user authentication (Google login) and Cloud Firestore persistence.
- **My Library**: A workspace where users can save, delete, and reload post drafts.
- **Scheduling Feature**: Added a built-in scheduler allowing users to plan LinkedIn posts for specific future dates and times.
- **UI Refactoring**: Component-based architecture for LinkedIn cards and previews.

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
