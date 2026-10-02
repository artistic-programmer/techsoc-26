# TechSoc Architecture Documentation

This document describes the architectural principles, directory organization, and data flow of the official TechSoc website.

---

## 1. Overview & Technology Stack

The TechSoc website is built as a modern, high-performance static and server-rendered web application utilizing:

- **Next.js (App Router, React 19)**: Framework handling routing, layout composition, server and client rendering, font optimization, and metadata generation.
- **TypeScript**: Strict type definitions for application state, UI props, and data models to prevent runtime exceptions.
- **Tailwind CSS (v4)**: Modern CSS utility layer configured for a high-contrast Neo-Brutalist design language (strong borders, hard offset shadows, intentional accent colors).
- **Framer Motion**: Smooth, accessible micro-interactions, layout transitions, and entrance animations without compromising performance.

---

## 2. Content-Driven Data Flow

The core design principle of this repository is a strict separation between factual content, data structures, UI components, and page routing:

```
┌─────────────────────────────────┐
│     CONTENT/ (Source of Truth)  │  <- Human-readable, verified markdown documents
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     src/data/ (Data Modules)    │  <- Typed data structures conforming to TypeScript models
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│  src/components/ (Reusable UI)  │  <- Agnostic, composable presentation components
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│       src/app/ (Route Pages)    │  <- Next.js App Router pages assembling layouts & data
└─────────────────────────────────┘
```

### The Cardinal Rule: No Fabricated Content
> [!IMPORTANT]
> **Factual organization content must NEVER be fabricated or inferred from visual design mockups.**
> 
> Visual mockups and design references demonstrate layout, proportions, colors, and styling patterns only. Official society information (names, emails, dates, statistics, event descriptions, member lists, and links) must come exclusively from verified sources maintained in the `CONTENT/` directory. If factual data is missing or pending verification, fields must remain blank or use explicit placeholders rather than invented values.

---

## 3. Directory Structure and Responsibilities

### `CONTENT/` — Source-of-Truth Content
Contains plain Markdown files representing official organizational records:
- `community.md`: GDG details, technical domains, community programs, active stats, and activities.
- `contact.md`: Official emails, social media links, join links, campus location, contact categories, and FAQs.
- `domains.md`: Active technical domains, descriptions, domain leads, and technologies.
- `events.md`: Upcoming events, featured hackathons, past event archives, technical sessions, and mentorship initiatives.
- `projects.md`: Society projects, categories, contributor lists, repositories, and live links.
- `team.md`: Core team, coordinators, domain leads, general members, faculty advisors, and alumni mentors.

### `src/types/` — Typed Models
Centralized TypeScript interfaces defining all domain data entities:
- `EventItem`, `TechnicalSession`, `MentorshipProgram`
- `DomainItem`
- `ProjectItem`
- `TeamMember`, `FacultyAdvisor`, `AlumniMentor`
- `SiteConfig`, `OfficialContact`, `SocialLinks`, `CampusLocation`, `FaqItem`, `GDGInfo`

### `src/data/` — Structured Content Modules
TypeScript files importing types from `@/types` and mapping verified content from `CONTENT/` into typed arrays and objects:
- `siteConfig.ts`: Site-wide configuration, social links, contact coordinates.
- `events.ts`: Structured lists of events, sessions, hackathons, and mentorship programs.
- `team.ts`: Team lists across all hierarchy tiers.
- `domains.ts`: Technical domain definitions.
- `projects.ts`: Project showcases and metadata.
- `faqs.ts`: Frequently asked questions and answers.
- `programs.ts`: Community initiatives and programs.
- `index.ts`: Barrel export for convenient data consumption.

### `src/components/` — Reusable UI Components
Composable, modular React components adhering to the design system:
- `ui/`: Primitive building blocks (Button, Card, Badge, SectionHeader, etc.).
- `layout/`: Global framing components (Navbar, Footer, MobileMenu, PageContainer).
- `community/`: Domain displays, program cards, GDG banners.
- `events/`: Event cards, detail modals, timeline elements.
- `filters/`: Category filtering tabs and search bars.
- `team/`: Team member cards and grid layouts.
- `projects/`: Project showcase cards and links.
- `contact/`: Interactive contact form, channels, and campus location card.
- `faq/`: Collapsible accordion components for FAQs.

### `src/app/` — Route Pages & Layouts (Next.js App Router)
Next.js page components that coordinate data fetching and assemble UI components:
- `app/layout.tsx`: Root layout with font configuration, global metadata, Navbar, and Footer.
- `app/globals.css`: Neo-Brutalist base styles, CSS variables, and utility classes.
- `app/page.tsx`: Home landing page with society highlights and quick links.
- `app/community/page.tsx`: Technical domains, community initiatives, and collaborative programs.
- `app/events/page.tsx`: Event listings, hackathons, sessions, and past events with filtering.
- `app/team/page.tsx`: Structured team directory by role.
- `app/connect/page.tsx`: Contact information, categorized inquiry form, and FAQ.

### `public/` — Brand and Media Assets
Static files served directly by Next.js:
- Official TechSoc logos, icons, favicons.
- Verified community photos and project screenshots.

### `AGENT/` — Agent & Design System Documentation
Internal guidelines for autonomous agents and contributors:
- `AGENTS.md`: Development rules, design principles, constraints, and reference URLs.
- `DESIGN_SYSTEM.md`: Neo-Brutalist design tokens (typography, border weights, offset shadows, color palette).

---

## 4. Architectural Patterns & Best Practices

1. **Unidirectional Data Flow**: Components receive data as props from data modules or page parents. Components do not directly fetch or mutate organization records.
2. **Strict Component Isolation**: UI components focus solely on presentation and micro-interactions. They do not encode business logic or hardcode society records.
3. **No Unnecessary External Dependencies**: The site avoids complex backend/database dependencies, ensuring fast static page generation, zero cold-start overhead, and simplified deployment.
4. **Accessible Neo-Brutalism**: High contrast borders and vivid accent colors are balanced with accessible contrast ratios, semantic HTML5 elements, and keyboard navigability.
