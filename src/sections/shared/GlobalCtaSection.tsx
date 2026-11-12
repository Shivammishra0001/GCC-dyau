import { ParallaxImage } from '../../components/motion/ParallaxImage'
import { Reveal } from '../../components/motion/Reveal'
import { Button } from '../../components/ui/Button'
import { globalCta } from '../../content/homepage'

/** Section 10 — cinematic full-width global recruitment CTA with safe, subtle parallax. */
export function GlobalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white" aria-labelledby="global-cta-heading">
      <ParallaxImage image={globalCta.image} travel={14} scale={[1.08, 1]} imgClassName="opacity-75" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.2)_100%)]" aria-hidden="true" />
      <div className="container-x relative section-y">
        <Reveal className="max-w-2xl">
          <p className="eyebrow eyebrow-rule text-orange">{globalCta.eyebrow}</p>
          <h2 id="global-cta-heading" className="display-lg mt-4">
            {globalCta.heading}
          </h2>
          <p className="lede mt-5 max-w-xl text-white/85">{globalCta.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={globalCta.primary.to} size="lg" arrow>
              {globalCta.primary.label}
            </Button>
            <Button to={globalCta.secondary.to} size="lg" variant="outline-light">
              {globalCta.secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
