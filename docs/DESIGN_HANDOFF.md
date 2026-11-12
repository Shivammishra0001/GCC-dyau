# Handoff Spec: Dyau brand mark, header and homepage hero

### Overview
The owner-supplied Dyau logo (a circular teal-to-blue mark with a "Q"-style node, transparent PNG) is the only brand identifier on the site. It is used alone everywhere: no wordmark text, no typographic "DY" lockup. The hero is the first thing every visitor sees, so its copy must stay readable over the bright Hawa Mahal photograph on every viewport.

### Layout
- Container `max-width: 1320px`, gutters 16 / 32 / 48px (mobile / tablet / desktop) via `.container-x`.
- Header height `--header-h` 72px mobile, 80px desktop; fixed, overlays the hero and becomes solid white after 24px of scroll.
- Hero `min-height: 100svh`, content bottom-aligned with `padding-top: calc(var(--header-h) + 3rem)`, copy column `max-width: 42rem`.

### Design Tokens Used
| Token | Value | Usage |
|---|---|---|
| `--dy-orange` / `orange` | #FF570A | Primary CTA, eyebrow rule, active states |
| `--dy-ink` / `ink` | #0F0F0F | Header text when solid |
| `--dy-charcoal` / `charcoal` | #171717 | Footer background |
| `--dy-sand` | #F1EEE7 | Hero fallback background while the image loads |
| `--font-display` | Instrument Serif 400 | Hero h1 (`.display-xl` 40–76px fluid) |
| `--font-sans` | Manrope Variable | Nav, eyebrow, body (`.lede` 16–18px) |
| `--header-h` | 72 / 80px | Header and hero offset |
| `--ease-out` | cubic-bezier(0.22,1,0.36,1) | All entrance motion |

### Logo asset
| File | Size | Use |
|---|---|---|
| `public/assets/brand/dyau-logo.png` | 369×352 (trimmed, 4% padding, transparent) | Master derivative |
| `dyau-logo-{64,128,256,512}.png` | width-capped | `srcSet` for header/footer (`Logo` picks 128–512 by rendered size) |
| `public/favicon.png` | 64×64 transparent | Browser tab |
| `public/apple-touch-icon.png` | 180×180 on white | iOS home screen |
| `dyau-logo-og-512.png` | 512×512 on white | Social/OG fallback if needed |
| `reference/originals/dyau-logo-source.png` | 522×478 | Untouched source (not shipped) |

Rules: minimum render height 32px; keep clear space equal to 25% of the mark's height on all sides; never recolour, outline or place on a competing gradient; the mark sits on light (header solid, white sections) and dark (overlay header, footer) surfaces without variants because it carries its own colours. Replace the master and regenerate sizes if a higher-resolution original is supplied (the current source limits crisp rendering to ~96px at 2× DPR, which covers all current placements).

### Components
| Component | Variant / props | Notes |
|---|---|---|
| `components/brand/Logo` | `height` (px, default 40), `linkTo` (default `/`, `null` for non-link), `tone` (accepted, ignored) | Renders `<img alt="Dyau">` inside a `<Link aria-label="Dyau — home">`. Header: `height={44}`, 48px from `md`. Footer: `height={40}`. |
| `navigation/Header` | overlay / solid | Overlay = transparent, white text over hero; solid = white/92 + blur + hairline. Logo unchanged between modes. |
| `sections/home/HeroSection` | — | Image, three gradients, staggered copy, two CTAs, scroll cue |
| `ui/Button` | `primary`, `outline-light`, size `lg`, `arrow` | Hero CTAs |

### Hero readability (what changed)
| Layer | Spec |
|---|---|
| Left copy gradient | `linear-gradient(90deg, rgba(8,6,6,.82) 0%, rgba(8,6,6,.6) 32%, rgba(8,6,6,.22) 58%, transparent 78%)`, width 100% on mobile, 78% from `lg` |
| Base gradient | bottom 55% of hero, transparent → rgba(8,6,6,.62) |
| Header shade | top `--header-h`, rgba(0,0,0,.28) → transparent (keeps white nav legible) |
| Text shadow | h1 `0 2px 28px rgba(0,0,0,.55)`; eyebrow/body `0 1px 12–16px rgba(0,0,0,.5)`; body/eyebrow at 100% white |
| Image grade | +6% brightness, −10% saturation, −3% contrast (pre-baked WebP) so the façade stays bright and natural outside the copy column |

Why: the photograph is intentionally bright (V2 brief §6), so contrast comes from a localised gradient and shadows rather than a full-frame darkening.

### States and Interactions
| Element | State | Behaviour |
|---|---|---|
| Logo link | Hover | No visual change (brand mark is not decorated); cursor pointer |
| Logo link | Focus-visible | 2px orange outline, 3px offset (global rule) |
| Header | scrollY > 24px | Transparent → white/92 + backdrop blur + hairline, 500ms colour transition; text white → ink |
| Mobile menu | Open | Panel below header, body scroll locked, focus moves into panel, Escape closes, closes on navigation |
| Primary CTA | Hover / active | orange → orange-deep; `scale(.98)` on press; arrow nudges 4px |
| Secondary CTA | Hover | white/80 border → white fill, ink text |

### Responsive Behaviour
| Breakpoint | Changes |
|---|---|
| ≥1280px | Logo 48px; nav inline with dropdowns; hero copy column 42rem; copy gradient 78% width |
| 768–1279px | Logo 48px; nav collapses to menu button below 1024px; hero copy wraps to 3–4 lines |
| <768px | Logo 44px; header 72px; copy gradient full width; h1 ≈40px; CTAs wrap to two rows; scroll cue hidden |

### Edge Cases
- **Logo fails to load**: `alt="Dyau"` renders as text; link still navigates home.
- **Slow image**: hero background is `--dy-sand` with white copy readable against the gradients once painted; image preloaded with `fetchpriority="high"`.
- **Reduced motion**: no entrance or scroll-linked transforms; static image and copy.
- **Very long headline translation**: `text-wrap: balance`, column capped at 42rem, h1 clamps down to 40px.

### Animation / Motion
| Element | Trigger | Animation | Duration | Easing |
|---|---|---|---|---|
| Hero image | Mount | scale 1.05→1, opacity .7→1 | 1400ms | ease-out expo |
| Eyebrow → h1 → body → CTAs | Mount | y 22→0, opacity 0→1, 110ms stagger | 750ms each | ease-out expo |
| Hero image | Scroll 0→100% of hero | y 0→14%, scale 1→1.08 | scroll-linked | linear mapping |
| Hero copy | Scroll 0→55% | y 0→26%, opacity 1→0 | scroll-linked | linear mapping |
| Header background | scrollY > 24 | colour/blur | 500ms | default |

### Accessibility Notes
- Focus order: skip link → logo → nav items (dropdown trigger buttons after each parent link) → Hire Talent → mobile menu button.
- Logo `<img alt="Dyau">` inside a link labelled "Dyau — home"; no duplicate text.
- Nav dropdown buttons expose `aria-expanded` / `aria-controls`; Escape closes and returns focus.
- Hero h1 is the only `<h1>`; section labelled by `aria-labelledby="hero-heading"`.
- Contrast after the change: white on the copy-column gradient ≥ 7:1 at the h1 position (measured on the darkest third); eyebrow 12px uses 600 weight and shadow.
