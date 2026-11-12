import { Reveal, Stagger, StaggerItem } from '../../components/motion/Reveal'
import { scaleIn } from '../../components/motion/motion-config'
import { Button } from '../../components/ui/Button'
import { Picture } from '../../components/ui/Picture'
import { intro } from '../../content/homepage'

/** Section 02 — spacious split introduction: editorial copy left, photograph right. */
export function IntroductionSection() {
  return (
    <section id="intro" className="section-y scroll-mt-20 bg-white" aria-labelledby="intro-heading">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <Stagger stagger={0.1}>
            <StaggerItem as="p" className="eyebrow eyebrow-rule text-orange">
              {intro.eyebrow}
            </StaggerItem>
            <StaggerItem as="h2" className="display-lg mt-5 text-ink">
              <span id="intro-heading">{intro.heading}</span>
            </StaggerItem>
            {intro.paragraphs.map((p) => (
              <StaggerItem as="p" key={p.slice(0, 24)} className="lede mt-5 max-w-xl text-stone">
                {p}
              </StaggerItem>
            ))}
            <StaggerItem as="ul" className="mt-8 divide-y divide-line border-y border-line">
              {intro.points.map((pt, i) => (
                <li key={pt.term} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4">
                  <span className="eyebrow pt-1 text-orange">0{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink">{pt.term}</h3>
                    <p className="body-sm mt-1 text-stone">{pt.text}</p>
                  </div>
                </li>
              ))}
            </StaggerItem>
            <StaggerItem className="mt-8">
              <Button to={intro.cta.to} variant="outline" arrow>
                {intro.cta.label}
              </Button>
            </StaggerItem>
          </Stagger>
        </div>
        <Reveal variants={scaleIn} className="relative lg:col-span-6">
          <div className="overflow-hidden rounded-3xl bg-sand">
            <Picture image={intro.image} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full lg:aspect-[3/4] xl:aspect-[4/5]" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-charcoal px-6 py-5 text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] lg:block">
            <p className="eyebrow text-orange">Origin</p>
            <p className="mt-1 font-display text-2xl">India</p>
            <p className="body-sm text-white/70">Serving organisations worldwide</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
