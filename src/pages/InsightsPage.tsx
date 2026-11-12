import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal'
import { Seo } from '../components/ui/Seo'
import { insightsPage } from '../content/pages'
import { NewsletterForm } from '../features/contact/NewsletterForm'
import { EnquirySection } from '../sections/shared/EnquirySection'

/** Insights landing: editorial framing and planned themes. Article routes are added once pieces exist. */
export default function InsightsPage() {
  const p = insightsPage
  return (
    <>
      <Seo title="Insights" description={p.body} path="/insights" />
      <section className="bg-offwhite pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pb-20">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow eyebrow-rule text-orange">{p.eyebrow}</p>
            <h1 className="display-xl mt-4 text-ink">{p.heading}</h1>
            <p className="lede mt-5 text-stone">{p.body}</p>
          </Reveal>
          <Stagger as="ul" className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.08}>
            {p.themes.map((t, i) => (
              <StaggerItem as="li" key={t.slug} className="rounded-2xl border border-line bg-white p-7 md:p-8">
                <span className="eyebrow text-orange">Theme 0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">{t.title}</h2>
                <p className="body-sm mt-3 text-stone">{t.summary}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 rounded-2xl bg-charcoal p-7 text-white md:flex md:items-center md:justify-between md:p-9">
            <div className="max-w-md">
              <h2 className="font-display text-2xl">{p.subscribe.heading}</h2>
              <p className="body-sm mt-1 text-white/70">{p.subscribe.body}</p>
            </div>
            <div className="mt-5 md:mt-0">
              <NewsletterForm compact />
            </div>
          </Reveal>
        </div>
      </section>
      <EnquirySection />
    </>
  )
}
