import { PageHero } from '../components/layout/PageHero'
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal'
import { Button } from '../components/ui/Button'
import { Picture } from '../components/ui/Picture'
import { Seo } from '../components/ui/Seo'
import { intro } from '../content/homepage'
import { aboutPage } from '../content/pages'
import { EnquirySection } from '../sections/shared/EnquirySection'
import { HowWeWorkBand } from '../sections/shared/HowWeWorkBand'

export default function AboutPage() {
  const p = aboutPage
  return (
    <>
      <Seo title="About Us" description={p.body} path="/about-us" />
      <PageHero eyebrow={p.eyebrow} title={p.heading} body={p.body} cta={p.cta} image={p.hero} />

      <section className="section-y bg-white" aria-labelledby="story-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl bg-sand">
              <Picture image={intro.image} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="eyebrow eyebrow-rule text-orange">{p.story.eyebrow}</p>
            <h2 id="story-heading" className="display-lg mt-4 text-ink">
              {p.story.heading}
            </h2>
            <div className="lede mt-6 space-y-4 text-stone">
              {p.story.paragraphs.map((t) => (
                <p key={t.slice(0, 20)}>{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-offwhite" aria-labelledby="values-heading">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow eyebrow-rule text-orange">{p.values.eyebrow}</p>
            <h2 id="values-heading" className="display-lg mt-4 text-ink">
              {p.values.heading}
            </h2>
          </Reveal>
          <Stagger as="ul" className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {p.values.items.map((v, i) => (
              <StaggerItem as="li" key={v.term} className="bg-white p-6">
                <span className="eyebrow text-orange">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl text-ink">{v.term}</h3>
                <p className="body-sm mt-2 text-stone">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <Button to="/hire-talent" arrow>
              Work with us
            </Button>
          </Reveal>
        </div>
      </section>

      <HowWeWorkBand id="how-we-work" />
      <EnquirySection />
    </>
  )
}
