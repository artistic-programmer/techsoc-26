# TechSoc — IIIT Bhubaneswar

Official website of TechSoc, the Technical Society of IIIT Bhubaneswar.

---

## Overview

This repository contains the source code for the official website of TechSoc, the student-led technical society of IIIT Bhubaneswar. The platform serves as the central hub for technical activities, student initiatives, domain explorations, hackathons, and community programs across the institute.

---

## Features

- **Neo-Brutalist Aesthetic**: High-contrast borders, bold typographic hierarchy, hard offset shadows, and vivid accent markers.
- **Strict Content Separation**: Organizational data is isolated in dedicated data models and source documents rather than embedded directly in UI components.
- **Responsive Layout**: Designed for optimal viewing across mobile devices, tablets, and desktop displays.
- **Micro-Interactions**: Smooth, accessible transitions and hover effects powered by Framer Motion.
- **Structured Categorization**: Dynamic filtering and categorizations for events, technical domains, and inquiries.

---

## Pages

- **Home (`/`)**: Main landing page highlighting society initiatives, featured domains, upcoming activities, and community links.
- **Community (`/community`)**: Overview of technical domains, community initiatives, and collaborative programs.
- **Events (`/events`)**: Listings of upcoming events, featured hackathons, technical sessions, past events, and mentorship opportunities with category filtering.
- **Team (`/team`)**: Directory of core team members, coordinators, domain leads, faculty advisors, and mentors.
- **Connect (`/connect`)**: Official communication channels, categorized contact form, campus location details, and frequently asked questions.

---

## Tech Stack

- **[Next.js](https://nextjs.org/)** (v16, App Router) — React framework for server and client rendering, routing, and asset optimization.
- **[TypeScript](https://www.typescriptlang.org/)** (v5) — Static typing for robust component props, interfaces, and data models.
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) — Utility-first styling framework configured for Neo-Brutalist design tokens.
- **[Framer Motion](https://www.framer.com/motion/)** (v13) — Animation library for accessible micro-interactions and transitions.

---

## Project Structure

```text
techsoc-26/
├── AGENT/                  # Agent development guidelines and design system tokens
│   ├── AGENTS.md
│   └── DESIGN_SYSTEM.md
├── CONTENT/                # Verified source-of-truth markdown files for society data
│   ├── community.md
│   ├── contact.md
│   ├── domains.md
│   ├── events.md
│   ├── projects.md
│   └── team.md
├── public/                 # Static assets, logos, and icons
├── src/
│   ├── app/                # Next.js App Router pages and layout
│   │   ├── community/
│   │   ├── connect/
│   │   ├── events/
│   │   ├── team/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Modular, reusable UI components
│   │   ├── community/
│   │   ├── contact/
│   │   ├── domains/
│   │   ├── events/
│   │   ├── faq/
│   │   ├── filters/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── team/
│   │   └── ui/
│   ├── data/               # Structured data mapped from CONTENT/
│   │   ├── domains.ts
│   │   ├── events.ts
│   │   ├── faqs.ts
│   │   ├── index.ts
│   │   ├── programs.ts
│   │   ├── projects.ts
│   │   ├── siteConfig.ts
│   │   └── team.ts
│   └── types/              # TypeScript interface definitions
│       └── index.ts
├── ARCHITECTURE.md         # Detailed architectural documentation
├── CODE_OF_CONDUCT.md      # Community standards and guidelines
├── CONTRIBUTING.md         # Contribution guidelines and workflow
├── SECURITY.md             # Security policy and secret handling
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- `npm` (packaged with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/techsoc-26.git
cd techsoc-26
npm install
```

---

## Development

To run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page automatically reloads when changes are saved.

---

## Build

To create an optimized production build:

```bash
npm run build
```

To run the built production server locally:

```bash
npm run start
```

To check for code formatting and linting issues:

```bash
npm run lint
```

---

## Environment Variables

No environment variables are currently required to run or build the application.

If secret keys or dynamic service integrations are introduced in future releases, they should be defined in a `.env.local` file (which is ignored by git) and documented in an accompanying template.

---

## Content Management

This project maintains a strict separation between presentation logic and organizational data:

1. **Source of Truth**: Official records are documented in plain markdown files located under `CONTENT/`.
2. **Structured Models**: Typed data modules in `src/data/` load and export structured records conforming to the TypeScript models in `src/types/`.
3. **No Fabricated Content**: Factual details such as member names, contact emails, event statistics, and dates must never be fabricated. Where official information is pending, data structures remain empty or reflect pending status.

For a comprehensive explanation of data flow, refer to [ARCHITECTURE.md](file:///d:/javascript/techsoc-26/ARCHITECTURE.md).

---

## Design System

The application implements a distinctive Neo-Brutalist visual language characterized by:
- Bold, high-contrast black borders (`border-2`, `border-3`, `border-4`)
- Hard offset shadows without blur effects (`shadow-[4px_4px_0px_#000]`, `shadow-[6px_6px_0px_#000]`)
- Distinctive accent color palette (yellow, green, pink/red, light blue)
- Strong typographical hierarchy with uppercase titles and compact technical tags

Design tokens, layout specifications, and style conventions are documented in [AGENT/DESIGN_SYSTEM.md](file:///d:/javascript/techsoc-26/AGENT/DESIGN_SYSTEM.md).

---

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](file:///d:/javascript/techsoc-26/CONTRIBUTING.md) for details on our code of conduct, development workflow, and pull request procedures.

---

## License

No license is currently specified in this repository. A license decision is required from the TechSoc repository maintainers.

---

## Maintainers / TechSoc

Maintained by TechSoc, the Technical Society of IIIT Bhubaneswar.

For questions, community concerns, or contribution inquiries, please reach out to the repository maintainers or designated TechSoc leadership.
