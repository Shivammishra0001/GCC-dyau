import { EnquiryForm } from '../../features/contact/EnquiryForm'
import { Reveal } from '../../components/motion/Reveal'
import { cn } from '../../lib/cn'

type Props = { heading?: string; body?: string; tone?: 'light' | 'dark'; id?: string; context?: string; defaultAudience?: 'candidate' | 'employer' }

/** The shared "Get In Touch" band that closes every inner page in the source. */
export function EnquirySection({ heading = 'Get In Touch', body, tone = 'light', id = 'get-in-touch', context, defaultAudience }: Props) {
  const dark = tone === 'dark'
  return (
    <section id={id} className={cn('section-y scroll-mt-24', dark ? 'bg-charcoal-2 text-white' : 'bg-offwhite text-ink')}>
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">{heading}</h2>
          {body && <p className={cn('lede mt-4', dark ? 'text-white/75' : 'text-stone')}>{body}</p>}
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <EnquiryForm tone={tone} context={context} defaultAudience={defaultAudience} />
        </Reveal>
      </div>
    </section>
  )
}
