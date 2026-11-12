import { Link } from 'react-router'
import { cn } from '../../lib/cn'

type Props = {
  /** 'black' on light surfaces (navy mark); 'white' on dark/photographic surfaces (same mark rendered white). */
  tone?: 'black' | 'white'
  className?: string
  linkTo?: string | null
  /** Rendered height in px (width follows the asset's ratio). */
  height?: number
}

/**
 * Dyau brand mark — the owner's line mark, cut out to a transparent PNG.
 * One asset everywhere (public/assets/brand/dyau-mark-*.png). On dark surfaces the same
 * file is rendered white with a CSS filter, so the shape never changes between placements.
 * Source: reference/originals/dyau-logo-mark-source.jpg
 */
export function Logo({ tone = 'black', className, linkTo = '/', height = 44 }: Props) {
  const img = (
    <img
      src="/assets/brand/dyau-mark-256.png"
      srcSet="/assets/brand/dyau-mark-128.png 128w, /assets/brand/dyau-mark-256.png 256w, /assets/brand/dyau-mark-512.png 512w, /assets/brand/dyau-mark-1024.png 1024w"
      sizes={`${Math.round(height * 1.1)}px`}
      alt="Dyau"
      width={Math.round(height * 1.02)}
      height={height}
      decoding="async"
      className={cn('block w-auto select-none transition-[filter] duration-500', tone === 'white' && 'brightness-0 invert', className)}
      style={/\bh-/.test(className ?? '') ? undefined : { height }}
    />
  )
  if (!linkTo) return img
  return (
    <Link to={linkTo} aria-label="Dyau — home" className="inline-flex shrink-0 items-center rounded-sm">
      {img}
    </Link>
  )
}
