import { Link } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { Stagger, StaggerItem } from '../components/motion/Reveal'
import { ArrowCircle } from '../components/ui/ArrowCircle'
import { Picture } from '../components/ui/Picture'
import { Seo } from '../components/ui/Seo'
import { talentSolutions, talentSolutionsPage } from '../content/talent-solutions'
import { EnquirySection } from '../sections/shared/EnquirySection'

export default function TalentSolutionsPage() {
  const p = talentSolutionsPage
  return (
    <>
      <Seo title="Talent Solutions" description={p.body} path="/talent-solutions" />
      <PageHero eyebrow={p.eyebrow} title={p.heading} body={p.body} cta={p.cta} image={p.hero} />
      <section className="section-y bg-white" aria-label="Talent solutions">
        <div className="container-x">
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {talentSolutions.map((s, i) => (
              <StaggerItem as="li" key={s.slug} className={i === 3 ? 'lg:col-start-1' : undefined}>
                <Link to={`/talent-solutions/${s.slug}`} className="hover-zoom group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal text-white">
                  <Picture image={s.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 h-full w-full" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.08)_40%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />
                  <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
                    <h2 className="font-display text-[1.7rem] leading-tight">{s.title}</h2>
                    <div className="flex items-end justify-between gap-4">
                      <p className="body-sm max-w-[16rem] text-white/85">{s.summary}</p>
                      <ArrowCircle className="arrow-nudge-diag shrink-0 group-hover:bg-white group-hover:text-ink" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem as="li" className="flex flex-col justify-between rounded-2xl bg-sand p-7">
              <div>
                <p className="eyebrow text-orange">Not sure which fits?</p>
                <h2 className="mt-3 font-display text-2xl text-ink">Describe the role and we will recommend an approach.</h2>
              </div>
              <Link to="/hire-talent" className="link-underline mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-ink">
                Send us a brief
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
      <EnquirySection heading={p.enquiry.heading} body={p.enquiry.body} defaultAudience="employer" />
    </>
  )
}
