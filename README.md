# LinkedIn Post Architect (PostGenius)

PostGenius is a lightweight, high-performance LinkedIn post generator designed for content strategists and professionals. It helps transform rough ideas into structured, engaging LinkedIn posts using proven content frameworks.

## Key Features

- **Strategic Frameworks**: Generates posts using professional techniques like "The Slide" and "Pattern Interrupt" hooks.
- **Post Style Selection**: Choose between Thought Leadership, Personal Story, Lesson Learned, or Educational styles.
- **Customizable Output**: Adjust tone (Professional/Casual), length, and target audience.
- **Architecture Library**: Save your favorite drafts locally in your browser to refine and use later.
- **Optimized Hook Options**: Provides multiple alternate hooks for every generated post to maximize engagement.
- **One-Click Management**: Easily save, view, copy, or delete drafts from your personal library.
- **New: Copy to Clipboard**: Quickly copy your favorite drafts to use directly on LinkedIn.
- **Accessibility Focused**: Built with semantic HTML and ARIA labels for an inclusive user experience.

## Technical Architecture

- **Frontend**: Vanilla HTML5, Semantic CSS3.
- **Logic**: ES6+ JavaScript (Modular design for testability).
- **Persistence**: Browser `localStorage` for draft management.
- **Responsiveness**: Fully responsive CSS Grid/Flexbox layout.
- **Testing**: Vitest for core logic verification.
- **Tooling**: ESLint for code quality and standardization.

## Getting Started

1. **Input Your Topic**: Enter your core idea in the text area.
2. **Configure Strategy**: Select the post type, length, and target audience.
3. **Generate**: Click "Generate Drafts" to see your structured LinkedIn post and alternate hooks.
4. **Manage**: Save your drafts to the library, copy them to your clipboard, or clear the form to start over.

## Development

- **Linting**: `npm run lint`
- **Testing**: `npm run test`
