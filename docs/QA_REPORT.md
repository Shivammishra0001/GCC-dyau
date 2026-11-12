# DYAU — QA Report (V2 rebuild, 2026-11-11)

Method: `tsc -b` + `vite build` → Playwright (Chrome 157, installed browser) sweep of all 14 routes at 1440×900 and 390×844 (plus earlier 1280/768/360 passes on the shared layout) checking console/page errors, failed requests, horizontal overflow, broken images, missing alt, heading count, small pointer targets and internal-link validity; full-page screenshots reviewed for hero brightness, section variety and footer height.

## Build & static
| Check | Result |
|---|---|
| `tsc -b` | PASS |
| `vite build` | PASS — main bundle 277 kB (86 kB gzip); motion 179 kB; router 98 kB; pages code-split |
| `oxlint` | PASS — 2 non-blocking fast-refresh warnings (`PageChrome.tsx` helper exports) |
| Competitor content scan | PASS — no "Aventus", no aventusglobal URLs, no PDF-derived images in `src/` or `public/` |

## Route sweep (dev server, after fixes)
| Check | Result |
|---|---|
| Console / page errors | PASS — 0 on all routes (duplicate React keys in the credibility grid were found and fixed) |
| Overflow at 390 / 1440 | PASS — 0 px |
| Broken images / missing alt | PASS — 0 / 0 |
| One `<h1>` per page | PASS |
| Internal links | PASS — 20 distinct paths, 0 unknown (no links to unbuilt routes) |
| Pointer targets | PASS — only the visually-hidden skip link flagged |

## Design review against V2 brief
| Requirement | Result |
|---|---|
| Hero 100vh, bright natural image, subject visible, restrained gradient | PASS — `min-h-[100svh]`; grade +6% brightness/−10% saturation; gradient confined to the left column and base; façade uncovered |
| Natural, compact typography | PASS — display scale reduced (h1 ≤ 76px), body 16px/1.6, lede ≤ 18px, eyebrow tracking 0.14em |
| Distinct section designs | PASS — split intro, bento credibility, horizontal pinned services, three offset sector panels, charcoal process band, editorial theme grid, cinematic CTA |
| Compact footer (target ≈220–300px) | PARTIAL — 335 px at 1440 (was 517). Four columns, slim newsletter inside the brand column, single legal line; remaining height is readable 14px link text. 799 px at 390 (two-column stacking). |
| Only verified business facts | PASS — see docs/BUSINESS_INFORMATION_REQUIRED.md; no numbers, clients, people, offices or contacts |
| No empty routes | PASS — 13 content routes + 404; unbuilt routes documented in docs/SITEMAP.md |
| Reduced motion | PASS — static hero, native carousel, no parallax (MotionConfig + hooks) |

## Interaction pass (carried over from V1 components, re-run on V2 routes)
Desktop dropdowns (hover/Enter/Escape) · mobile menu (focus, scroll lock, Escape, closes on navigation) · pinned horizontal Talent Solutions (progress, prev/next, keyboard focus scrolls) · job board URL filters and empty state · enquiry/hire forms validation, focus to first error, honest "not connected" state · newsletter not-connected state — all PASS.

## NOT VERIFIED
Real form submission (no endpoint) · Lighthouse scores · VoiceOver walkthrough · Safari/Firefox · Unsplash licence re-check per photo page (recorded for pre-launch in docs/ASSET_INVENTORY.md).

## Blocked / dependencies
Form, newsletter and jobs endpoints · approved DY logo SVG · contact details and social URLs · legal privacy text · confirmation of service line-up and sector framework · production domain.
