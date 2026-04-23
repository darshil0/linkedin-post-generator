# PostGenius: LinkedIn post architect

![PostGenius Mockup](assets/mockup.png)

PostGenius is a high-fidelity, lightweight LinkedIn post generator designed for creators and professionals. It transforms your raw ideas into structured, high-performing drafts using proven content frameworks—all within your browser.

## The original vision

> "I'd like you to build a single-page web app called 'PostGenius' that helps people write better LinkedIn posts. It should have a clean, two-pane layout with a LinkedIn-inspired color scheme. In the left panel, users can input their core idea or topic. They should also have options to select a content framework, like 'Personal Story' or 'Educational,' and choose a tone, like 'Professional' or 'Casual.'
>
> When they click a 'Generate' button, the right panel should show the fully formatted post. The app should create a scroll-stopping hook, structure the body content, suggest a good call-to-action, and even generate some relevant hashtags. A key feature is providing a few different hook variations for the user to choose from.
>
> This whole thing should run locally in the browser with no server required. Please use standard HTML, CSS, and modern JavaScript. For persistence, like letting users save their favorite drafts, you can just use the browser's localStorage. A 'copy to clipboard' button for the final post is a must-have."

## Key features

- **Strategic frameworks**: Choose from Thought Leadership, Personal Story, Lesson Learned, or Educational templates with over 20 variations.
- **LinkedIn preview mockup**: Visualize your post exactly as it appears in the LinkedIn feed, including custom avatar uploads.
- **Skeleton generation**: Use shimmering states that simulate AI processing for a premium experience.
- **Comparison grid**: Use the side-by-side view to evaluate all generated variations simultaneously.
- **Interactive feedback**: Get instant feedback with particle confetti on save and pulsing character count alerts.
- **Enterprise-grade standards**: Entire codebase follows the **Google Coding Standards** for JavaScript, HTML, and CSS.
- **Dark mode support**: Toggle between light and dark themes for a personalized experience.
- **Architecture library**: Save and search your post blueprints locally with SVG-enhanced empty states.
- **Modern ESM foundation**: Built with standard ES Modules for a future-proof architecture.

## Content strategy

PostGenius follows the **"The Slide"** methodology to maximize engagement:
1.  **The hook**: A pattern-interrupting opening line to grab attention.
2.  **The body**: Structured content that provides immediate value or insight.
3.  **The CTA**: A clear, low-friction invitation to engage.

## Quick start

PostGenius is a static application. You can use it in two ways:

1.  **Production**: Visit the live app at [https://darshil0.github.io/linkedin-post-generator/](https://darshil0.github.io/linkedin-post-generator/).
2.  **Local**: Open `index.html` in any modern web browser.

### Basic workflow
1.  **Ideate**: Enter your core topic in the input field.
2.  **Configure**: Select your preferred style, length, and target audience.
3.  **Generate**: Click **Generate Drafts** to create your post.
4.  **Refine**: Edit your draft directly, then copy it or save it to your library.

## Content frameworks

PostGenius uses specialized logic for different content archetypes:
- **Thought Leadership**: High-level insights designed to challenge the status quo.
- **Personal Story**: Narrative-driven posts focused on vulnerability and lessons learned.
- **Lesson Learned**: Practical takeaways from a specific project or experience.
- **Educational**: How-to guides and frameworks to establish authority.

## Tech stack

- **Core**: Vanilla HTML5, CSS3, and ES6+ JavaScript (ES Modules).
- **Styling**: LinkedIn-inspired palette with a responsive two-pane grid layout.
- **Persistence**: Browser-based `localStorage` for draft management.
- **Testing**: Vitest for unit testing of generation logic.
- **Linting**: ESLint for codebase consistency.

## Project structure

```
.
├── index.html          # Main application entry
├── src/                # Source code
│   ├── script.js       # Core ES Module logic
│   └── style.css       # Premium CSS3 styling
├── tests/              # Unit testing
│   └── script.test.js  # Vitest test suite
├── assets/             # Media and static assets
│   └── mockup.png      # Project mockup
├── README.md           # Documentation
├── CHANGELOG.md        # Version history
├── Skills.md           # Technical competencies
├── Design.md           # Design system and aesthetic
├── AGENTS.md           # AI contributor instructions
├── package.json        # Tooling configuration (v1.7.1)
├── LICENSE             # MIT License
└── .github/            # GitHub Actions
    └── workflows/
        └── static.yml  # Pages deployment
```

## Development

PostGenius requires no build step for basic development. Use the following commands for maintenance:

```bash
# Install development dependencies
npm install

# Run unit tests
npm run test

# Run the linter
npm run lint
```

### CI/CD pipeline
The project uses GitHub Actions for continuous integration. Every push to the `main` branch triggers an automated workflow that:
1.  Installs dependencies.
2.  Runs **ESLint** to ensure code standard compliance.
3.  Runs **Vitest** to verify generation logic.
4.  Deploys to **GitHub Pages** only if all checks pass.

## Documentation
For deeper technical details, refer to the following guides:
- [Technical competencies](Skills.md): Core skills and technologies.
- [Design system](Design.md): Aesthetic principles and HSL palette.
- [Agent instructions](AGENTS.md): Guide for AI contributors.
- [Changelog](CHANGELOG.md): Version history.

## Security and privacy

- **Privacy first**: All generation happens locally in your browser. PostGenius sends no data to external servers.
- **XSS prevention**: The app strictly uses `textContent` and `createTextNode` for all user-provided data.
- **Zero secrets**: The app uses no API keys, databases, or tracking scripts.

## License

Distributed under the MIT License. See `LICENSE` for more information.
