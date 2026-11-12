import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { ArrowCircle } from '../../components/ui/ArrowCircle'
import { Picture } from '../../components/ui/Picture'
import { Reveal } from '../../components/motion/Reveal'
import { talentSolutionsSection } from '../../content/homepage'
import { talentSolutions } from '../../content/talent-solutions'
import { cn } from '../../lib/cn'
import type { TalentSolution } from '../../types/content'

const cards = talentSolutions

/**
 * Section 4 — "Talent Solutions" image cards.
 * Desktop (≥1024px, motion allowed): sticky section where vertical scroll drives horizontal translation
 * (Motion useScroll + useTransform). Mobile / reduced-motion: native horizontal scroll-snap carousel.
 */
export function TalentSolutionsSection() {
  const reduce = useReducedMotion()
  const desktop = useMediaQuery('(min-width: 1024px)')
  const pinned = desktop && !reduce
  return (
    <section className="bg-offwhite" aria-labelledby="talent-solutions-heading">
      {pinned ? <PinnedTrack /> : <NativeTrack />}
    </section>
  )
}

function Heading({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn('container-x flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        <p className="eyebrow eyebrow-rule text-orange">{talentSolutionsSection.eyebrow}</p>
        <h2 id="talent-solutions-heading" className="display-lg mt-4 text-ink">
          {talentSolutionsSection.heading}
        </h2>
        <p className="lede mt-4 text-stone">{talentSolutionsSection.body}</p>
      </div>
      {children}
    </div>
  )
}

function Card({ s, index, onFocus }: { s: TalentSolution; index: number; onFocus?: (i: number) => void }) {
  return (
    <Link
      to={`/talent-solutions/${s.slug}`}
      onFocus={() => onFocus?.(index)}
      className="hover-zoom group relative block aspect-[4/5] w-[78vw] max-w-[26rem] shrink-0 snap-start overflow-hidden rounded-2xl bg-charcoal text-white focus-visible:outline-offset-4 sm:w-[22rem] lg:w-[24rem] xl:w-[26rem]"
    >
      <Picture image={s.image} sizes="(min-width: 1280px) 26rem, (min-width: 640px) 22rem, 78vw" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.08)_40%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[1.6rem] leading-tight md:text-[1.85rem]">{s.title}</h3>
          <span className="eyebrow mt-2 text-white/70">0{index + 1}</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <p className="body-sm max-w-[16rem] text-white/85">{s.summary}</p>
          <ArrowCircle className="arrow-nudge-diag group-hover:bg-white group-hover:text-ink" />
        </div>
      </div>
    </Link>
  )
}

/* --- Mobile / reduced-motion: native swipe carousel with working controls --- */
function NativeTrack() {
  const ref = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)

  const scrollTo = (i: number) => {
    const el = ref.current
    if (!el) return
    const child = el.children[i] as HTMLElement | undefined
    child?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[]
      const left = el.scrollLeft
      let best = 0
      children.forEach((c, i) => {
        if (Math.abs(c.offsetLeft - el.offsetLeft - left) < Math.abs(children[best].offsetLeft - el.offsetLeft - left)) best = i
      })
      setActive(best)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="section-y">
      <Reveal>
        <Heading>
          <Controls onPrev={() => scrollTo(Math.max(0, active - 1))} onNext={() => scrollTo(Math.min(cards.length - 1, active + 1))} />
        </Heading>
      </Reveal>
      <ul ref={ref} className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4 md:gap-6" aria-label="Talent solutions">
        {cards.map((s, i) => (
          <li key={s.slug} className="shrink-0">
            <Card s={s} index={i} />
          </li>
        ))}
        <li aria-hidden="true" className="w-px shrink-0" />
      </ul>
      <Progress value={(active + 1) / cards.length} />
    </div>
  )
}

/* --- Desktop: sticky horizontal scroll driven by vertical scroll --- */
function PinnedTrack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [distance, setDistance] = useState(0)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })
  const x = useTransform(smooth, [0, 1], [0, -distance])
  const [progress, setProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v))

  /** Scroll the page so that card i is in view (used by controls and keyboard focus). */
  const goTo = (i: number) => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track || distance === 0) return
    const card = track.children[i] as HTMLElement
    const target = Math.min(distance, Math.max(0, card.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft)))
    const ratio = target / distance
    const top = section.offsetTop + ratio * (section.offsetHeight - window.innerHeight)
    window.scrollTo({ top, behavior: 'smooth' })
  }
  const activeIndex = Math.round(progress * (cards.length - 1))

  return (
    <div ref={sectionRef} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
        <Heading>
          <Controls onPrev={() => goTo(Math.max(0, activeIndex - 1))} onNext={() => goTo(Math.min(cards.length - 1, activeIndex + 1))} />
        </Heading>
        <motion.ul ref={trackRef} style={{ x }} className="mt-10 flex w-max gap-6 pr-[var(--gutter)] pl-[var(--gutter)] will-change-transform" aria-label="Talent solutions">
          {cards.map((s, i) => (
            <li key={s.slug} className="shrink-0">
              <Card s={s} index={i} onFocus={goTo} />
            </li>
          ))}
        </motion.ul>
        <Progress value={progress} />
      </div>
    </div>
  )
}

function Controls({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const btn = 'inline-flex size-12 items-center justify-center rounded-full border border-ink/70 text-ink transition-colors hover:bg-ink hover:text-white'
  return (
    <div className="flex items-center gap-3">
      <button type="button" className={btn} onClick={onPrev} aria-label="Previous talent solution">
        <ArrowLeft className="size-5" aria-hidden="true" />
      </button>
      <button type="button" className={btn} onClick={onNext} aria-label="Next talent solution">
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>
    </div>
  )
}

function Progress({ value }: { value: number }) {
  return (
    <div className="container-x mt-8">
      <div className="h-px w-full bg-line" aria-hidden="true">
        <div className="h-px bg-orange transition-[width] duration-150" style={{ width: `${Math.max(8, Math.min(100, value * 100))}%` }} />
      </div>
    </div>
  )
}
