import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { preload } from 'react-dom'
import { useOverlayHeader } from '../../components/layout/PageChrome'
import { easeOut } from '../../components/motion/motion-config'
import { Button } from '../../components/ui/Button'
import { hero, heroImages } from '../../content/homepage'

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut, delay: 0.1 + i * 0.11 } }),
}

/**
 * Section 01 — full-screen cinematic hero.
 * Image is kept bright and natural: a light gradient only behind the copy (left) and a soft base
 * gradient for the CTAs; the architectural subject on the right stays uncovered.
 */
export function HeroSection() {
  useOverlayHeader()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const image = heroImages[hero.image]
  preload(image.src, { as: 'image', fetchPriority: 'high', imageSrcSet: image.srcSet, imageSizes: '100vw' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-sand text-white" aria-labelledby="hero-heading">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.img
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          alt=""
          width={image.width}
          height={image.height}
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover will-change-transform"
          style={reduce ? { objectPosition: image.objectPosition } : { objectPosition: image.objectPosition, y: imgY, scale: imgScale }}
          initial={reduce ? false : { scale: 1.05, opacity: 0.7 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: easeOut }}
        />
      </div>
      {/* light, left-weighted gradient only: keeps copy legible without shading the façade */}
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(8,6,6,0.66)_0%,rgba(8,6,6,0.46)_40%,rgba(8,6,6,0.12)_80%,rgba(8,6,6,0)_100%)] lg:w-[72%] lg:bg-[linear-gradient(90deg,rgba(8,6,6,0.5)_0%,rgba(8,6,6,0.3)_26%,rgba(8,6,6,0)_52%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,rgba(8,6,6,0)_0%,rgba(8,6,6,0.38)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[var(--header-h)] bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0))]" aria-hidden="true" />

      <motion.div className="relative w-full px-[clamp(1rem,4vw,4.5rem)] pt-[calc(var(--header-h)+3rem)] pb-14 md:pb-20" style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
        <div className="max-w-2xl">
          <motion.p className="eyebrow eyebrow-rule text-white/90" custom={0} variants={item} initial={reduce ? false : 'hidden'} animate="visible">
            {hero.eyebrow}
          </motion.p>
          <motion.h1 id="hero-heading" className="display-xl mt-5 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]" custom={1} variants={item} initial={reduce ? false : 'hidden'} animate="visible">
            {hero.headingLines.map((line, i) => (
              <span key={line} className={i === hero.headingLines.length - 1 ? 'italic text-white/95' : 'block'}>
                {line}{' '}
              </span>
            ))}
          </motion.h1>
          <motion.p className="lede mt-6 max-w-xl text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]" custom={2} variants={item} initial={reduce ? false : 'hidden'} animate="visible">
            {hero.body}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" custom={3} variants={item} initial={reduce ? false : 'hidden'} animate="visible">
            <Button to={hero.primaryCta.to} size="lg" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} size="lg" variant="outline-light" arrow>
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <a href="#intro" className="absolute right-[calc(var(--gutter)-0.75rem)] bottom-6 hidden min-w-12 flex-col items-center gap-3 px-3 py-2 text-white/80 hover:text-white md:flex" aria-label="Scroll to introduction">
        <span className="eyebrow [writing-mode:vertical-rl]">Scroll</span>
        <span className="scroll-cue relative block h-12 w-px overflow-hidden bg-white/25" aria-hidden="true" />
      </a>
    </section>
  )
}
