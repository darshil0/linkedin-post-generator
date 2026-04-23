# PostGenius — LinkedIn Post Architect

PostGenius is a lightweight LinkedIn post generator built for professionals who know what they want to say but need help saying it well. Feed it a rough idea, pick a framework, and get a structured draft in seconds — no account, no backend, no build step.

## What It Does

PostGenius applies real content strategy — hooks like "The Slide" and "Pattern Interrupt," post styles ranging from Thought Leadership to Personal Story — so your output follows the patterns that actually perform on LinkedIn, not just fill a text box.

Every generation includes alternate hook options alongside the main draft. Drafts you like go straight to a local library in your browser, where you can review, copy, or delete them at any time. All data lives in `localStorage`; nothing leaves your browser.

**Configuration options:** post style (Thought Leadership, Personal Story, Lesson Learned, Educational), tone (Professional or Casual), length (Short / Medium / Long), and target audience.

## Tech Stack

Vanilla HTML5 and CSS3 with an ES6+ JavaScript core. No frameworks, no build tools, no external runtime dependencies. Draft persistence uses browser `localStorage`. Layout is fully responsive via CSS Grid and Flexbox. Vitest handles unit tests; ESLint keeps the codebase consistent.

## Project Structure

```
.
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # All application logic
├── script.test.js      # Vitest unit tests
├── README.md           # This file
├── CHANGELOG.md        # Version history
├── AGENTS.md           # Agent/contributor instructions
├── package.json        # Dev tooling (ESLint, Vitest)
├── .gitignore
├── LICENSE
└── .github/
    └── workflows/
        └── static.yml  # GitHub Pages deployment
```

## Getting Started

Open `index.html` directly in a browser — no install needed for basic use.

1. Enter your core idea in the text area.
2. Select post style, length, and target audience.
3. Click **Generate Drafts** to see your post and alternate hooks.
4. Save drafts to your library, copy them to clipboard, or clear the form and start fresh.

## Development

Install dev dependencies for linting and testing:

```bash
npm install
npm run lint    # ESLint
npm run test    # Vitest
```

## Security

All user input is rendered with `textContent` — never `innerHTML` — to prevent XSS. No data is sent to any server. There are no API keys or secrets in this repository.

## License

MIT — see [LICENSE](LICENSE).
