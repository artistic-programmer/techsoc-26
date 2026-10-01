# Tech Society IIIT Bhubaneswar — Neo-Brutalist Redesign System

## 1. Goal

Redesign the existing Tech Society IIIT Bhubaneswar website at `https://techsoc-iiitbbsr.com/` into a bold, playful, editorial **neo-brutalist / modern retro-tech** visual system.

The five attached reference screenshots define the visual direction. They are references for:
- composition
- typography hierarchy
- color language
- cards
- borders and shadows
- playful decorative graphics
- responsive/mobile behavior
- portfolio/gallery presentation

**Do not copy the reference site's personal/portfolio content, branding, or exact layouts.**
The redesign must feel like **Tech Society IIIT Bhubaneswar**, not a clone of the reference.

---

## 2. Existing Content to Preserve

The current Tech Society site describes the society as a technical student community at IIIT Bhubaneswar with six dedicated clubs, workshops, lectures, competitions, OSS projects, learning, collaboration and mentorship.

Preserve the site's meaningful existing information and links while restructuring the presentation.

Core content themes:
- Tech Society IIIT Bhubaneswar
- six technical clubs
- workshops and sessions
- competitions / hackathons
- open-source projects
- student collaboration
- mentorship and learning
- events
- projects
- team / clubs
- contact / join-us CTA

Do not invent achievements, statistics, sponsors, people, dates, or testimonials.

---

# 3. Visual Direction

## Overall feel

Keywords:

`neo-brutalist`
`playful`
`student-tech`
`editorial`
`high-energy`
`friendly`
`handcrafted`
`bold`
`modern`
`slightly chaotic but structured`

The page should look intentionally designed rather than like a generic SaaS template.

Use:
- thick dark outlines
- hard offset shadows
- rounded but chunky containers
- oversized typography
- asymmetric compositions
- sticker/badge elements
- geometric decorative shapes
- strong color blocks
- generous whitespace
- occasional rotated elements
- clear visual rhythm

Avoid:
- glassmorphism
- excessive gradients
- corporate blue SaaS styling
- thin grey borders
- excessive blur
- generic dashboard cards
- excessive rounded-pill UI
- excessive animations
- visual clutter that harms readability

---

# 4. Color System

Use a warm off-white page background rather than pure white.

Suggested base palette:

```css
--background: #F7EBDD;
--surface: #FFFDF8;
--ink: #202020;

--lavender: #9FAEEA;
--purple: #8B4DEB;
--pink: #E94D91;
--hot-pink: #F08AD5;

--yellow: #FFD23F;
--orange: #FF8F2B;
--coral: #FF5638;

--teal: #28A7A0;
--green: #10B95A;
--cyan: #20B9E8;
```

These are starting points, not immutable values.

Important:
- Dark ink should be used for outlines, headings and strong text.
- Warm off-white should dominate the page.
- Accent colors should appear in cards, badges, stickers, buttons and decorative elements.
- Do not use every accent simultaneously in every section.
- Each section can have one dominant accent plus supporting colors.

---

# 5. Typography

Typography is one of the most important parts of the redesign.

Use a bold geometric display face for:
- hero heading
- major section headings
- event titles
- large numeric/stat elements

Use a highly readable sans-serif for:
- paragraphs
- navigation
- metadata
- buttons
- descriptions

The heading style should resemble the reference:
- very bold
- compact
- uppercase where appropriate
- tight line-height
- large scale
- strong visual contrast

Suggested implementation:
- `Space Grotesk` / `Archivo Black` / `Sora` / similarly bold geometric font for headings
- `Inter` / `DM Sans` / similar for body text

Do not use more than 2–3 font families.

---

# 6. Border + Shadow Language

This is a defining part of the design.

Default border:

```css
border: 2px solid #202020;
```

Primary neo-brutalist shadow:

```css
box-shadow: 6px 6px 0 #202020;
```

Large feature shadow:

```css
box-shadow: 10px 10px 0 #202020;
```

Avoid soft shadows.

Cards should feel physical, almost like stickers/posters placed on the page.

Interactive elements can shift the shadow:

```css
:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 #202020;
}
```

Buttons should visibly respond to hover/press.

---

# 7. Shape Language

Use recurring visual motifs throughout the site.

Possible decorative motifs:
- Pac-Man / cut-circle shapes
- basketball-like circular line icons
- stars
- arrows
- speech bubbles
- stickers
- Figma-like abstract squares
- circles with chunky outlines
- semicircles
- irregular blobs
- tags / labels
- small handwritten-style annotations

The shapes should act as a visual identity system.

Create reusable components rather than manually duplicating SVG/CSS.

---

# 8. Navigation

Desktop:
- large contained navbar
- Tech Society logo/wordmark on left
- navigation links on right
- optional highlighted CTA

Possible navigation:

`Home`
`About`
`Clubs`
`Events`
`Projects`
`Team`
`Contact`

The navbar can sit inside a large outlined container or visually integrate with the hero.

Mobile:
- compact logo
- hamburger menu
- full-screen or dropdown menu
- thick borders consistent with the visual language

Navigation must remain highly usable and accessible.

---

# 9. Hero Section

The hero should be the strongest visual section.

Suggested content structure:

Small eyebrow:
`TECH SOCIETY — IIIT BHUBANESWAR`

Main headline, for example:

`WE BUILD.`
`WE SHIP.`
`WE INSPIRE.`

or another Tech Society-specific headline derived from the existing brand/content.

Supporting copy should communicate:
- student-led technical community
- learning
- building
- open source
- collaboration

Primary CTA:
`Explore Tech Society`

Secondary CTA:
`See Our Events`

Hero composition:
- oversized headline
- asymmetric decorative shapes
- one major visual element
- sticker/badge labels
- offset card or image
- controlled overlap

Do not make it look like a personal portfolio hero.

---

# 10. About Section

Use a large editorial block instead of a generic centered paragraph.

Possible structure:
- large heading
- concise society description
- supporting visual/stat cards
- decorative stickers
- a "what we believe" / "how we work" subsection

Emphasize:
- students teaching students
- building together
- practical learning
- OSS
- experimentation
- community

---

# 11. Clubs Section

The six clubs should become a major visual section.

Use a grid of chunky cards.

Each club card:
- club name
- short description
- icon / illustration
- accent color
- optional category tag
- hover interaction

Cards can vary slightly in size/position while retaining a coherent grid.

Do not invent club descriptions. Pull existing content from the project/site where available.

---

# 12. Events Section

Events should feel like a poster wall / event archive.

Possible presentation:
- featured event card
- event list
- date sticker
- category label
- registration/status badge
- arrow CTA

Use strong typographic dates.

For example:

```text
05
FEB
2027
```

with the event title beside it.

Do not fabricate event dates. Use actual project data.

---

# 13. Projects Section

Present projects as visual case-study cards.

Each card can include:
- project name
- short description
- technology tags
- GitHub/demo link
- image if available

Use a mix of large and small cards.

The layout should feel closer to an editorial portfolio/gallery than a SaaS feature grid.

---

# 14. Team Section

If team information exists in the current project, present it using playful profile cards.

Use:
- photo/avatar
- name
- role
- club
- social/GitHub/LinkedIn if already available

Avoid inventing people.

Profile cards can use colorful backgrounds and small sticker labels.

---

# 15. CTA / Join Us

The final CTA should be visually loud.

Example structure:

`BUILD SOMETHING WITH US.`

Supporting line:
`Join a community of students who learn, build and ship together.`

CTA:
`Join Tech Society`

Use:
- large colored background
- thick border
- offset shadow
- decorative shapes
- oversized type

---

# 16. Footer

Keep it compact but branded.

Include:
- Tech Society logo
- IIIT Bhubaneswar
- relevant navigation
- social links that already exist
- contact email if already present
- copyright

Use the same outline/shadow language.

---

# 17. Responsive Design

The mobile screenshot reference is especially important.

Do not simply shrink the desktop page.

At mobile widths:
- stack content intentionally
- maintain oversized headings but adjust line length
- keep strong visual hierarchy
- move decorative elements instead of letting them overlap text
- cards become single-column or controlled horizontal layouts
- navigation becomes a hamburger
- hero visual can move below the headline
- preserve chunky borders and shadows
- prevent horizontal scrolling

Test at approximately:
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px+

---

# 18. Motion

Motion should feel tactile, not cinematic.

Use subtle:
- card hover movement
- button press movement
- sticker rotation
- reveal-on-scroll
- marquee where useful
- slight floating decorative elements

Avoid:
- huge parallax effects
- constant floating everywhere
- slow page transitions that hurt usability
- excessive GSAP unless the existing project already uses it

Animations should respect `prefers-reduced-motion`.

---

# 19. Component Architecture

Create reusable design primitives.

Suggested components:

```text
NeoButton
NeoCard
Sticker
Badge
SectionHeading
DecorativeShape
EventCard
ClubCard
ProjectCard
TeamCard
NeoNavbar
NeoFooter
```

Prefer a small design system over one-off styles.

Centralize:
- colors
- border width
- shadow offsets
- radii
- typography
- spacing
- breakpoints

---

# 20. Implementation Rules

1. Inspect the existing repository before changing anything.
2. Preserve the current framework and build setup unless there is a compelling reason to change it.
3. Preserve working routes, links, forms, data sources and integrations.
4. Do not delete existing content merely to simplify the redesign.
5. Reuse existing assets when appropriate.
6. Do not invent content.
7. Make the redesign responsive from the beginning.
8. Keep semantic HTML and accessibility.
9. Maintain keyboard navigation and visible focus states.
10. Optimize images and avoid unnecessary dependencies.
11. Do not turn every element into a card.
12. Do not overuse rounded pills.
13. Do not use gradients unless a very small decorative use clearly improves the design.
14. Keep the page visually bold while preserving readability.
15. The final result should feel like a real student tech society brand, not a template.

---

# 21. Reference Files

The five supplied screenshots are included alongside this document.

```text
reference/
├── image-01-desktop-home.png
├── image-02-mobile-nft.png
├── image-03-services.png
├── image-04-gallery.png
└── image-05-mobile-home.png
```

Use them as visual references while implementing.

Reference interpretation:

- `image-01-desktop-home.png`
  - overall desktop composition
  - hero hierarchy
  - navigation
  - thick borders/shadows
  - decorative shapes

- `image-02-mobile-nft.png`
  - colorful visual system
  - mobile card composition
  - gallery/product presentation

- `image-03-services.png`
  - three-card section structure
  - editorial heading
  - neo-brutalist cards

- `image-04-gallery.png`
  - asymmetric image/gallery composition
  - brand asset system
  - visual collage

- `image-05-mobile-home.png`
  - mobile hero hierarchy
  - responsive spacing
  - large typography
  - decorative positioning

---

# 22. Definition of Done

The redesign is complete when:

- The existing Tech Society website has a coherent neo-brutalist visual identity.
- Desktop and mobile both feel intentionally designed.
- The six clubs, events, projects and existing relevant content are easy to discover.
- Typography has strong editorial hierarchy.
- Cards, buttons and sections use consistent dark outlines and hard shadows.
- Decorative graphics feel like one coherent brand system.
- The page does not resemble a generic SaaS landing page.
- No reference-site personal branding/content has leaked into Tech Society.
- Existing functionality still works.
- No horizontal overflow exists on mobile.
- Keyboard/focus/accessibility basics remain intact.
- The site builds and runs successfully.
