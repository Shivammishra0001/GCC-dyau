import { Link } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { Stagger, StaggerItem } from '../components/motion/Reveal'
import { ArrowCircle } from '../components/ui/ArrowCircle'
import { Picture } from '../components/ui/Picture'
import { Seo } from '../components/ui/Seo'
import { expertiseAreas, expertisePage } from '../content/expertise'
import { EnquirySection } from '../sections/shared/EnquirySection'

export default function OurExpertisePage() {
  const p = expertisePage
  return (
    <>
      <Seo title="Our Expertise" description={p.body} path="/our-expertise" />
      <PageHero eyebrow={p.eyebrow} title={p.heading} body={p.body} cta={p.cta} image={p.hero} />
      <section className="section-y bg-white" aria-label="Sectors">
        <div className="container-x">
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {expertiseAreas.map((a) => (
              <StaggerItem as="li" key={a.slug}>
                <Link to={`/our-expertise/${a.slug}`} className="hover-zoom group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-charcoal text-white">
                  <Picture image={a.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 h-full w-full" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.78)_100%)]" aria-hidden="true" />
                  <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                    <h2 className="font-display text-[1.7rem] leading-tight">{a.title}</h2>
                    <p className="body-sm mt-2 text-white/80">{a.summary}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="eyebrow text-white/80">{a.roles.length} practice areas</span>
                      <ArrowCircle className="arrow-nudge-diag group-hover:bg-white group-hover:text-ink" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <EnquirySection heading={p.enquiry.heading} body={p.enquiry.body} />
    </>
  )
}
