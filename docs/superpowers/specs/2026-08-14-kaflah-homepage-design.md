# Kaflah homepage design

## Goal

Create the first public-facing homepage for Kaflah Organisation as a premium, youth-led Pakistani NGO experience built from the scraped Instagram content and downloaded media in this repository.

## Approved direction

Use the “One Movement, Three Paths” concept, adapted to a white/ivory-first visual system:

- White/ivory is the primary page canvas.
- Charcoal is the primary text and navigation color.
- Real Kaflah photography/video carries the emotional weight.
- SabzKal, Qalam, and Khidmat-e-Khalaq appear as one movement with three accent colors.
- One signature interaction uses animated SVG paths and a selected program media panel.
- Motion is restrained, pointer/scroll responsive, and disabled or reduced under `prefers-reduced-motion`.

## Content truth

The current scrape contains 30 public posts, 66 image assets, 18 videos, and captions/raw metadata. The content model may safely surface:

- SabzKal: plantation drives at Lahore Public School and GCU.
- Qalam: East Stars stationery drive; Kafalat Ghar stationery drive; Alif Laila Library book reading/drawing activity; Government Girls Primary School Gulberg summer internship.
- Khidmat-e-Khalaq: Kafalat Ghar dental camp; Iftar Dastarkhuwan; fundraising activity with Project Zavia.
- Verified impact: “2,000+ people served” for the 3 March 2026 Iftar Dastarkhuwan.
- Named collaborations: Project Zavia, Allah Walay Trust, ABU, Women Development Center, and Alkhidmat.

The site must not invent organization history, leadership, locations, totals, partner logos, donation details, or testimonials. Locations are displayed only when they are explicitly present in captions, such as Lahore Public School, GCU, Kafalat Ghar Orphanage, Alif Laila Library, Government Girls Primary School Gulberg, and Pink Pistachio Cafe Gulberg.

## Homepage structure

1. Header with Kaflah wordmark, compact navigation, and `Get involved` CTA.
2. Hero: editorial white/ivory split layout, real community image collage, headline “One movement. Three paths.”, concise organization copy, and `Join the movement` CTA.
3. Impact strip: only verified/public facts, including the 2,000+ Iftar figure and content-derived program labels; avoid fabricated global totals.
4. Signature “Three paths, one purpose” interaction: program buttons/labels, animated paths, and program-specific media/summary panel.
5. Featured work: visually strong project stories presented as editorial case-study tiles, not a generic equal-card grid.
6. Field notes: a compact chronology of real work from 2024–2026.
7. Volunteer/support close: youth-oriented invitation with clear next-step CTAs and no fake donation integration.
8. Footer with verified Instagram/profile link and an explicit “content from public field notes” provenance boundary.

## Content architecture

The frontend consumes normalized TypeScript data, never raw scraper payloads. Each content item retains:

```ts
type SourceRef = {
  sourcePlatform: 'instagram';
  sourcePostId: string;
  sourceUrl: string;
  sourcePublishedAt: string;
};

type Program = {
  id: 'sabzkal' | 'qalam' | 'khidmat-e-khalaq';
  name: string;
  color: string;
  summary: string;
};

type Project = {
  slug: string;
  title: string;
  programId: Program['id'];
  dateLabel: string;
  locationLabel?: string;
  summary: string;
  verifiedFacts?: string[];
  media: string[];
  sourcePosts: SourceRef[];
};
```

The `scripts/build-content.mjs` transformation reads `../profile_data/posts.json`, applies the curated project/story mapping, copies only selected media into `site/public/media`, and writes `site/src/content/generated.ts`. This preserves traceability while keeping messy scraper data out of components.

## Visual system

- Canvas: `#F6F5EF` warm ivory; surfaces: `#FFFFFF`; ink: `#151713`; muted ink: `#65685F`.
- Program accents: SabzKal `#3F6B39`, Qalam `#214C9A`, Khidmat-e-Khalaq `#8A3D4C`.
- Display type: a high-contrast serif for hero/editorial headlines.
- UI/body type: a clean sans serif with compact all-caps labels.
- Geometry: mostly square editorial frames with a few intentional rounded media corners; no pill-heavy UI.
- Imagery: real, imperfect, documentary, with a warm neutral treatment; no stock or AI-generated media in the product.
- Interaction: SVG paths, hover/focus state, active program color shift, subtle image crossfade.

## Responsive and accessibility requirements

- Design mobile compositions intentionally, not as a stacked desktop fallback.
- Keep all controls keyboard reachable with visible focus.
- Use meaningful image alt text from project/story titles.
- Use buttons for program selection and preserve the active selection in accessible text.
- Respect reduced-motion preferences.
- Use local media with `loading="lazy"` except for the hero image.
- Do not autoplay sound; videos are muted and optional.

## Out of scope for this milestone

Secondary routes, a real donation/payment flow, Supabase, authenticated volunteer applications, and a full admin system are not implemented yet. The content and component boundaries should make those additions possible later.
