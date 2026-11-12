import type { ReactNode } from 'react'
import { ParallaxImage } from '../motion/ParallaxImage'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import type { ImageAsset } from '../../types/content'
import { useOverlayHeader } from './PageChrome'

type Props = {
  eyebrow?: string
  title: ReactNode
  body?: string
  cta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  image: ImageAsset & { objectPosition?: string }
  size?: 'default' | 'compact'
  align?: 'left' | 'center'
  children?: ReactNode
  titleClassName?: string
}

/** Dark photographic page hero shared by inner pages. Switches the header to overlay mode. */
export function PageHero({ eyebrow, title, body, cta, secondaryCta, image, size = 'default', align = 'left', children, titleClassName }: Props) {
  useOverlayHeader()
  return (
    <section className={cn('relative isolate flex items-end overflow-hidden bg-charcoal text-white', size === 'compact' ? 'min-h-[52svh] md:min-h-[56svh]' : 'min-h-[66svh] md:min-h-[72svh]')}>
      <ParallaxImage image={image} priority travel={10} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />
      <div className={cn('container-x relative pt-[calc(var(--header-h)+3rem)] pb-14 md:pb-20', align === 'center' && 'text-center')}>
        <Stagger className={cn('max-w-3xl', align === 'center' && 'mx-auto')} stagger={0.1}>
          {eyebrow && (
            <StaggerItem as="p" className={cn('eyebrow mb-5 text-orange', align === 'left' && 'eyebrow-rule')}>
              {eyebrow}
            </StaggerItem>
          )}
          <StaggerItem as="h1" className={cn('display-xl', titleClassName)}>
            {title}
          </StaggerItem>
          {body && (
            <StaggerItem as="p" className="lede mt-6 max-w-2xl text-white/85">
              {body}
            </StaggerItem>
          )}
          {(cta || secondaryCta) && (
            <StaggerItem className={cn('mt-8 flex flex-wrap gap-3', align === 'center' && 'justify-center')}>
              {cta && (
                <Button to={cta.to} size="lg" arrow>
                  {cta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} size="lg" variant="outline-light" arrow>
                  {secondaryCta.label}
                </Button>
              )}
            </StaggerItem>
          )}
        </Stagger>
        {children && <Reveal className="mt-10">{children}</Reveal>}
      </div>
    </section>
  )
}
