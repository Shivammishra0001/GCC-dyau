import type { Transition, Variants } from 'motion/react'

/**
 * Shared motion language for the whole site. Components import these instead of
 * declaring their own durations/easings (see docs/MOTION_GUIDE.md).
 */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const durations = {
  fast: 0.18,
  base: 0.5,
  slow: 0.9,
}

export const transition: Transition = { duration: durations.base, ease: easeOut }

/** Default whileInView trigger: fire once when ~20% visible, a little before the fold. */
export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -8% 0px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition },
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.slow, ease: easeOut } },
}

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: durations.slow, ease: easeOut } },
}
