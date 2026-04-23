# PostGenius — LinkedIn Post Architect

![PostGenius Mockup](assets/mockup.png)

PostGenius is a high-fidelity, lightweight LinkedIn post generator designed for creators and professionals. It transforms raw ideas into structured, high-performing drafts using proven content frameworks—all without leaving your browser.

## 💡 The Original Vision

> "I'd like you to build a single-page web app called 'PostGenius' that helps people write better LinkedIn posts. It should have a clean, two-pane layout with a LinkedIn-inspired color scheme. In the left panel, users can input their core idea or topic. They should also have options to select a content framework, like 'Personal Story' or 'Educational,' and choose a tone, like 'Professional' or 'Casual.'
>
> When they click a 'Generate' button, the right panel should show the fully formatted post. The app should create a scroll-stopping hook, structure the body content, suggest a good call-to-action, and even generate some relevant hashtags. A key feature is providing a few different hook variations for the user to choose from.
>
> This whole thing should run locally in the browser with no server required. Please use standard HTML, CSS, and modern JavaScript. For persistence, like letting users save their favorite drafts, you can just use the browser's localStorage. A 'copy to clipboard' button for the final post is a must-have."

## ✨ Key Features

- **Strategic Frameworks**: Choose from Thought Leadership, Personal Story, Lesson Learned, or Educational templates with 20+ variations.
- **Dynamic Tones**: Switch between *Professional* and *Casual* voices with real-time word replacement.
- **LinkedIn Preview Mockup**: Visualize your post exactly as it will appear in the LinkedIn feed.
- **Inline Editor**: Edit your generated drafts directly in the UI before saving.
- **Dark Mode Support**: High-fidelity theme toggle for a personalized creator experience.
- **Character Progress Bar**: Real-time visual feedback on LinkedIn's 3,000-character limit.
- **Architecture Library**: Save and search your best blueprints locally using browser `localStorage`.
- **Modern ESM Foundation**: Built with standard ES Modules for a future-proof architecture.

## 🧠 Content Strategy

PostGenius doesn't just "write text." It follows the **"The Slide"** methodology:
1.  **The Hook**: A pattern-interrupting opening line to grab attention.
2.  **The Body**: Structured content that provides immediate value or insight.
3.  **The CTA**: A clear, low-friction invitation to engage.

## 🚀 Quick Start

1.  **Open**: Simply open `index.html` in any modern web browser.
2.  **Ideate**: Enter your core topic (e.g., "Why sleep is the ultimate productivity hack").
3.  **Configure**: Select your preferred style, length, and target audience.
4.  **Generate**: Click "Generate Drafts" and watch your post come to life.
5.  **Refine**: Copy to clipboard or save to your personal library.

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, CSS3, and ES6+ JavaScript (ES Modules).
- **Styling**: LinkedIn-inspired slate and blue palette with a fully responsive two-pane grid layout.
- **Persistence**: Zero-backend `localStorage` for draft management.
- **Testing**: Vitest for robust unit testing of generation logic.
- **Linting**: ESLint for maintaining code consistency.

## 📁 Project Structure

```
.
├── index.html          # Main Application Entry
├── src/                # Source Code
│   ├── script.js       # Core ES Module Logic
│   └── style.css       # Premium CSS3 Styling
├── tests/              # Unit Testing
│   └── script.test.js  # Vitest Test Suite
├── assets/             # Media & Static Assets
│   └── mockup.png      # Project Mockup
├── README.md           # Documentation
├── CHANGELOG.md        # Version History
├── Skills.md           # Technical Competencies
├── Design.md           # Design System & Aesthetic
├── AGENTS.md           # AI Contributor Instructions
├── package.json        # Tooling Configuration (v1.5.0)
├── LICENSE             # MIT License
└── .github/            # GitHub Actions
    └── workflows/
        └── static.yml  # Pages Deployment
```

## 👨‍💻 Development

PostGenius is designed for speed. No build step is required for basic development, but you can use the following tools for maintenance:

```bash
# Install development dependencies (ESLint, Vitest)
npm install

# Run unit tests
npm run test

# Run linter
npm run lint
```

## 🔒 Security & Privacy

- **Privacy First**: All generation happens locally in your browser. No data is sent to external servers.
- **XSS Prevention**: Strict use of `textContent` and `createTextNode` for all user-provided data rendering.
- **Zero Secrets**: No API keys, no databases, and no tracking scripts.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
