# DYAU — Recruitment & Talent Solutions website

Premium React site for **Dyau (DY)**, a recruitment and talent-solutions consultancy founded in India and serving organisations worldwide. Built to the V2 brief (`DYAU_WEBSITE_AGENT_INSTRUCTIONS_V2.md`): original copy, licensed imagery, no competitor content, no invented facts.

## Stack
React 19 · TypeScript 7 · Vite 8 · **pnpm** (only package manager) · Tailwind CSS v4 (`@tailwindcss/vite`) with tokens in `src/styles/tokens.css` · Motion for React v14 · lucide-react · react-router v8 (data router, lazy routes) · self-hosted Instrument Serif + Manrope.

## Commands
```bash
pnpm install        # Node 24 / pnpm 12
pnpm dev            # http://localhost:5173
pnpm build          # tsc -b && vite build → dist/
pnpm preview        # serve the production build
pnpm lint           # oxlint
```

## Environment (`.env`, see `.env.example`)
`VITE_FORMS_ENDPOINT` (multipart POST for enquiry / hire-talent / job-application) · `VITE_NEWSLETTER_ENDPOINT` (JSON `{ email }`) · `VITE_JOBS_ENDPOINT` (JSON array of roles). Without them the forms show an honest "not connected" state and the job board shows its empty state. Nothing fakes success.

## Structure
```
src/app            router.tsx, App.tsx
src/components     ui/ forms/ navigation/ layout/ motion/ brand/
src/sections       home/ (one file per homepage section) · shared/ (bands reused by inner pages)
src/features       jobs/ · contact/ (forms, contact details, map)
src/pages          one component per route (composition only)
src/content        ALL copy and labels — edit text here, never in components
src/services       forms.ts, jobs.ts (endpoints + honest fallbacks)
src/hooks lib styles types
public/assets      hero/ sections/ services/ expertise/ pages/ graphics/
docs/              SITEMAP · CONTENT_SOURCE_MAP (originality) · BUSINESS_INFORMATION_REQUIRED · DESIGN_SYSTEM · MOTION_GUIDE · ASSET_INVENTORY · QA_REPORT
reference/         source PDFs and extracted text (structure reference only; not shipped)
```

## Common edits
- **Confirm or rename a service / sector:** `src/content/talent-solutions.ts`, `src/content/expertise.ts`, then the labels in `src/content/navigation.ts`.
- **Add contact details / socials:** fill `src/content/site.ts`; footer, contact and hire pages render them automatically.
- **Swap the hero image:** `hero.image` in `src/content/homepage.ts`.
- **Replace a photo:** drop a WebP with the same name into `public/assets/images/...` (see `docs/ASSET_INVENTORY.md`).
- **Replace the logo:** swap the SVG inside `LogoMark` in `src/components/brand/Logo.tsx`.
- **Publish roles:** connect `VITE_JOBS_ENDPOINT` or add entries to `src/content/jobs.ts`.
- **Add testimonials / case studies / team:** create a content file, a section and a route; the V1 components were removed to avoid shipping placeholders.

## Deployment
Static SPA — serve `dist/` with history fallback to `index.html` (`public/_redirects` included). Set `site.url` in `src/content/site.ts` to the production origin.
# GCC-dyau
