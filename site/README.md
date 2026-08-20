# Kaflah homepage

The public-facing Kaflah homepage is a Vite + React + TypeScript build inside
the cloned Instaloader repository.

## Run locally

```powershell
cd site
npm install
npm run content:build
npm run dev
```

The content transform reads `../profile_data/posts.json`, preserves Instagram
source URLs in the generated data, and copies only curated media from
`../profile_media/` into `public/media/`.

The public experience intentionally stays within verified scraped content. It
does not include a fake donation checkout, invented leadership, or unsupported
impact totals.
