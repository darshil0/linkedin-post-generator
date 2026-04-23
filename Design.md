# Design Specification: PostGenius

PostGenius follows a "Modern Professional" design aesthetic, blending LinkedIn's core identity with high-end SaaS visual trends like Glassmorphism and vibrant gradients.

## 🎨 Color System (HSL)

The system uses HSL for better control over luminosity and saturation across themes.

### Light Mode
- **Primary Blue**: `hsl(200, 95%, 45%)` (LinkedIn-inspired)
- **Background**: `hsl(210, 20%, 98%)`
- **Surface**: `hsla(0, 0%, 100%, 0.8)` (Glass)
- **Accent Green**: `hsl(150, 60%, 35%)`

### Dark Mode
- **Primary Blue**: `hsl(200, 95%, 60%)`
- **Background**: `hsl(220, 20%, 10%)`
- **Surface**: `hsla(220, 20%, 18%, 0.8)`

## 🖼️ UI Components

### 1. The Glass Card
Every major module is housed in a "Glass Card."
- **Properties**: `backdrop-filter: blur(12px)`, `border: 1px solid hsla(...)`.
- **Rationale**: Provides depth and focus while maintaining a lightweight feel.

### 2. The Character Progress Bar
- **Logic**: Visualizes content length against platform limits.
- **Color States**:
  - Blue: Safe (< 80%)
  - Orange: Warning (> 80%)
  - Red: Limit Exceeded (> 100%)

### 3. LinkedIn Mockup
A high-fidelity preview component that mimics the social platform.
- **Anatomy**: Circular avatar, bold name, light-gray metadata, and pre-wrap body text.
- **Interaction**: Updates in real-time as the user edits the draft.

### 4. Skeleton Shimmer
- **Logic**: Used during the generation phase to manage user expectations.
- **Visual**: A multi-layered gradient shimmer (`--skeleton-bg`) that animates across the layout.

### 5. Confetti System
- **Logic**: Triggered on successful save to the library.
- **Visual**: Randomized particle bursts with physics-based gravity (`confettiFall` animation).

## 🔡 Typography

- **Primary Font**: `Inter` (Google Fonts).
- **Weights**: 400 (Regular), 600 (Semibold), 800 (Extra Bold).
- **Rationale**: `Inter` provides exceptional legibility on digital screens and a clean, tech-forward look.

## ✨ Motion & Feedback

- **Entrance**: Cards use a `scaleIn` (0.95 -> 1.0) animation with a cubic-bezier timing function for a "pop" effect.
- **Interactive**: Buttons lift on hover and depress on active click.
- **Pulsing**: The character counter uses a `pulseRed` scale animation when the 3,000-character limit is breached.
- **Modals**: The comparison grid uses `backdrop-filter: blur(8px)` to create a focused, high-end viewing environment.
