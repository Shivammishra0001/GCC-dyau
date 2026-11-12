# DYAU — Design System

Tokens live in `src/styles/tokens.css` (CSS custom properties) and are mirrored into Tailwind v4 via `@theme` in `src/styles/global.css`. Components never use raw hex values.

## Brand
- Brand mark: the owner-supplied circular teal-to-blue logo (transparent PNG), used **on its own everywhere** — no wordmark text. Source `reference/originals/dyau-logo-source.png`; derivatives `public/assets/brand/dyau-mark-{64,128,256,512}.png`, `public/favicon.png`, `public/apple-touch-icon.png`.
- `components/brand/Logo.tsx` renders the PNG with `srcSet`; header 48px (56px from `md`), footer 40px; minimum 32px; clear space 25% of height. No colour variants are needed on light or dark surfaces. Full spec: `docs/DESIGN_HANDOFF.md`.

## Colour
| Token | Value | Use |
|---|---|---|
| `--dy-black` / `text-black` | `#000000` | logo on light |
| `--dy-ink` / `ink` | `#0f0f0f` | body text, dark buttons |
| `--dy-charcoal` / `charcoal` | `#171717` | footer, Results band, image fallbacks |
| `--dy-charcoal-2` / `charcoal-2` | `#262626` | dark enquiry band, hover on dark buttons |
| `--dy-graphite` | `#3d3d3d` | reserved |
| `--dy-stone` / `stone` | `#6b6a66` | secondary text (4.9:1 on white) |
| `--dy-mist` / `mist` | `#a3a19b` | placeholders, inactive dots |
| `--dy-line` / `line` | `#e6e3dc` | hairlines, borders |
| `--dy-sand` / `sand` | `#f1eee7` | subtle hover fills, team card base |
| `--dy-offwhite` / `offwhite` | `#f7f6f3` | alternating light sections |
| `--dy-orange` / `orange` | `#ff570a` | CTAs, eyebrows, active states, rules |
| `--dy-orange-deep` / `orange-deep` | `#e04600` | CTA hover |
| `--dy-orange-soft` | `#ffe8dc` | reserved tint |

Orange is an accent only: buttons, eyebrow labels, progress/active indicators, small rules, stat numerals and the Hire Talent brief card (source design). Never a full-page fill.

Contrast: ink on white 19:1 · stone on white 4.9:1 · white on orange 3.1:1 (used only at ≥ 15px semibold / large text) · white on charcoal 15:1.

## Typography
- Display: **Instrument Serif** 400 (+ italic) — self-hosted via `@fontsource/instrument-serif`.
- Body / UI: **Manrope Variable** — self-hosted via `@fontsource-variable/manrope`. `font-display: swap` is set by the packages.
- Scale (fluid, `clamp`): `display-xl` 40–76px · `display-lg` 32–56px · `display-md` 28–40px · `display-sm` 22–28px · `lede` 16–18px · body 16px/1.6 · `body-sm` 15px · `eyebrow` 12px, 600, 0.14em tracking, uppercase. Paragraphs stay compact and natural (V2 §7).
- Headings use `text-wrap: balance`; paragraphs `text-wrap: pretty`. Line length is capped with `max-w-2xl/3xl`.

## Spacing & layout
- Container `max-width: 1320px`, gutters 16 / 32 / 48px at mobile / tablet / desktop (`.container-x`).
- Section rhythm: `.section-y` = clamp(64px, 9vw, 128px); `.section-y-sm` for compact bands.
- Header height `--header-h` 72px mobile / 80px desktop; page heroes offset content by `calc(var(--header-h) + 3rem)`.
- Radii: 6 / 12 / 20px and pill. Cards use `rounded-2xl` (16px) and `rounded-3xl` (24px) for feature media.
- Breakpoints (Tailwind defaults): 640, 768, 1024, 1280, 1536. Tested at 360, 390, 768, 1280, 1440.

## Components (`src/components`)
- `ui/Button` — variants `primary` (orange), `outline`, `outline-light`, `ghost`, `dark`, `white`; sizes `md` (44px) / `lg` (52px); optional trailing arrow with nudge micro-interaction. Renders `<Link>`, `<a>` or `<button>` automatically.
- `ui/Picture` — responsive `<img>` with `srcSet`/`sizes`, reserved dimensions, lazy by default.
- `ui/SectionHeading`, `ui/ArrowCircle`, `ui/Seo` (React 19 head hoisting), `ui/SocialIcons`, `ui/Pending`.
- `forms/Field` (`Input`, `Textarea`, `Select`), `forms/FileField`, `forms/FormStatus` — visible or visually-hidden labels, `aria-describedby` errors, live-region status.
- `navigation/Header` — overlay/solid modes, hover + keyboard dropdowns, mobile sheet with accordions, scroll lock, Escape handling.
- `layout/PageHero`, `layout/Footer`, `layout/SiteLayout`, `layout/PageChrome` (header overlay / footer card flags).
- `motion/*` — see `docs/MOTION_GUIDE.md`.

## Section layouts (homepage, V2)
Hero: full-screen bright photograph, gradient only behind copy · Intro: spacious split (copy + portrait photo + origin badge) · Credibility: asymmetric bento of value tiles and three photos · Talent Solutions: pinned horizontal gallery (desktop) / snap carousel (mobile) · Expertise: three offset photographic panels + chip row · How we work: charcoal five-step band (stands in for statistics until verified figures exist) · Insights: editorial theme grid · Global CTA: cinematic banner · Footer: compact charcoal with paper-cut skyline.

## Imagery rules
- Production images are WebP derivatives in `public/assets/images/**` with descriptive names; originals stay in `reference/`.
- Informative images carry alt text; decorative/background images use `alt=""`.
- Photography is Unsplash-licensed or owner-supplied only (docs/ASSET_INVENTORY.md); no competitor imagery.
- Hero image is graded bright and natural; overlays are confined to the copy column.
