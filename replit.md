# Guardian Care

## Overview

Guardian Care is a marketing website showcasing Smart Website setup and Outbound Lead Generation services for local businesses, coaches, and service providers. The service provides professional Go High Level websites with automated follow-ups, CRM automation, and 500 guaranteed monthly outbound leads. Built as a modern single-page application, it features a dark-themed, gradient-heavy design inspired by Reflect.app, with smooth animations and interactive storytelling elements.

The project serves as a promotional landing page demonstrating the complete business automation package with case studies and testimonials from real business owners across various industries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**UI Component Library**: Shadcn UI (New York style variant) with Radix UI primitives. Components are styled with Tailwind CSS using a custom configuration that emphasizes dark mode, glassmorphism effects, and gradient aesthetics.

**Design System**: 
- Typography: Inter font family loaded via Google Fonts CDN
- Color scheme: Black and green cyberpunk theme with near-black background (hsl(0, 0%, 2%)) and vibrant green accents (hsl(142, 70%, 50%))
- Dark mode as default theme with sophisticated gradient effects and green glowing elements
- Spacing system based on Tailwind's default units (4, 8, 12, 16, 20, 24, 32)
- Animation-heavy approach with custom keyframes for orb animations, pulse effects, floating elements, and green glow effects
- Custom CSS utilities: `glow-green`, `glow-green-strong` for box-shadow effects

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**State Management**: TanStack Query (React Query) v5 for server state management, with custom query client configuration for API requests

**Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

**Component Architecture**:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (Shadcn components)
- Feature-specific components in `client/src/components/`
- Mockup dashboard components in `client/src/components/mockups/`
- Interactive feature components: IndustrySelector, ComparisonTable, ProductTour

**Page Structure & Flow**: Optimized conversion funnel with streamlined stages:
1. **Hook** - Hero showcasing Smart Website & Outbound Lead services (500 leads/month, automated follow-ups, 98% response rate)
2. **Personalize** - Industry Selector showing benefits for different business types
3. **Educate** - Features Grid showcasing 6 capabilities (Smart Website, Automation, Outbound, CRM, Reporting) + 3 Feature Showcases
4. **Visual Break** - Radar Section showcasing intelligent automation
5. **Build Trust** - Case Studies from local businesses, coaches, real estate + Testimonials from business owners
6. **Convert** - Flexible pricing: 4 services at $150 each or complete package for $250
7. **Close** - Booking Section with LeadConnector calendar for discovery calls

**Design Philosophy**: Reference-based design mirroring Reflect.app's layout structure, animation patterns, and component styles, adapted with Guardian Care's black and green color scheme. Features include:
- **Interactive Hero Section** with Smart Website & Lead Gen headline, mouse-following particle system (canvas-based), 4 floating cards with parallax effect, animated stat counters (98% response rate, 40hrs saved, 5x ROI), and enhanced button hover effects
- Glassmorphism effects (backdrop-blur with semi-transparent backgrounds)
- Smooth scroll animations and interactive elements  
- Interactive radar/pulse visualizations with green glowing rings
- Feature showcase sections with alternating left/right layouts highlighting Smart Website, Automation, and Outbound Leads
- Case Studies section with real business results (HVAC, Coaching, Real Estate)
- Flexible pricing: Individual services at $150 or complete package at $250

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**Application Structure**:
- Development server (`server/index-dev.ts`): Integrates Vite middleware for HMR
- Production server (`server/index-prod.ts`): Serves static files from `dist/public`
- Core application logic in `server/app.ts`
- Route handlers in `server/routes.ts`

**API Design**: RESTful API with JSON request/response format
- `POST /api/contact`: Submit contact form data
- `GET /api/contacts`: Retrieve all contact submissions

**Data Layer**: 
- In-memory storage implementation (`MemStorage` class) for development/demo purposes
- Database schema defined with Drizzle ORM for PostgreSQL (production-ready but not yet connected)
- Storage abstraction through `IStorage` interface allows swapping between memory and database implementations

**Session Management**: Placeholder for connect-pg-simple (PostgreSQL session store), though authentication is not currently implemented

**Request Logging**: Custom middleware logs API requests with timestamp, path, duration, and response status

### Data Storage Solutions

**ORM**: Drizzle ORM v0.39.1 configured for PostgreSQL

**Database Schema** (defined in `shared/schema.ts`):
- `users` table: Basic user authentication schema (id, username, password)
- `contacts` table: Contact form submissions (id, name, email, company, phone, message, createdAt)

**Validation**: Zod schemas generated from Drizzle tables using `drizzle-zod`, ensuring type safety between database models and API validation

**Current Implementation**: In-memory storage using JavaScript Maps for both users and contacts. This is suitable for demo/development but will be replaced with actual PostgreSQL connections in production.

**Database Provider**: Configured for Neon Postgres (@neondatabase/serverless) via `DATABASE_URL` environment variable

**Migration Strategy**: Drizzle Kit configured to output migrations to `./migrations` directory with `npm run db:push` command

### Authentication & Authorization

**Current State**: Schema and structure prepared for authentication (users table exists) but no authentication middleware or session management is currently active.

**Placeholder Components**: 
- Password storage field exists in user schema (should be hashed in production)
- connect-pg-simple dependency indicates planned session-based authentication

**Future Implementation**: Will likely use session-based auth with PostgreSQL session store once authentication features are activated.

## Product & Pricing

### Pricing Structure

Guardian Care offers 2 core services at $150 each, with automation and reporting included FREE:

**Core Services ($150 each, one-time fee):**

1. **Smart Website Setup** - Custom high-converting website built on Go High Level with integrated booking calendar and mobile-friendly design

2. **Outbound Lead Generation** - Cold email, SMS & call campaigns with lead list sourcing, appointment setting, and 500 guaranteed contacts per month

**Free Features (Included with any purchase):**
- **Lead Capture & Automation** - Automated email & SMS follow-up sequences, missed-call text back, CRM pipeline setup, and lead notifications
- **Reporting & Optimization** - Monthly performance breakdown, conversion tracking, campaign improvements, and funnel optimization

**Complete Package - $250 (one-time fee)**
- Both services bundled together (save $50)
- Smart Website Setup (Go High Level)
- Outbound Lead Generation (500 leads/month)
- Lead Capture & Automation (FREE)
- Reporting & Optimization (FREE)
- Complete business automation
- Priority onboarding & setup
- Dedicated support

**Value Proposition**:
- Complete business automation package
- Professional Go High Level website
- 500 guaranteed monthly outbound contacts
- Automated email & SMS follow-ups
- One-time setup fee (no recurring costs)

### Interactive Features

**Booking Calendar Section**: LeadConnector-powered discovery call booking system positioned at the end of the page featuring:
- Embedded iframe from api.leadconnectorhq.com
- Dynamic script loading for form embed functionality
- 3 benefit cards highlighting the discovery call value proposition (30-Minute Call, Custom Strategy, No Obligation)
- Glassmorphism design matching site aesthetic
- All CTAs throughout the site updated to "Book Discovery Call" linking to #booking section

**Industry Selector**: Tab-based industry switcher with 4 business-focused views (B2B SaaS, Professional Services, Marketing & Creative, Manufacturing & B2B). Each tab dynamically displays:
- Industry-specific Smart Website + Lead Generation value proposition
- 3 tailored benefit points with icons (smart website features, automation, 500 monthly contacts)
- 5 key features specific to that industry vertical (Go High Level website, automation, outbound)
- Industry-relevant testimonial from business owners and founders
- Smooth animated transitions between industries

**Comparison Table**: (Removed from page - no longer needed with modular pricing)
- Previously showed multi-tier comparison
- Now replaced with modular pricing: 4 services at $150 each or complete package at $250

**Product Tour**: 5-step guided walkthrough modal accessible via floating "Take a Tour" button (if present):
- Progress bar and step indicators (dots)
- Each step features a large Lucide React icon, title, description, and feature list
- Previous/Next navigation buttons
- Multiple dismissal methods (ESC key, overlay click, close button)
- Auto-resets to Step 1 when reopened
- Steps cover both services: Smart Website Setup, Automated Follow-Ups, Outbound Lead Generation, CRM Pipeline Setup, Performance Reporting

**ROI Calculator**: (Removed from page - not applicable to new pricing model)
- Previously allowed cost comparison calculations
- Replaced with straightforward modular pricing presentation

**Case Studies**: Showcases three real business success stories with transformation metrics:
1. HVAC Business (Comfort Pro HVAC): Smart Website + automation transformed their lead capture, saving 40hrs/month on follow-ups
2. Life Coach (Mindful Life Coaching): Professional website with booking calendar + outbound leads filled their calendar with qualified prospects
3. Real Estate Agent (Thompson Real Estate): Complete automation package generated consistent leads and automated all follow-ups

## External Dependencies

### Third-Party Services

**Database**: 
- Neon Postgres (serverless PostgreSQL provider)
- Connection via `@neondatabase/serverless` driver

**Fonts**: 
- Google Fonts CDN for Inter font family
- Loaded in `client/index.html` with preconnect optimization

### UI & Component Libraries

**Radix UI**: Comprehensive set of unstyled, accessible component primitives including:
- Dialog, Dropdown Menu, Popover, Tooltip
- Form controls (Checkbox, Radio Group, Select, Slider, Switch)
- Navigation (Accordion, Tabs, Navigation Menu)
- Feedback (Toast, Alert Dialog, Progress)

**Shadcn UI**: Pre-styled component library built on Radix UI primitives, configured with "new-york" style variant

**Additional UI Dependencies**:
- `cmdk`: Command palette component
- `embla-carousel-react`: Carousel/slider functionality
- `class-variance-authority`: Type-safe variant styling
- `tailwind-merge` + `clsx`: Utility class merging

### Development Tools

**Vite**: Fast build tool and dev server with React plugin

**Replit Integrations** (development only):
- `@replit/vite-plugin-runtime-error-modal`: Runtime error overlay
- `@replit/vite-plugin-cartographer`: Code navigation
- `@replit/vite-plugin-dev-banner`: Development banner

**Build Tools**:
- esbuild: Production server bundling
- PostCSS with Tailwind CSS and Autoprefixer
- TypeScript compiler (tsc) for type checking

### Form & Validation

**React Hook Form**: Performant form state management with minimal re-renders

**Zod**: TypeScript-first schema validation used for:
- Form validation (via @hookform/resolvers)
- API request/response validation
- Database schema validation (via drizzle-zod)

### Utilities

**date-fns**: Date manipulation and formatting

**lucide-react**: Icon library providing consistent iconography throughout the application

**wouter**: Lightweight routing library (2KB alternative to React Router)