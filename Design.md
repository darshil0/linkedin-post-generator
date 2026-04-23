# Design specification: PostGenius

PostGenius follows a modern professional design aesthetic, blending LinkedIn's core identity with high-end SaaS visual trends like glassmorphism and vibrant gradients.

## Color system (HSL)

The system uses HSL for better control over luminosity and saturation across themes.

### Light mode
- **Primary blue**: `hsl(200, 95%, 45%)` (LinkedIn-inspired)
- **Background**: `hsl(210, 20%, 98%)`
- **Surface**: `hsla(0, 0%, 100%, 0.8)` (Glass card background)
- **Accent green**: `hsl(150, 60%, 35%)`
- **Border**: `hsla(210, 20%, 90%, 0.5)`

### Dark mode
- **Primary blue**: `hsl(200, 95%, 60%)`
- **Background**: `hsl(220, 20%, 10%)`
- **Surface**: `hsla(220, 20%, 18%, 0.8)` (Glass card background)
- **Accent green**: `hsl(150, 60%, 55%)`
- **Border**: `hsla(220, 20%, 30%, 0.5)`

## UI components

### 1. The glass card
Every major module is housed in a glass card.
- **Properties**: `backdrop-filter: blur(12px)`, `border: 1px solid hsla(...)`.
- **Rationale**: Provides depth and focus while maintaining a lightweight feel.

### 2. The character progress bar
- **Logic**: Visualizes content length against platform limits.
- **Color states**:
  - Blue: Safe (< 80%)
  - Orange: Warning (> 80%)
  - Red: Limit exceeded (> 100%)

### 3. LinkedIn mockup
A high-fidelity preview component that mimics the social platform.
- **Anatomy**: Circular avatar, bold name, light-gray metadata, and pre-wrap body text.
- **Interaction**: Updates in real-time as you edit the draft.

### 4. Skeleton shimmer
- **Logic**: Used during the generation phase to manage your expectations.
- **Visual**: A multi-layered gradient shimmer that animates across the layout.

### 5. Confetti system
- **Logic**: Triggered on a successful save to the library.
- **Visual**: Randomized particle bursts with physics-based gravity.

## Typography

- **Primary font**: `Inter` (Google Fonts).
- **Weights**: 400 (Regular), 600 (Semibold), 800 (Extra Bold).
- **Rationale**: `Inter` provides exceptional legibility on digital screens and a clean, tech-forward look.

## Motion and feedback

- **Entrance**: Cards use a `scaleIn` animation (`0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`) for a "pop" effect.
- **Header**: Uses `fadeInDown` (`0.8s ease-out`) for a smooth introduction.
- **Interaction**: Buttons lift on hover and depress on click.
- **Pulsing**: The character counter uses a `pulseRed` animation (`1s infinite alternate`) when the 3,000-character limit is breached.
- **Generation**: Simulated AI processing uses a `shimmer` animation (`1.5s infinite`).
- **Success**: Saving to library triggers `confettiFall` (`2.5s ease-out forwards`).
- **Modals**: The comparison grid uses `backdrop-filter: blur(8px)` to create a focused, high-end viewing environment.

## Technical styling standards

PostGenius adheres to the **Google HTML/CSS Style Guide** for all visual implementations:
- **Alphabetical properties**: All CSS properties within a declaration block are sorted alphabetically for maximum readability and predictable overrides.
- **Lowercase standard**: All selectors and attribute values use lowercase to ensure cross-browser consistency and valid HTML5 syntax.
- **2-space indentation**: Maintained across all styling files for a clean, hierarchical structure.
