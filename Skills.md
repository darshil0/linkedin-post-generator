# Technical skills: PostGenius

This project demonstrates proficiency in modern, vanilla web development with enterprise-grade tooling and practices. Below are the core competencies used to architect PostGenius.

## Frontend architecture
- **Vanilla ES6+ mastery**: Advanced DOM manipulation, event delegation, and state management without frameworks. Implements pure functional logic for generation engines with zero external dependencies.
- **ES Modules (ESM)**: Native browser-based module system that works in modern environments without build steps. Supports modular architecture across application code and testing infrastructure.
- **Google coding standards**: Strict adherence to the **Google JavaScript Style Guide** and **Google HTML/CSS Style Guide**, including JSDoc documentation, camelCase naming conventions, and alphabetized CSS properties.
- **Asynchronous JavaScript**: Managing Clipboard API for copy-to-clipboard functionality, FileReader for avatar uploads, and `setTimeout` orchestration for skeleton loader states and premium UX choreography.

## Modern styling and UX
- **CSS3 variables and HSL color system**: Dynamic theming built on HSL functions for consistent luminosity and saturation control across light and dark modes. Variables for primary blue (`hsl(200, 95%, 45%)`), accent green (`hsl(150, 60%, 35%)`), surfaces, and borders.
- **Glassmorphism and backdrop filters**: Implementing `backdrop-filter: blur(12px)` with HSLA-based borders to achieve premium, layered UI effects. Advanced shadow systems for depth perception and focus hierarchy.
- **Responsive design**: CSS Grid and Flexbox mastery for a two-pane layout that adapts seamlessly from mobile (600px) to desktop (1200px+) viewports. Fully responsive generation and library sections.
- **Micro-interactions and keyframes**: Skeleton shimmer animations (`1.5s infinite`), confetti particle bursts on save (`2.5s ease-out forwards`), pulsing character count alerts (`1s infinite alternate`), and scaleIn entrance animations (`0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`) for polished, high-fidelity feedback.

## Data persistence and state management
- **Client-side localStorage**: Efficient JSON serialization for draft storage with robust error handling. Implements duplicate prevention, search filtering, and edit persistence. Stores posts as objects with id, postType, hook, body, cta, hashtags, and alternative versions.
- **Error handling**: Comprehensive `try-catch` wrappers around `localStorage` and `JSON.parse` operations to prevent data corruption. Input sanitization using `textContent` and `createTextNode` for XSS prevention. Validates all user input before persistence.

## Testing and quality assurance
- **Unit testing with Vitest**: Architecting generation logic as pure, testable functions. Test suite covers hooks (`getHooks()`), bodies (`getBodies()`), CTAs (`getCTAs()`), hashtags (`getHashtags()`), tone transformations, and full post assembly (`generateLinkedInPost()`) with jsdom environment.
- **Enterprise-grade CI/CD pipeline**: GitHub Actions workflow with automated quality gates: linting (ESLint), unit tests (Vitest), artifact upload, and conditional deployment to GitHub Pages only on success. Removes node_modules before deployment for clean artifacts.
- **Automated linting**: ESLint configured with strict rules for semicolons, quotes, variable usage, and no-undef checks. Enforces consistent code style across the entire project with Google standards compliance.

## Content strategy and algorithms
- **Framework implementation**: Translates proven LinkedIn marketing methodologies ("The Slide" framework) into programmatic templates for Thought Leadership, Personal Story, Lesson Learned, and Educational post types. Over 20 hook and body variations per category.
- **Tone transformation algorithms**: Dynamic string replacement logic that converts professional vocabulary to casual equivalents in real-time (e.g., "trajectory" → "path", "initiate" → "start", "optimal" → "best").
- **Multi-variation generation**: Produces 5+ hook variations per post, allowing users to evaluate and compare alternatives side-by-side through an interactive modal grid with comparison view.
- **Hashtag optimization**: Generates context-aware, platform-optimized hashtags based on post type and keywords, with filtering for minimum length (>3 characters) and relevance to content category.

## Architecture and design documentation
- **Comprehensive documentation**: Maintains aligned AGENTS.md, Design.md, README.md, and CHANGELOG.md files that serve as single sources of truth for technical contributors and end users. All docs follow Google Developer Documentation Style Guide.
- **Design system specification**: Detailed HSL color palette with light and dark mode variants, typography standards (Inter font with weights 400/600/800), animation timings (entrance 0.8s, shake 0.5s, generation 1.5s), and component anatomy for consistent visual language.
- **Semantic HTML and accessibility**: Proper use of semantic tags, ARIA labels, and accessibility attributes (`aria-live`, `aria-label`, `aria-describedby`) for screen reader support and semantic meaning. Toast notifications use `aria-live="polite"` for announcements.

## Performance and optimization
- **No-build workflow**: Static HTML/CSS/JS with no bundler required for local use. Minimal network overhead with zero external API calls or CDN dependencies (except Google Fonts).
- **Efficient DOM updates**: Batch DOM operations, avoid unnecessary reflows, use `requestAnimationFrame` for smooth animations. Lazy-loaded asset optimization for mockup images.
- **Memory management**: Proper cleanup of event listeners, no memory leaks in modal interactions, efficient array operations for generation logic.
