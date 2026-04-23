# LinkedIn Post Architect (PostGenius)

PostGenius is an elite LinkedIn ghostwriter and content strategist app that transforms your rough notes into high-performing, authentic LinkedIn posts using the standard-setting Gemini AI.

## Key Features

- **Elite AI Generation**: Built on professional content strategy principles like "The Slide" sentence structure and pattern-interrupt hooks.
- **Smart Style Selection**: Choose from various post types (Thought Leadership, Personal Story, Lesson Learned, and more).
- **Tone Orchestration**: Adjust the voice to match your professional brand (Professional, Conversational, Bold, Inspirational, etc.).
- **Interactive Library**: Secure Google authentication allows you to save your best drafts to a personal "Architecture Library" and resume them at any time.
- **AI-Powered Scout Trends**: Discover what's viral on LinkedIn and Reddit in real-time. Uses Google Search grounding to ensure topics are current and relevant to today's professional zeitgeist.
- **A/B Performance Testing**: Generate and compare two distinct psychological angles side-by-side to determine which hook and structure resonates most.
- **Preference Learning Engine**: Your AI ghostwriter learns your taste. By "Marking as Winner" specific A/B variations, you bias future generations toward the structures you prefer.
- **Recursive Refinement**: Don't like a specific paragraph? Use the refinement chat to ask the AI for specific adjustments without losing your progress.
- **Advanced Scheduling**: Plan your content calendar by scheduling posts for future dates and times directly within the app.
- **Live Preview Mockups**: See your post exactly how it will appear on LinkedIn, optimized for the "See more" click.
- **Reflective CTAs**: Automatically generates thoughtful, integrated calls-to-action that drive meaningful engagement.

## Technical Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **AI Engine**: Google Gemini (via `@google/genai`)
- **Backend/Persistence**: Firebase Authentication, Cloud Firestore
- **Animations**: Motion (f.k.a. Framer Motion)
- **Icons**: Lucide React

## Getting Started

1. **Input Your Topic**: Paste rough notes, a link, or just a few bullet points.
2. **Configure Your Strategy**: Select the style and tone that fits your goal.
3. **Generate**: Click generate and watch as the AI crafts multiple drafts using different psychological angles.
4. **Login**: Sign in with Google to save your drafts for later.
5. **Copy & Post**: One-click copy for the body, hook, and hashtags.

## Deployment Notes

### GitHub Pages Pathing
This project is configured with `base: './'` in `vite.config.ts` to ensure compatibility with GitHub Pages sub-directory deployments.

### Environment Variables
For the Gemini AI to function in your deployed build, ensure you provide your `GEMINI_API_KEY` during the build process. If using GitHub Actions, add it as a Repository Secret and pass it to the build step.
