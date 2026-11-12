# DYAU — Motion Guide

Primary engine: **Motion for React** (`motion/react`, v14). GSAP is installed but intentionally unused — no scene needed timeline pinning that Motion's `useScroll` could not provide. Do not animate the same element with both.

## Shared language (`src/components/motion/motion-config.ts`)
- Easing `easeOut = [0.22, 1, 0.36, 1]`; durations fast 0.18s · base 0.5s · slow 0.9s.
- Variants `fadeUp` (24px rise), `fade`, `scaleIn` (0.96→1), `staggerContainer(stagger, delay)`.
- Viewport trigger `viewportOnce`: fires once at 20% visibility, slightly before the fold.
- `MotionConfig reducedMotion="user"` wraps the app; every primitive also checks `useReducedMotion()` and renders a static element.

## Primitives
| Primitive | Use | Reduced motion |
|---|---|---|
| `Reveal` | once-only whileInView fade/rise for a block | static |
| `Stagger` + `StaggerItem` | lists/grids, 40–140ms per item | static |
| `ParallaxImage` | scroll-linked background translate + scale (`useScroll` + `useTransform`), transform-only | static image |

## Motion map
| Area | Implementation | Owner |
|---|---|---|
| Hero | staggered eyebrow → h1 → body → CTAs (0.11s steps); image entrance scale 1.05→1; scroll-linked image y 0→14% / scale 1→1.08; copy drifts and fades with `scrollYProgress` | `sections/home/HeroSection.tsx` |
| Trust strip / Intro | once-only stagger; intro image `scaleIn` | `TrustStrip.tsx`, `IntroductionSection.tsx` |
| Talent Solutions | **desktop ≥1024px & motion allowed**: section height = `100vh + (trackWidth − viewportWidth)`; sticky inner; `x = useTransform(spring(scrollYProgress), [0,1], [0, −distance])`; progress bar bound to real progress; prev/next buttons and card focus scroll the window to the matching position so keyboard users never land on an off-screen card. **mobile / reduced motion**: native `overflow-x: auto` + `scroll-snap`, prev/next use `scrollIntoView` | `TalentSolutionsSection.tsx` |
| Expertise | staggered card reveal; CSS hover zoom | `ExpertiseSection.tsx` |
| How we work | staggered step reveal; one low-contrast drifting blob (CSS keyframes, off under reduced motion) | `shared/HowWeWorkBand.tsx` |
| Credibility / Insights | staggered grid reveal, restrained hover zoom (CSS `.hover-zoom`, 900ms) | sections |
| Global CTA / page heroes | `ParallaxImage` 10–14% travel | `shared/GlobalCtaSection.tsx`, `layout/PageHero.tsx` |
| Footer | single opacity reveal | `layout/Footer.tsx` |
| Header | CSS colour/background transition on scroll; dropdown opacity/translate 200ms | `navigation/Header.tsx` |
| Buttons / links | CSS: colour transitions, arrow nudge, underline grow | `styles/motion.css`, `ui/Button.tsx` |

## Rules
1. Animate only `transform` and `opacity` on scroll; no layout properties per frame.
2. One or two decorative blobs max, always `pointer-events: none`, blurred and low-contrast.
3. Nothing blocks navigation: route changes are immediate; reveals do not gate interactivity.
4. Horizontal section never traps vertical scrolling and has a clear exit (sticky container releases at the end).
5. Reduced motion removes parallax, pinning, count-up and large translations; hover zooms are disabled in `motion.css`.
6. New animations must use the shared variants/durations above rather than inline values.
