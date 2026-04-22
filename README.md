# LinkedIn Post Architect (PostGenius)

PostGenius is an elite LinkedIn ghostwriter and content strategist app that transforms your rough notes into high-performing, authentic LinkedIn posts using professional content strategy principles.

## Key Features

- **Elite Generation Logic**: Built on principles like "The Slide" sentence structure and pattern-interrupt hooks to ensure maximum readability and engagement.
- **Smart Style Selection**: Choose from various post types (Thought Leadership, Personal Story, Lesson Learned, Career Update, and more).
- **Tone Orchestration**: Adjust the voice to match your professional brand (Professional vs. Conversational).
- **Architecture Library**: Save your best drafts locally to your "Architecture Library" and revisit them at any time.
- **Minimalist UX**: A clean, two-pane layout inspired by modern professional tools.
- **Integrated CTAs**: Automatically generates thoughtful engagement questions.

## Technical Stack

- **Frontend**: Vanilla ES6+ JavaScript, CSS3 (Modern Flexbox/Grid), Semantic HTML5
- **Persistence**: Browser `localStorage` for local draft management
- **Animations**: CSS Keyframes for smooth UI transitions
- **Deployment**: Static GitHub Pages (zero build step required)

## Getting Started

### Local Development
Simply open `index.html` in your browser. No installation, build, or server needed.

### Usage
1. **Input Your Topic**: Paste rough notes or a few bullet points.
2. **Configure Your Strategy**: Select the style and tone that fits your goal.
3. **Generate**: Click "Generate Drafts" to create your LinkedIn post.
4. **Save**: Click "Save to Library" on any draft you want to keep.
5. **Manage**: Use the "Architecture Library" pane to view or delete your saved drafts.

### Deployment

**GitHub Pages (Automatic)**
- Push code to the `main` branch
- GitHub Actions automatically deploys via `.github/workflows/static.yml`
- Your app is live at `https://<username>.github.io/linkedin-post-architect/`

**Manual Deployment**
- Copy `index.html`, `style.css`, and `script.js` to any static hosting (Netlify, Vercel, etc.)
- No build step required

## Project Structure

```
.
├── index.html              # Main application
├── style.css               # Complete styling
├── script.js               # All JavaScript logic
├── README.md               # This file
├── CHANGELOG.md            # Version history
├── AGENTS.md               # Development guidelines
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
└── .github/
    └── workflows/
        └── static.yml      # GitHub Pages deployment
```

## Persistence

All saved drafts are stored in your browser's `localStorage` under the key `post_library`. Your library persists across sessions and is never transmitted to any server.

To clear your library: Open browser DevTools → Application → Local Storage → Delete `post_library` entry.

## Browser Support

Works on all modern browsers supporting:
- ES6+ JavaScript
- CSS Grid and Flexbox
- `localStorage` API

**Tested on:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing

This is a open-source project. To contribute:

1. Fork the repository
2. Make your changes in a feature branch
3. Test thoroughly in your browser
4. Update `CHANGELOG.md` with your changes
5. Submit a pull request

See `AGENTS.md` for detailed development guidelines.

## License

MIT License © 2025 Darshil Shah

See `LICENSE` file for details.

## Roadmap

Future enhancements being considered:
- Multi-language support
- PDF export for drafts
- LinkedIn API integration for direct posting (reference implementation exists in archived Firebase version)
- Dark mode theme
- Custom template builder
- Analytics dashboard
