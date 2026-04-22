# Agent Instructions: LinkedIn Post Architect

You are an AI agent tasked with maintaining and improving the LinkedIn Post Architect.

## Project Overview
This is a static web application built with HTML, CSS, and vanilla JavaScript. It allows users to generate LinkedIn post templates based on an idea, tone, and format. The application is deployed to GitHub Pages with no build step required.

## Tech Stack
- **Frontend**: Vanilla ES6+ JavaScript, CSS3 (Modern Flexbox/Grid), Semantic HTML5
- **Persistence**: Browser `localStorage` for local draft management
- **Deployment**: Static GitHub Pages via GitHub Actions

## Coding Conventions
- **HTML**: Use semantic HTML5 elements. Keep `index.html` clean and well-structured.
- **CSS**: Use modern CSS practices. Ensure the application is responsive and follows the LinkedIn color palette (e.g., `#0077b5` for primary buttons). Use CSS custom properties (variables) for theming.
- **JavaScript**: Use vanilla ES6+ JavaScript with no external dependencies. Maintain all logic in `script.js`. Avoid jQuery, React, frameworks, or build tools.

## Project Structure
```
.
├── index.html                          # Main HTML file
├── style.css                           # All styling
├── script.js                           # All JavaScript logic
├── README.md                           # User documentation
├── CHANGELOG.md                        # Version history
├── AGENTS.md                           # This file
├── .gitignore                          # Git ignore rules
├── LICENSE                             # MIT License
└── .github/
    └── workflows/
        └── static.yml                  # GitHub Actions deployment
```

**Files to Remove** (legacy configuration):
- `package.json` (optional - only if you add dependencies)
- `vite.config.ts` (not used)
- `tsconfig.json` (not used for vanilla JS)
- `firebase-*.json` (archived reference, not used)
- `.env.example` (static app has no secrets)

## Workflow
- **Changes**: When adding features, update `index.html`, `style.css`, and `script.js` accordingly.
- **Documentation**: Always update `README.md` and `CHANGELOG.md` after significant changes.
- **Deployment**: The project automatically deploys via GitHub Pages when changes are pushed to the `main` branch.

## Verification
- Before submitting, verify changes by opening `index.html` in a browser.
- Use browser DevTools to check for console errors.
- Test all interactive features (generate, save, delete, view).
- Verify localStorage persistence works correctly.

## Security
- All user input is treated as plain text and rendered using `textContent` to prevent XSS. Maintain this practice strictly.
- Do not use `innerHTML` with user-provided content.
- All data is stored locally in the browser—no backend communication.

## Performance Tips
- Minimize DOM manipulation; batch updates where possible.
- Use event delegation for dynamically created elements.
- Keep CSS selectors simple and efficient.
- Avoid reflows/repaints by grouping style changes.

## localStorage Data Structure
Posts are stored as JSON in `post_library` key:
```javascript
{
  id: number,                    // Timestamp-based unique ID
  post_type: string,             // Dropdown selection value
  hook: string,                  // Pattern interrupt hook
  post: string,                  // Main body content
  cta: string,                   // Call to action
  hashtags: string[],            // Array of hashtags
  idea: string,                  // Original user input
  alt_versions: [{hook}, ...]    // Alternate hooks
}
```

## Common Tasks

### Adding a New Post Type
1. Add option to `<select id="post-type">` in `index.html`
2. Add templates to `getHooks()`, `getBodies()` in `script.js`
3. Test with various tones and lengths
4. Update CHANGELOG.md

### Styling Changes
1. Modify variables in `:root { }` at top of `style.css`
2. Update component classes as needed
3. Test responsiveness at 600px, 900px, 1100px breakpoints
4. Verify no console errors

### Bug Fixes
1. Identify the issue and reproduce it
2. Fix in the relevant file (`index.html`, `style.css`, or `script.js`)
3. Test the fix thoroughly
4. Update CHANGELOG.md with "Fixed" section
5. Commit with a descriptive message
