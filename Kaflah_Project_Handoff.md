# Kaflah Project Handoff

This document is the source of truth for continuing the Kaflah project on another computer or in another Codex session.

## Start here

Read this file first, then inspect the site/ source and run the verification commands below. Do not repeat the Instagram collection or redesign the product from scratch unless a new requirement explicitly asks for it.

## Product goal

Build a public-facing homepage for Kaflah Organisation, a youth-led Pakistani nonprofit, using the organisation's real public Instagram content and downloaded media.

The approved creative direction is **“One movement. Three paths.”** It presents three verified programme areas as one movement:

- **SABZKAL** — plantation and environmental activity.
- **QALAM** — education, stationery, books, and learning activity.
- **KHIDMAT-E-KHALAQ** — community care, food, health, and fundraising activity.

The experience should feel editorial, documentary, warm, and credible rather than like a generic NGO card grid.

## Design decisions already approved

- White/ivory is the primary canvas. Use charcoal for primary text and navigation.
- Real Kaflah photography and video carry the emotional weight.
- Programme accents: SabzKal #3F6B39, Qalam #214C9A, Khidmat-e-Khalaq #8A3D4C.
- Warm ivory canvas: #F6F5EF; white surfaces; charcoal ink: #151713.
- Use a high-contrast serif for large editorial headlines and a clean sans-serif for UI/body text.
- Prefer square editorial media frames with a few intentional rounded corners; avoid pill-heavy controls.
- The signature interaction is one restrained animated SVG path experience, not a WebGL demo.
- Respect mobile layout, keyboard access, visible focus, meaningful alt text, and prefers-reduced-motion.
- Do not use stock or AI-generated media in the product.

## Content truth and safety boundary

The current collection was made from the public profile kaflah.organisation on 2026-08-14 using Instaloader 4.15.3. It contains 30 public posts, 66 image assets, 18 videos, captions, and raw metadata.

Safe, verified content currently represented:

- SabzKal plantation drives at Lahore Public School and GCU.
- Qalam activity including East Stars stationery drive, Kafalat Ghar stationery drive, Alif Laila Library book reading/drawing activity, and Government Girls Primary School Gulberg summer internship.
- Khidmat-e-Khalaq activity including Kafalat Ghar dental camp, Iftar Dastarkhuwan, and Project Zavia fundraising activity.
- Verified impact statement: **“2,000+ people served”** for the 3 March 2026 Iftar Dastarkhuwan.
- Named collaborations that appear in the source content: Project Zavia, Allah Walay Trust, ABU, Women Development Center, and Alkhidmat.

Never invent or imply unsupported:

- beneficiary totals other than the verified 2,000+ statement;
- money raised, donation amounts, payment details, or fake checkout forms;
- leadership, organisation history, awards, testimonials, or partnership claims;
- locations that are not explicit in the source captions;
- programme outcomes or impact metrics not present in the source data.

Instagram CDN URLs in raw metadata may expire. Local downloaded media is the preferred source for the website.

## Current repository and GitHub state

- Local project: C:\Users\Abdul\Desktop\kaaflah\instaloader
- Private GitHub repository: https://github.com/int-abd-5/kaflah
- Default remote for the new project: kaflah
- Original upstream Instaloader remote: origin → https://github.com/instaloader/instaloader.git
- Current local branch: kaflah-site
- Current branch tracks kaflah/main.
- The new repository was created privately and the existing Instaloader history is still part of the repository because the project began from the cloned Instaloader repository.
- The Kaflah site/data commit before this handoff is e8b913e feat: add Kaflah Organisation website.

Do not replace or remove origin casually. Use the kaflah remote for Kaflah work.

## Repository layout

    instaloader/
    ├── Kaflah_Project_Handoff.md   # this continuation document
    ├── profile_data/                # normalized and raw public Instagram metadata
    ├── profile_media/               # downloaded public profile/post media
    ├── site/                        # Vite + React + TypeScript public homepage
    │   ├── scripts/build-content.mjs
    │   ├── src/content/             # normalized typed content boundary
    │   ├── src/components/
    │   ├── src/sections/
    │   ├── src/styles/
    │   ├── public/media/            # curated media copied for the frontend
    │   └── tests/content.test.ts
    ├── docs/superpowers/specs/       # approved design specification
    └── docs/superpowers/plans/       # implementation plan

Important data files:

- profile_data/profile_summary.json — normalized public profile fields.
- profile_data/posts.json — normalized metadata for the 30 posts.
- profile_data/posts.csv — spreadsheet-friendly post index.
- profile_data/*.json.xz — raw compressed Instaloader metadata.
- profile_data/*.txt — captions generated by Instaloader.
- profile_data/README.md — collection details.

## Frontend architecture

The frontend is a self-contained Vite app under site/.

The content flow is:

    profile_data/posts.json
            + curated mapping in site/scripts/build-content.mjs
            ↓
    site/src/content/generated.ts + site/public/media/
            ↓
    typed React components and sections

React components should consume normalized generated content, not raw scraper payloads. Each project/story retains Instagram source provenance with:

    type SourceRef = {
      sourcePlatform: 'instagram';
      sourcePostId: string;
      sourceUrl: string;
      sourcePublishedAt: string;
    };

Current normalized content types are in site/src/content/types.ts. The public exports are in site/src/content/index.ts and include profile, programs, projects, fieldNotes, impactFacts, and heroMedia.

Current page sections/components include:

- Hero
- ImpactStrip
- ThreePaths
- ProgramSelector
- ImpactPaths
- FeaturedWork
- FieldNotes
- JoinMovement
- SiteHeader
- SiteFooter
- ProjectFeature
- MediaFrame

## Homepage structure

1. Header with Kaflah wordmark, compact navigation, and Get involved CTA.
2. Editorial ivory hero with “One movement. Three paths.” and real media collage.
3. Verified impact strip with the 2,000+ Iftar fact and programme labels.
4. “Three paths, one purpose” programme selector with animated SVG paths and selected media.
5. Featured work presented as editorial project stories, not equal generic cards.
6. Chronological field notes from 2024–2026.
7. Volunteer/support close with clear next steps and no fake payment flow.
8. Footer with verified Instagram/profile link and public-content provenance note.

## How to run on the other computer

Clone the private repository after authenticating GitHub:

~~~powershell
git clone https://github.com/int-abd-5/kaflah.git
cd kaflah
cd site
npm install
npm run content:build
npm run dev
~~~

Open the local URL printed by Vite, normally http://localhost:5173.

For a production build and local preview:

~~~powershell
npm run build
npm run preview
~~~

Run content tests:

~~~powershell
npm test -- --run
~~~

The project needs a current Node.js/npm installation. Do not commit node_modules/; site/.gitignore handles generated dependencies/build output.

## Refreshing Instagram data later

Use a fresh authenticated or anonymous Instaloader collection only when the user explicitly requests an update. Respect Instagram access rules and rate limits. Never place Instagram login passwords, session cookies, or tokens in this repository or in this handoff file.

The current collection used anonymous access and did not download media during the metadata command. Existing downloaded media is already present in profile_media/ and curated copies are in site/public/media/.

If profile_data/posts.json changes:

1. Review the new data manually.
2. Update the explicit curated mappings in site/scripts/build-content.mjs.
3. Run npm run content:build from site/.
4. Run npm test -- --run and npm run build.
5. Inspect the UI on desktop and mobile before committing.

## Recommended next work

The first milestone is implemented and pushed. Continue in this order:

1. Run the site locally and verify the current homepage on desktop and mobile.
2. Run content tests and production build; fix any environment-specific issues.
3. Perform a visual/accessibility pass: focus states, mobile menu, reduced motion, image alt text, contrast, overflow, video poster/loading behavior, and section rhythm.
4. Review whether the content mapping still matches the source captions and whether any wording could be interpreted as invented impact.
5. Decide the hosting target. A static Vite deployment is appropriate; no backend, Supabase, authentication, payment system, or admin dashboard is currently required.
6. Only after the user approves the polished site, configure deployment and a custom domain if requested.

Out of scope for the current milestone:

- secondary routes;
- real donations/payment integration;
- Supabase or another database;
- authenticated volunteer applications;
- admin/content management system.

## Git workflow for future changes

Check state before editing:

~~~powershell
git status --short --branch
git log -5 --oneline
git remote -v
~~~

Use a focused commit and push to the private Kaflah repository:

~~~powershell
git add -- <specific files>
git commit -m "<focused change>"
git push kaflah kaflah-site:main
~~~

Never use git add -A for this project without reviewing every path first, because the repository contains large downloaded media and is based on the upstream Instaloader tree.

## Suggested resume prompt for Codex on the other computer

~~~text
I am continuing the Kaflah project. Read Kaflah_Project_Handoff.md first, then inspect the current git status and the site/ source. The goal is the private repo https://github.com/int-abd-5/kaflah, a Vite + React + TypeScript homepage for Kaflah Organisation built from verified public Instagram content. Do not redo the scraper or redesign from scratch. First run the site tests and production build, report the current state, and then work on the next highest-priority item from the handoff while preserving the white/ivory editorial direction, source traceability, accessibility, and no-invented-impact rules.
~~~

