# PostGenius — LinkedIn Post Architect

PostGenius is a lightweight LinkedIn post generator built for professionals who know what they want to say but need help saying it well. Feed it a rough idea, pick a framework, and get a structured draft in seconds.

## What It Does

PostGenius applies real content strategy — hooks like "The Slide" and "Pattern Interrupt," post styles ranging from Thought Leadership to Personal Story — so your output follows the patterns that actually perform on LinkedIn, not just fill a text box.

Every generation gives you alternate hook options alongside your main draft, so you're not stuck with one angle. Drafts you like go straight to a local library in your browser, where you can review, copy, or delete them at any time.

**Configuration options:** post style (Thought Leadership, Personal Story, Lesson Learned, Educational), tone (Professional or Casual), length, and target audience.

## Tech Stack

Vanilla HTML5 and CSS3 with an ES6+ JavaScript core designed for modularity and testability. Draft persistence uses browser `localStorage` — no backend, no account required. Layout is fully responsive via CSS Grid and Flexbox. Vitest handles unit tests; ESLint keeps the codebase consistent.

## Getting Started

1. Enter your core idea in the text area.
2. Select post style, length, and audience.
3. Click **Generate Drafts** to see your post and alternate hooks.
4. Save drafts to your library, copy them to clipboard, or clear the form and start fresh.

## Development

```bash
npm run lint    # ESLint
npm run test    # Vitest
```

---
