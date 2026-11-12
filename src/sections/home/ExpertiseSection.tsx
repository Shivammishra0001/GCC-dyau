import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { Reveal, Stagger, StaggerItem } from '../../components/motion/Reveal'
import { Button } from '../../components/ui/Button'
import { Picture } from '../../components/ui/Picture'
import { expertiseAreas, homepageExpertiseOrder } from '../../content/expertise'
import { expertiseSection } from '../../content/homepage'

const panels = homepageExpertiseOrder.map((slug) => expertiseAreas.find((a) => a.slug === slug)!)
const others = expertiseAreas.filter((a) => !homepageExpertiseOrder.includes(a.slug))

/** Section 05 — three large photographic sector panels plus a line of further sectors. */
export function ExpertiseSection() {
  return (
    <section className="section-y bg-white" aria-labelledby="expertise-heading">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-rule text-orange">{expertiseSection.eyebrow}</p>
            <h2 id="expertise-heading" className="display-lg mt-4 text-ink">
              {expertiseSection.heading}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="lede text-stone">{expertiseSection.body}</p>
            <Button to={expertiseSection.cta.to} variant="ghost" arrow className="mt-4 font-semibold">
              {expertiseSection.cta.label}
            </Button>
          </div>
        </Reveal>

        <Stagger as="ul" className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {panels.map((a, i) => (
            <StaggerItem as="li" key={a.slug} className={i === 1 ? 'md:translate-y-8' : ''}>
              <Link to={`/our-expertise/${a.slug}`} className="hover-zoom group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-charcoal text-white">
                <Picture image={a.image} sizes="(min-width: 768px) 33vw, 100vw" className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.78)_100%)]" aria-hidden="true" />
                <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                  <h3 className="font-display text-[1.7rem] leading-tight">{a.title}</h3>
                  <p className="body-sm mt-2 max-w-[18rem] text-white/80">{a.summary}</p>
                  <span aria-hidden="true" className="mt-5 inline-flex size-11 items-center justify-center rounded-full bg-orange text-white transition-colors group-hover:bg-white group-hover:text-ink">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 md:mt-20">
          <span className="eyebrow mr-2 text-stone">Also</span>
          {others.map((a) => (
            <Link key={a.slug} to={`/our-expertise/${a.slug}`} className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-ink">
              {a.title}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
