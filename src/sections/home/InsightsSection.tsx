import { Link } from 'react-router'
import { Reveal, Stagger, StaggerItem } from '../../components/motion/Reveal'
import { Button } from '../../components/ui/Button'
import { insightsSection } from '../../content/homepage'
import { insightsPage } from '../../content/pages'

/** Section 09 — magazine-style editorial teaser built from planned themes (no invented articles). */
export function InsightsSection() {
  return (
    <section className="section-y bg-offwhite" aria-labelledby="insights-heading">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-rule text-orange">{insightsSection.eyebrow}</p>
            <h2 id="insights-heading" className="display-lg mt-4 text-ink">
              {insightsSection.heading}
            </h2>
            <p className="lede mt-4 text-stone">{insightsSection.body}</p>
          </div>
          <Button to={insightsSection.cta.to} variant="outline" arrow className="shrink-0">
            {insightsSection.cta.label}
          </Button>
        </Reveal>
        <Stagger as="ul" className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {insightsPage.themes.map((t, i) => (
            <StaggerItem as="li" key={t.slug} className="group bg-white p-6 md:p-7">
              <Link to="/insights" className="flex h-full flex-col">
                <span className="eyebrow text-orange">Theme 0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl text-ink transition-colors group-hover:text-orange">{t.title}</h3>
                <p className="body-sm mt-2 flex-1 text-stone">{t.summary}</p>
                <span className="link-underline mt-5 inline-block text-sm font-semibold text-ink">Coming soon</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
