# Agent Instructions: LinkedIn Post Generator

You are an AI agent tasked with maintaining and improving the LinkedIn Post Generator.

## Project Overview
This is a static web application built with HTML, CSS, and vanilla JavaScript. It allows users to generate LinkedIn post templates based on an idea, tone, and format.

## Coding Conventions
- **HTML:** Use semantic HTML5 elements. Keep `index.html` clean.
- **CSS:** Use modern CSS practices. Ensure the application is responsive and follows the LinkedIn color palette (e.g., `#0077b5` for primary buttons).
- **JavaScript:** Use vanilla ES6+ JavaScript. Avoid external libraries unless absolutely necessary. Maintain all logic in `script.js`.

## Workflow
- **Changes:** When adding features, update `index.html`, `style.css`, and `script.js` accordingly.
- **Documentation:** Always update `README.md` and `CHANGELOG.md` after significant changes.
- **Deployment:** The project is deployed via GitHub Pages using the workflow in `.github/workflows/static.yml`.

## Verification
- Before submitting, verify changes by opening `index.html` in a browser.
- Use Playwright for automated frontend testing if possible.
- Ensure no console errors are present.

## Security
- All user input is treated as plain text and rendered using `textContent` to prevent XSS. Maintain this practice.
