import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal'
import { Seo } from '../components/ui/Seo'
import { hireTalentPage } from '../content/pages'
import { ContactDetails } from '../features/contact/ContactDetails'
import { HireTalentForm } from '../features/contact/HireTalentForm'

export default function HireTalentPage() {
  const p = hireTalentPage
  return (
    <>
      <Seo title="Hire Talent" description={p.body} path="/hire-talent" />
      <section className="bg-offwhite pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow eyebrow-rule text-orange">{p.eyebrow}</p>
              <h1 className="display-xl mt-4 text-ink">
                {p.headingLine1}
                <br />
                <em className="text-orange">{p.headingLine2}</em>
              </h1>
              <p className="lede mt-5 max-w-xl text-stone">{p.body}</p>
            </Reveal>
            <Stagger as="ul" className="mt-9 divide-y divide-line border-y border-line" stagger={0.08}>
              {p.reasons.map((r, i) => (
                <StaggerItem as="li" key={r.term} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4">
                  <span className="eyebrow pt-1 text-orange">0{i + 1}</span>
                  <div>
                    <h2 className="font-sans text-base font-semibold text-ink">{r.term}</h2>
                    <p className="body-sm mt-1 text-stone">{r.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-8" delay={0.1}>
              <ContactDetails />
            </Reveal>
            <Reveal className="mt-8" delay={0.15}>
              <Link to={p.jobSeekerLink.to} className="arrow-nudge inline-flex min-h-10 items-center gap-2 font-semibold text-ink">
                {p.jobSeekerLink.label} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1} className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <HireTalentForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
