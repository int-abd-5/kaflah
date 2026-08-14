# Kaflah Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, real-content Kaflah Organisation homepage with a white/ivory-first editorial system and an interactive “Three Paths, One Purpose” program experience.

**Architecture:** Add a self-contained Vite + React + TypeScript app in `site/` inside the cloned repository. A Node content-build script transforms the existing `profile_data/posts.json` into typed content and copies curated media from `profile_media/` into `site/public/media/`; React components consume only the generated content module.

**Tech Stack:** React 19, Vite, TypeScript, CSS Modules/plain CSS tokens, Framer Motion for restrained state transitions, inline SVG for the signature paths, and Vitest for content validation.

## Global Constraints

- Use the actual scraped content and supplied media as the primary source of truth.
- Do not fabricate beneficiary counts, money raised, volunteer counts, locations, dates, partnerships, results, quotations, or awards.
- Use the exact program names SABZKAL, QALAM, and KHIDMAT-E-KHALAQ.
- White/ivory is the primary visual canvas; charcoal is the main text color.
- Do not create a generic equal-card NGO layout.
- The signature interaction is one lightweight SVG/motion experience, not a WebGL demo.
- Mobile, keyboard access, reduced motion, semantic HTML, and image alt text are required.

---

### Task 1: Scaffold the site and content transformation boundary

**Files:**
- Create: `site/package.json`
- Create: `site/index.html`
- Create: `site/tsconfig.json`
- Create: `site/tsconfig.node.json`
- Create: `site/vite.config.ts`
- Create: `site/src/main.tsx`
- Create: `site/src/App.tsx`
- Create: `site/src/styles/tokens.css`
- Create: `site/src/styles/global.css`
- Create: `site/scripts/build-content.mjs`
- Create: `site/src/content/types.ts`
- Create: `site/src/content/generated.ts`
- Create: `site/src/content/index.ts`
- Create: `site/tests/content.test.ts`

**Interfaces:**
- `build-content.mjs` reads `../profile_data/posts.json` and writes `src/content/generated.ts` plus curated files in `public/media/`.
- `src/content/index.ts` exports `programs`, `projects`, `fieldNotes`, `impactFacts`, and `profile`.
- `Project.media` contains URL paths beginning with `/media/`.

- [ ] **Step 1: Create the package and Vite entry files** with scripts `dev`, `build`, `preview`, `content:build`, and `test`.
- [ ] **Step 2: Define the content types** for `SourceRef`, `Program`, `Project`, `FieldNote`, `ImpactFact`, and `ProfileSummary`.
- [ ] **Step 3: Implement the content transformation** with explicit curated mappings for the nine real initiatives in the design spec; fail with a clear error when an expected post shortcode is absent.
- [ ] **Step 4: Run `npm run content:build`** from `site/` and verify the generated module contains exactly three programs, nine curated projects/stories, and one verified impact fact.
- [ ] **Step 5: Add content tests** asserting program IDs, source URL traceability, absence of placeholder copy, and presence of the 2,000+ fact.
- [ ] **Step 6: Run `npm test -- --run`** and confirm the content boundary passes before UI work.

### Task 2: Build the global design system and shell

**Files:**
- Create: `site/src/components/SiteHeader.tsx`
- Create: `site/src/components/SiteFooter.tsx`
- Create: `site/src/components/SectionLabel.tsx`
- Modify: `site/src/App.tsx`
- Modify: `site/src/styles/tokens.css`
- Modify: `site/src/styles/global.css`

**Interfaces:**
- `SiteHeader` accepts `onGetInvolved?: () => void` and renders the approved nav labels.
- `SiteFooter` consumes `profile.externalUrl` and `profile.username` from content.

- [ ] **Step 1: Add the type, color, spacing, border, and motion tokens** for the ivory/white adaptation.
- [ ] **Step 2: Implement semantic page structure** with skip link, `header`, `main`, `section`, and `footer` landmarks.
- [ ] **Step 3: Implement responsive navigation** with a keyboard-accessible mobile menu and no layout shift.
- [ ] **Step 4: Add focus-visible, reduced-motion, and contrast-safe global styles.**
- [ ] **Step 5: Run `npm run build`** to verify the shell compiles before sections are added.

### Task 3: Implement the hero and verified impact strip

**Files:**
- Create: `site/src/sections/Hero.tsx`
- Create: `site/src/sections/ImpactStrip.tsx`
- Create: `site/src/components/MediaFrame.tsx`
- Modify: `site/src/App.tsx`
- Modify: `site/src/styles/global.css`

**Interfaces:**
- `Hero` consumes `profile`, `programs`, and the chosen hero `Project`.
- `ImpactStrip` consumes `impactFacts: ImpactFact[]` and renders only data-backed facts.
- `MediaFrame` accepts `src`, `alt`, `priority`, and optional `className`.

- [ ] **Step 1: Select the real iftar/plantation/education assets** from generated content for the hero collage.
- [ ] **Step 2: Implement the white/ivory two-column hero** with headline “One movement. Three paths.”, factual supporting copy, and `Join the movement` CTA.
- [ ] **Step 3: Add a collage with stable aspect-ratio frames** so real portrait and landscape media crop without distortion.
- [ ] **Step 4: Render the impact strip** with the verified “2,000+ people served” fact and three program labels rather than invented aggregate totals.
- [ ] **Step 5: Verify keyboard focus, mobile stacking, and alt text** with a local browser run.

### Task 4: Implement the “Three Paths, One Purpose” interaction

**Files:**
- Create: `site/src/sections/ThreePaths.tsx`
- Create: `site/src/components/ProgramSelector.tsx`
- Create: `site/src/components/ImpactPaths.tsx`
- Modify: `site/src/App.tsx`
- Modify: `site/src/styles/global.css`

**Interfaces:**
- `ProgramSelector` accepts `programs`, `activeId`, and `onChange(id)`.
- `ImpactPaths` accepts `activeId` and renders the SVG path state.
- `ThreePaths` owns `activeId` state and passes selected program content to `MediaFrame`.

- [ ] **Step 1: Create the program selector as real buttons** with selected, hover, and keyboard states.
- [ ] **Step 2: Draw three SVG paths** in program colors, with `aria-hidden="true"` decoration and adjacent accessible program labels.
- [ ] **Step 3: Add restrained Framer Motion transitions** for path emphasis, media crossfade, and summary changes.
- [ ] **Step 4: Add a CSS-only reduced-motion path** that disables transforms and opacity animation.
- [ ] **Step 5: Verify pointer, keyboard, and touch interactions** do not cause horizontal overflow or inaccessible state changes.

### Task 5: Add featured projects, field notes, and closing CTA

**Files:**
- Create: `site/src/sections/FeaturedWork.tsx`
- Create: `site/src/sections/FieldNotes.tsx`
- Create: `site/src/sections/JoinMovement.tsx`
- Create: `site/src/components/ProjectFeature.tsx`
- Create: `site/src/components/FieldNoteRow.tsx`
- Modify: `site/src/App.tsx`
- Modify: `site/src/styles/global.css`

**Interfaces:**
- `ProjectFeature` accepts a normalized `Project` and renders title, program, date, location, summary, media, and source provenance.
- `FieldNoteRow` accepts a normalized `FieldNote`.

- [ ] **Step 1: Build an editorial project composition** with one large feature and smaller offset media rather than equal cards.
- [ ] **Step 2: Use real projects** for Stationery Drive, Plantation Drive, Dental Camp, Alif Laila activity, Iftar Dastarkhuwan, Summer Internship, and Project Zavia fundraiser.
- [ ] **Step 3: Build a chronological field-notes rail** from 2024–2026 with explicit source dates and no inferred city labels.
- [ ] **Step 4: Add the volunteer/support close** with clear paths to join, support, and partner without fake payment forms.
- [ ] **Step 5: Run the site and check desktop/mobile section rhythm** before polishing.

### Task 6: Add metadata, performance safeguards, and verification

**Files:**
- Modify: `site/index.html`
- Create: `site/public/robots.txt`
- Create: `site/public/sitemap.xml`
- Modify: `site/src/App.tsx`
- Modify: `site/src/styles/global.css`
- Create: `site/README.md`

- [ ] **Step 1: Add page title, description, Open Graph image metadata, and JSON-LD Organization data** using only verified profile data.
- [ ] **Step 2: Add `loading="lazy"`, `decoding="async"`, video `preload="metadata"`, and poster fallback where video is used.**
- [ ] **Step 3: Add `robots.txt`, `sitemap.xml`, and a README with local run instructions.**
- [ ] **Step 4: Run `npm run build` and `npm test -- --run`.**
- [ ] **Step 5: Run the app, inspect desktop and mobile screenshots, and fix overflow, clipping, contrast, typography, media cropping, and reduced-motion issues.**
- [ ] **Step 6: Remove temporary contact sheets/debug artifacts before handoff.**
