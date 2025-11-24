# Guardian Care Design Guidelines

## Design Approach: Reference-Based (Reflect.app) with Black & Green Theme

**Primary Reference**: Reflect.app - Dark, sophisticated SaaS design with gradient aesthetics, smooth animations, and interactive storytelling

**Adaptation Strategy**: Mirror Reflect's exact layout structure, animation patterns, and component styles while using a striking **black and green color scheme** with glowing effects and enhanced interactivity.

---

## Color System

### Primary Palette
- **Background**: Near-black (`hsl(0, 0%, 2%)`) - Deep black base
- **Foreground**: Light green-tinted gray (`hsl(142, 50%, 85%)`) - Readable text
- **Primary (Green)**: `hsl(142, 70%, 50%)` - Vibrant emerald green
- **Border**: Dark green-tinted (`hsl(142, 40%, 15%)`) - Subtle separation

### Card & Surface Colors
- **Card Background**: `hsl(0, 0%, 4%)` - Slightly elevated from background
- **Card Border**: `hsl(142, 40%, 12%)` - Green-tinted borders
- **Muted**: `hsl(142, 20%, 12%)` - Secondary surfaces
- **Muted Foreground**: `hsl(142, 30%, 55%)` - Secondary text

### Accent & Interactive
- **Glassmorphism**: Semi-transparent backgrounds with green tint and blur
- **Glow Effects**: Green box-shadows for depth (`0 0 30px rgba(0, 255, 100, 0.4)`)
- **Hover States**: Enhanced green glow on interaction

### Special Effects
- **Text Glow**: `text-shadow: 0 0 10px rgba(0, 255, 100, 0.5)`
- **Box Glow**: Multiple layers of green shadows for depth
- **Gradient Orbs**: Radial gradients using various green shades (from `rgb(0, 255, 100)` to darker greens)

---

## Typography System

**Font Stack**: Inter (via Google Fonts CDN)
- **Headlines (H1)**: 72px/bold, tracking tight (-0.02em), with optional green gradient
- **Subheadings (H2)**: 48px/semibold
- **Body Large**: 20px/regular, line-height 1.6
- **Body**: 16px/regular, line-height 1.7
- **Small/Caption**: 14px/medium

**Hierarchy**: Large, bold headlines with generous letter-spacing for impact. Body text remains highly readable with ample line-height.

---

## Layout System

**Spacing Units**: Tailwind spacing - primary units of 4, 8, 12, 16, 20, 24, 32
- Section padding: `py-20 md:py-32`
- Component spacing: `gap-8 md:gap-12`
- Container: `max-w-7xl mx-auto px-6`

**Grid Patterns**:
- Hero: Centered, single column
- Features: 3-column grid on desktop (`grid-cols-1 md:grid-cols-3`)
- Process/Workflow: 2-column layouts with visual/text splits
- Testimonials: 3-column masonry

---

## Component Library

### Navigation
- Fixed header with blur backdrop (`backdrop-blur-xl`)
- Logo left, navigation center, CTA button right
- Minimalist links with subtle green hover glow
- Smooth scroll behavior

### Hero Section
- Full viewport height (min-h-screen)
- Centered headline + subheadline + CTA
- **Animated green gradient orb background** - Multiple layers with rotating, pulsing, and floating animations
- 30+ glowing green particles orbiting the center
- Green text glow on headline gradient

### Feature Cards
- **Glassmorphism style**: Semi-transparent backgrounds with green-tinted borders
- Rounded corners (`rounded-2xl`)
- Padding: `p-8`
- Icon + Title + Description layout
- **Interactive Hover Effects**:
  - Lift effect (`hover:-translate-y-3`)
  - Scale effect (`hover:scale-105`)
  - Green glow appears
  - Icon rotation and bounce
  - Enhanced border glow
- Cursor: pointer on all cards

### Interactive Sections (Workflow Visualization)
- Dark dashboard mockup screenshots with green accents
- Floating UI elements with green glow shadows
- **Radar/pulse animations** with green rings and glowing center
- Interactive dots that scale on hover
- Split layout: Visual left, explanation right

### Testimonial Cards
- Dark background cards with subtle green glow
- User avatar + quote + name/role
- Green-tinted border on hover
- Grid layout with varying heights

### Pricing Section
- Large green gradient sphere in background
- Feature comparison with green checkmarks
- Prominent CTA button with green glow effect
- Animated gradient backgrounds

### Footer
- Multi-column layout (4 columns)
- Links organized by category with green hover states
- Social icons with glow effects
- Newsletter signup form

---

## Animation Strategy

### Core Animations

**Keyframe Animations**:
1. **float**: Gentle up/down movement (6s, infinite)
2. **pulse-glow**: Opacity and scale pulsing with green glow (3s, infinite)
3. **rotate-slow**: Continuous 360° rotation (20s, infinite)
4. **fade-up**: Fade in with upward translation (0.6s, once)
5. **gradient-shift**: Animated gradient position (8s, infinite)
6. **shimmer**: Sweeping green light effect (3s, infinite)
7. **bounce-subtle**: Gentle bounce motion (3s, infinite)
8. **scale-pulse**: Scale in/out breathing (2s, infinite)
9. **glow-pulse**: Box-shadow intensity pulse (2s, infinite)

**Scroll-Triggered Animations** (use Intersection Observer):
1. **Fade-up**: Elements fade in and translate up 20px
2. **Gradient orb**: Slow rotation and scale breathing effect
3. **Number counters**: Stats animate from 0 to target value
4. **Parallax**: Background elements move slower than foreground

**Hover Interactions**:
- Cards: Lift + scale + green glow border + icon animation
- Buttons: Green glow intensifies
- Links: Green underline with glow
- Feature icons: Rotate and bounce
- Interactive dots: Scale to 150%

**Timing**: All animations use smooth easing with 300-600ms duration for interactions

---

## Interactive Elements

### Hover States
- All cards have cursor: pointer
- Transform on hover: `-translate-y-3` and `scale-105`
- Green glow appears/intensifies
- Icons rotate slightly and bounce
- Smooth transitions (0.3-0.5s duration)

### Click/Active States
- Subtle scale-down effect
- Intensified glow
- Ripple effect consideration

### Loading States
- Shimmer animation for loading content
- Pulsing green indicators
- Skeleton screens with green accents

---

## Glow System

### Green Glow Classes
- `.glow-green`: Standard green box-shadow
- `.glow-green-strong`: Intensified multi-layer glow
- `.text-glow`: Green text shadow
- `.hover-glow`: Animates glow on hover with transform
- `.animate-glow-pulse`: Continuous glow pulsing

### Usage
- Apply to orbs, particles, interactive elements
- Layer multiple glows for depth
- Use rgba(0, 255, 100, opacity) for consistency
- Combine with blur effects for softness

---

## Images

**Hero Section**: Large animated green gradient orb (CSS gradients + animations)

**Product Screenshots**: 
- Dark-themed dashboard mockups with green UI accents
- Appointment booking, lead management, communication, reputation dashboards
- Subtle green glow shadows
- Float effect animation
- Alternating left/right positions

**Testimonial Avatars**: Circular user photos (64px diameter) with optional green border

**Background Elements**: Green gradient meshes and grid patterns

---

## Key Design Principles

1. **Black & Green Contrast**: Deep black backgrounds with vibrant green accents for modern, tech-forward aesthetic
2. **Glow & Depth**: Liberal use of green glows, multiple shadow layers, and transparency for depth
3. **Interactive & Animated**: Everything responds to user interaction with smooth, engaging animations
4. **Layering**: Multiple z-index layers with blur and transparency
5. **Motion Storytelling**: Each section reveals through scroll with staggered animations
6. **Spacious Breathing**: Generous whitespace between sections (py-32)

---

## Section Structure

1. **Hero**: Animated green orb + glowing headline + CTA buttons
2. **Value Proposition**: Large headline + 6 interactive feature cards with hover effects
3. **Feature Showcase #1**: Dashboard screenshot + explanation (Appointment Booking)
4. **Feature Showcase #2**: Visual + text (Lead Capture & Management)
5. **Interactive Demo**: Green radar animation showing workflow automation with interactive dots
6. **Feature Showcase #3**: Customer Communication visual
7. **Social Proof**: Testimonial grid with green accents
8. **ROI Calculator**: Interactive calculator with real-time green-highlighted results
9. **Case Studies**: Before/after metrics with green improvement indicators
10. **Pricing/CTA**: Green gradient sphere background + final CTA
11. **Footer**: Comprehensive link structure with green hover states

**Total Height**: 10-12 full scrolls worth of content with deliberate pacing between sections
