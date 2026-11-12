import type { ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import type { ImageAsset } from '../../types/content'

type Props = { image: ImageAsset; sizes?: string; priority?: boolean; className?: string } & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'alt' | 'width' | 'height' | 'className'>

/** Responsive <img> with dimensions reserved to avoid layout shift. */
export function Picture({ image, sizes, priority, className, ...rest }: Props) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes ?? '100vw' : undefined}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      className={cn('object-cover', className)}
      {...rest}
    />
  )
}
