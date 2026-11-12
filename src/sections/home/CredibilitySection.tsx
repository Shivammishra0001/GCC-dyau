import { Reveal, Stagger, StaggerItem } from '../../components/motion/Reveal'
import { Picture } from '../../components/ui/Picture'
import { credibility } from '../../content/homepage'

/**
 * Section 03 — brand credibility as an asymmetric bento grid.
 * Only commitments and capabilities; no figures, clients or claims of track record.
 */
export function CredibilitySection() {
  const t = credibility.tiles
  const text = (i: number, tone: 'light' | 'dark' | 'sand' = 'light', span = '') => (
    <StaggerItem key={t[i].term} as="li" className={`flex flex-col justify-end rounded-2xl p-6 md:p-7 ${span} ${tone === 'dark' ? 'bg-charcoal text-white' : tone === 'sand' ? 'bg-sand text-ink' : 'bg-white text-ink ring-1 ring-line'}`}>
      <span className="eyebrow text-orange">0{i + 1}</span>
      <h3 className="mt-3 font-display text-2xl">{t[i].term}</h3>
      <p className={`body-sm mt-2 ${tone === 'dark' ? 'text-white/70' : 'text-stone'}`}>{t[i].text}</p>
    </StaggerItem>
  )
  const img = (image: typeof credibility.images.partnership, span: string, label: string) => (
    <StaggerItem key={`img-${label}`} as="li" className={`hover-zoom relative overflow-hidden rounded-2xl bg-charcoal ${span}`}>
      <Picture image={image} sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.55)_100%)]" aria-hidden="true" />
      <span className="eyebrow absolute bottom-5 left-6 text-white">{label}</span>
    </StaggerItem>
  )

  return (
    <section className="section-y bg-offwhite" aria-labelledby="credibility-heading">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-orange">{credibility.eyebrow}</p>
          <h2 id="credibility-heading" className="display-lg mt-4 text-ink">
            {credibility.heading}
          </h2>
          <p className="lede mt-4 text-stone">{credibility.body}</p>
        </Reveal>
        <Stagger as="ul" className="mt-12 grid auto-rows-[minmax(11rem,auto)] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5" stagger={0.06}>
          {text(0, 'sand')}
          {img(credibility.images.partnership, 'col-span-2 min-h-56', 'Partnership')}
          {text(1, 'light')}
          {text(2, 'dark')}
          {text(3, 'light')}
          {img(credibility.images.quality, 'row-span-2 min-h-72', 'Quality')}
          {text(4, 'light')}
          {text(5, 'sand')}
          {img(credibility.images.global, 'col-span-2 min-h-56', 'Global perspective')}
          {text(6, 'light')}
          {text(7, 'dark')}
        </Stagger>
      </div>
    </section>
  )
}
