import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type CSSProperties } from 'react'
import { cn } from '../../lib/cn'
import type { ImageAsset } from '../../types/content'

type Props = {
  image: ImageAsset & { objectPosition?: string }
  /** Total vertical travel in % of the image height (default 12). */
  travel?: number
  /** Scale range while scrolling (default from 1.08 to 1). */
  scale?: [number, number]
  priority?: boolean
  className?: string
  imgClassName?: string
  sizes?: string
}

/**
 * Scroll-linked background image: subtle translate + scale driven by useScroll/useTransform.
 * Reduced motion -> static image. Transform-only, so it stays on the compositor.
 */
export function ParallaxImage({ image, travel = 12, scale = [1.08, 1], priority, className, imgClassName, sizes = '100vw' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${travel}%`])
  const s = useTransform(scrollYProgress, [0, 1], scale)
  const style: CSSProperties = { objectPosition: image.objectPosition }

  return (
    <div ref={ref} className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden={image.alt === '' ? true : undefined}>
      <motion.img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.srcSet ? sizes : undefined}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
        className={cn('h-full w-full object-cover will-change-transform', imgClassName)}
        style={reduce ? style : { ...style, y, scale: s }}
      />
    </div>
  )
}
