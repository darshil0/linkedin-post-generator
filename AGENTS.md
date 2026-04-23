# Agent Instructions: LinkedIn Post Architect

You are an AI agent tasked with maintaining and improving the LinkedIn Post Architect (PostGenius).

## Project Overview
This is a high-fidelity static web application built with HTML5, CSS3, and modern ES Modules. It allows users to generate strategic LinkedIn posts using proven content frameworks. The application is deployed via GitHub Pages with a focus on local privacy and zero-build complexity.

## Tech Stack
- **Frontend**: Vanilla ES6+ JavaScript (ES Modules), CSS3 (HSL Variables, Glassmorphism, CSS Grid).
- **Tooling**: Vitest (Testing), ESLint (Linting).
- **Persistence**: Browser `localStorage` with JSON serialization and robust error handling.
- **Deployment**: Static GitHub Pages via GitHub Actions.

## Project Structure
```
.
├── index.html              # Main Entry (Imports src/script.js as module)
├── src/
│   ├── script.js           # Core Business Logic & DOM (ESM)
│   └── style.css           # Premium Design System (HSL themes)
├── tests/
│   └── script.test.js      # Vitest Test Suite
├── assets/
│   └── mockup.png          # UI Mockup Asset
├── README.md               # User Documentation
├── CHANGELOG.md            # Version & Change History
├── Skills.md               # Technical Competency Guide
├── Design.md               # Design System Specification
├── AGENTS.md               # This File
├── package.json            # Dev Tooling & Metadata
├── LICENSE                 # MIT License
└── .github/                # Automation Workflows
```

## Coding Conventions
- **ES Modules**: Always use `export` for functional logic in `src/script.js`. Import these in `tests/script.test.js`.
- **Theming**: Use HSL CSS variables for colors to support Dark/Light mode seamlessly.
- **Glassmorphism**: Maintain the premium look using `backdrop-filter` and subtle hsla-based borders.
- **Security**: Strictly use `textContent` or `createTextNode` for rendering user data. Avoid `innerHTML` with dynamic content.
- **Robustness**: Wrap `localStorage` and `JSON.parse` operations in `try-catch` blocks.

## Workflow
- **Code Changes**: Logic and UI changes should be made in `src/script.js` and `src/style.css`.
- **Testing**: Run `npm run test` after any logic changes to ensure no regressions in the generation engine.
- **Documentation**: Update `README.md` and `CHANGELOG.md` for every release. Ensure `Design.md` is updated if the color palette or UI components change.

## Verification
- **Functional**: Verify generation, editing, saving, and searching.
- **Visual**: Test Dark/Light mode toggling and responsiveness at 600px, 950px, and 1200px.
- **Persistence**: Ensure edits to drafts persist in the Architecture Library across reloads.
- **Console**: Monitor browser DevTools for any uncaught errors or performance warnings.

## localStorage Data Structure
Posts are stored as JSON in the `post_library` key:
```javascript
{
  id: number,                    // Timestamp-based unique ID
  post_type: string,             // Framework type (e.g., 'story')
  hook: string,                  // Scroll-stopping opening
  post: string,                  // Main body content
  cta: string,                   // Call to action
  hashtags: string[],            // Optimized tags
  idea: string,                  // User's original topic
  alt_versions: [{hook}, ...]    // Other generated hooks
}
```

## Common Tasks

### Adding a New Post Type
1. Add an `<option>` to the `#post-type` select in `index.html`.
2. Expand the `templates` object in `src/script.js` -> `getHooks()`.
3. Add specialized logic to `getBodies()` if needed.
4. Update unit tests in `tests/script.test.js` to cover the new type.

### Modifying the Design
1. Update HSL variables in `src/style.css` (both light and dark themes).
2. Ensure new components adhere to the Glassmorphism standards in `Design.md`.
3. Verify that transitions and entrance animations remain smooth.

### Handling New Input Fields
1. Update the generation logic in `src/script.js` to accept the new input.
2. Ensure the LinkedIn Mockup logic is updated to visualize the new data.
3. Update the `localStorage` schema documentation if the saved object changes.
