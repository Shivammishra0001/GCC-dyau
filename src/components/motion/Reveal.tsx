import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from './motion-config'

type Tag = 'div' | 'section' | 'article' | 'li' | 'ul' | 'ol' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'figure' | 'header' | 'footer' | 'blockquote'

type RevealProps = {
  as?: Tag
  variants?: Variants
  delay?: number
  className?: string
  id?: string
  children?: ReactNode
}

/**
 * Once-only scroll reveal. Renders a plain element when the user prefers reduced motion.
 */
export function Reveal({ as = 'div', variants = fadeUp, delay = 0, className, id, children }: RevealProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} id={id}>
        {children}
      </Plain>
    )
  }
  const MotionTag = motion[as]
  return (
    <MotionTag className={className} id={id} initial="hidden" whileInView="visible" viewport={viewportOnce} variants={variants} transition={delay ? { delay } : undefined}>
      {children}
    </MotionTag>
  )
}

type StaggerProps = { as?: Tag; className?: string; stagger?: number; delay?: number; children: ReactNode }

/** Parent that staggers its `StaggerItem` children on first view. */
export function Stagger({ as = 'div', className, stagger = 0.08, delay = 0, children }: StaggerProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const MotionTag = motion[as]
  return (
    <MotionTag className={className} initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer(stagger, delay)}>
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ as = 'div', className, children, variants = fadeUp }: { as?: Tag; className?: string; children: ReactNode; variants?: Variants }) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const MotionTag = motion[as]
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  )
}
