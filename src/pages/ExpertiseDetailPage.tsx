import { Link, useParams } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { expertiseAreas, getExpertise } from '../content/expertise'
import { EnquirySection } from '../sections/shared/EnquirySection'
import NotFoundPage from './NotFoundPage'

export default function ExpertiseDetailPage() {
  const { slug = '' } = useParams()
  const a = getExpertise(slug)
  if (!a) return <NotFoundPage />
  const others = expertiseAreas.filter((o) => o.slug !== a.slug)
  return (
    <>
      <Seo title={`${a.title} Recruitment`} description={a.summary} path={`/our-expertise/${a.slug}`} image={a.image.src} />
      <PageHero eyebrow="Our Expertise" title={a.title} body={a.summary} image={{ ...a.image, objectPosition: '50% 35%' }} size="compact" cta={{ label: 'Speak to a consultant', to: '#get-in-touch' }} />
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow eyebrow-rule text-orange">Overview</p>
              <p className="lede mt-5 text-ink">{a.intro}</p>
            </Reveal>
            <Reveal className="mt-10" delay={0.05}>
              <h2 className="font-display text-2xl text-ink">Practice areas</h2>
            </Reveal>
            <Stagger as="ul" className="mt-4 divide-y divide-line border-y border-line" stagger={0.05}>
              {a.roles.map((r, i) => (
                <StaggerItem as="li" key={r} className="flex items-baseline gap-5 py-4">
                  <span className="eyebrow w-8 shrink-0 text-orange">0{i + 1}</span>
                  <span className="font-display text-xl text-ink md:text-2xl">{r}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal className="rounded-2xl border border-line bg-offwhite p-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <p className="eyebrow text-orange">Other sectors</p>
              <ul className="mt-4 divide-y divide-line">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/our-expertise/${o.slug}`} className="link-underline block py-2.5 text-ink">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button to="/find-a-job" variant="outline" className="mt-6 w-full" arrow>
                Find a Job
              </Button>
              <Button to="/hire-talent" className="mt-3 w-full" arrow>
                Hire Talent
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>
      <EnquirySection context={`expertise:${a.slug}`} />
    </>
  )
}
