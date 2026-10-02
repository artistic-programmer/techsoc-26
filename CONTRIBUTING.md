# Contributing to TechSoc

Thank you for your interest in contributing to the TechSoc official website! We welcome contributions that improve site performance, design fidelity, accessibility, and content accuracy.

---

## 1. Fork & Branch Workflow

1. **Fork the Repository**: Create a personal fork of the repository on GitHub.
2. **Clone Locally**: Clone your fork to your local machine:
   ```bash
   git clone https://github.com/<your-username>/techsoc-26.git
   cd techsoc-26
   ```
3. **Install Dependencies**: Install the required packages:
   ```bash
   npm install
   ```
4. **Create a Feature Branch**: Always create a descriptive branch off `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

---

## 2. Development Guidelines

### Code Quality & Standards
- Write clean, maintainable, and readable TypeScript code.
- Ensure strict type safety; avoid using `any` types wherever possible.
- Adhere to the existing ESLint configurations and formatting conventions.

### Reusable Components
- Reusable UI elements (buttons, cards, badges, section headers, inputs) belong in `src/components/ui/` or their respective domain subfolder in `src/components/`.
- Avoid writing monolithic, duplicated markup in page routes.
- Adhere to the Neo-Brutalist design tokens specified in `AGENT/DESIGN_SYSTEM.md` (strong black borders, hard offset shadows, intentional accent colors).

### Content Source-of-Truth Rule
- **Never hardcode or fabricate organizational facts** (member names, contact info, event stats, dates, or social URLs) directly into components or page routes.
- Organizational records originate from `CONTENT/*.md` and are structured in `src/data/*.ts`.
- If factual information is not yet available, keep fields empty or use explicit pending indicators rather than inventing mock data.

### Responsive Design Testing
- Verify all changes across multiple device viewports:
  - Mobile (320px – 480px)
  - Tablet (481px – 768px)
  - Desktop (769px – 1024px+)
  - Ultra-wide displays
- Ensure layouts adapt cleanly rather than merely shrinking desktop views.

### Accessibility Expectations
- Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<header>`, `<footer>`, `<section>`).
- Ensure all interactive elements (buttons, links, inputs) have accessible labels and visible keyboard focus states.
- Provide descriptive `alt` text for all images and icons.
- Maintain high contrast ratios for text and UI controls.

---

## 3. Verification & Validation

Before submitting any code, run the local verification suite:

1. **Run the Linter**:
   ```bash
   npm run lint
   ```
   All ESLint errors and warnings must be resolved.

2. **Run the Production Build**:
   ```bash
   npm run build
   ```
   Ensure the project builds cleanly without TypeScript or Next.js build errors.

---

## 4. Pull Request Expectations

When you are ready to open a pull request:

1. **Keep PRs Focused**: Address a single feature, bug fix, or documentation update per PR.
2. **Clear Title & Description**: Use a descriptive PR title and explain what was changed, why, and how it was tested.
3. **Include Visuals for UI Changes**: Add screenshots or video recordings demonstrating desktop and mobile appearance for any visual updates.
4. **Link Relevant Issues**: Reference any related GitHub issues (e.g., `Fixes #12`).
5. **No Sensitive Data**: Ensure no API keys, credentials, or personal secrets are committed.
6. **Code of Conduct**: Treat maintainers and other contributors with respect in accordance with our [CODE_OF_CONDUCT.md](file:///d:/javascript/techsoc-26/CODE_OF_CONDUCT.md).
