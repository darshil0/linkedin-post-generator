# Agent instructions: LinkedIn post architect

You are an AI agent tasked with maintaining and improving the LinkedIn Post Architect (PostGenius).

## Project overview
PostGenius is a high-fidelity static web application built with HTML5, CSS3, and modern ES Modules. It allows you to generate strategic LinkedIn posts using proven content frameworks. The application is deployed via GitHub Pages and focuses on local privacy and zero-build complexity.

## Tech stack
- **Frontend**: Vanilla ES6+ JavaScript (ES Modules), CSS3 (HSL variables, glassmorphism, CSS Grid).
- **Tooling**: Vitest (Testing), ESLint (Linting).
- **Persistence**: Browser `localStorage` with JSON serialization and error handling.
- **Deployment**: Static GitHub Pages via GitHub Actions.

## Project structure
```
.
├── index.html              # Main entry
├── src/
│   ├── script.js           # Core business logic (ESM)
│   └── style.css           # Design system (HSL themes)
├── tests/
│   └── script.test.js      # Vitest test suite
├── assets/
│   └── mockup.png          # UI mockup asset
├── README.md               # User documentation
├── CHANGELOG.md            # Version and change history
├── Skills.md               # Technical competency guide
├── Design.md               # Design system specification
├── AGENTS.md               # This file
├── package.json            # Dev tooling and metadata (v1.7.1)
├── LICENSE                 # MIT License
└── .github/                # Automation workflows
```

## Coding conventions
- **Standards**: Strictly follow the **Google JavaScript Style Guide** and **Google HTML/CSS Style Guide**.
- **ES Modules**: Always use `export` for functional logic in `src/script.js`. Import these functions in `tests/script.test.js`.
- **Theming**: Use HSL CSS variables for colors to support dark and light modes.
- **Micro-interactions**: Maintain the high-fidelity feel by using the built-in skeleton loader (`.skeleton`), confetti system (`createConfetti()`), and pulse animations.
- **Modals**: Use the comparison modal for side-by-side variation evaluation.
- **Glassmorphism**: Maintain the premium look using `backdrop-filter` and subtle HSLA-based borders.
- **Security**: Strictly use `textContent` or `createTextNode` for rendering user data. Avoid `innerHTML` with dynamic content.
- **Robustness**: Wrap `localStorage` and `JSON.parse` operations in `try-catch` blocks.

## Workflow
- **Code changes**: Make logic and UI changes in `src/script.js` and `src/style.css`.
- **Testing**: Run `npm run test` after any logic changes to ensure no regressions in the generation engine.
- **Documentation**: Update `README.md` and `CHANGELOG.md` for every release. Update `Design.md` if the color palette or UI components change.

## Verification
- **Functional**: Verify generation, editing, saving, and searching.
- **Visual**: Test dark and light mode toggling and responsiveness at 600px, 950px, and 1200px.
- **Persistence**: Ensure edits to drafts persist in the architecture library across reloads.
- **Console**: Monitor browser DevTools for any uncaught errors or performance warnings.

## localStorage data structure
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

## Common tasks

### Add a new post type
1. Add an `<option>` to the `#post-type` select in `index.html`.
2. Expand the `templates` object in `src/script.js` -> `getHooks()`.
3. Add specialized logic to `getBodies()` if needed.
4. Update unit tests in `tests/script.test.js` to cover the new type.

### Modify the design
1. Update HSL variables in `src/style.css` for both light and dark themes.
2. Ensure new components adhere to the glassmorphism standards in `Design.md`.
3. Verify that transitions and entrance animations remain smooth.

### Handle new input fields
1. Update the generation logic in `src/script.js` to accept the new input.
2. Update the LinkedIn mockup logic to visualize the new data.
3. Update the `localStorage` schema documentation if the saved object changes.
