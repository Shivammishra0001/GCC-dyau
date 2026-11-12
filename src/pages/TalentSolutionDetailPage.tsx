import { Link, useParams } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { getTalentSolution, talentSolutions } from '../content/talent-solutions'
import { EnquirySection } from '../sections/shared/EnquirySection'
import NotFoundPage from './NotFoundPage'

export default function TalentSolutionDetailPage() {
  const { slug = '' } = useParams()
  const s = getTalentSolution(slug)
  if (!s) return <NotFoundPage />
  const others = talentSolutions.filter((o) => o.slug !== s.slug)
  return (
    <>
      <Seo title={s.title} description={s.summary} path={`/talent-solutions/${s.slug}`} image={s.image.src} />
      <PageHero eyebrow="Talent Solutions" title={s.title} body={s.summary} image={{ ...s.image, objectPosition: '50% 35%' }} size="compact" cta={{ label: 'Discuss a role', to: '#get-in-touch' }} />
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow eyebrow-rule text-orange">Overview</p>
              <p className="lede mt-5 text-ink">{s.intro}</p>
            </Reveal>
            <Reveal className="mt-10" delay={0.05}>
              <h2 className="font-display text-2xl text-ink">Best suited to</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.bestFor.map((b) => (
                  <li key={b} className="flex gap-3 rounded-xl bg-offwhite p-4 text-[0.9375rem] text-ink">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-12" delay={0.05}>
              <h2 className="font-display text-2xl text-ink">How we run it</h2>
            </Reveal>
            <Stagger as="ol" className="mt-4 divide-y divide-line border-y border-line" stagger={0.06}>
              {s.howWeWork.map((h, i) => (
                <StaggerItem as="li" key={h.step} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                  <span className="font-display text-2xl text-orange">0{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink">{h.step}</h3>
                    <p className="body-sm mt-1 text-stone">{h.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal className="rounded-2xl border border-line bg-offwhite p-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <p className="eyebrow text-orange">Other solutions</p>
              <ul className="mt-4 divide-y divide-line">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/talent-solutions/${o.slug}`} className="link-underline block py-2.5 text-ink">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button to="/hire-talent" className="mt-6 w-full" arrow>
                Hire Talent
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>
      <EnquirySection heading="Discuss a role" body="Tell us what you are hiring for and we will recommend the right approach." defaultAudience="employer" context={`talent-solution:${s.slug}`} />
    </>
  )
}
