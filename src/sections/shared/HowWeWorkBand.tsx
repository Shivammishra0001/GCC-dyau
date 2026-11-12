import { Reveal, Stagger, StaggerItem } from '../../components/motion/Reveal'
import { howWeWork } from '../../content/homepage'

/**
 * Section 06 — bold but refined numbered process on a charcoal band.
 * Stands in for a statistics band until the business supplies verified figures.
 */
export function HowWeWorkBand({ id }: { id?: string }) {
  return (
    <section id={id} className="relative isolate scroll-mt-20 overflow-hidden bg-charcoal text-white" aria-labelledby="how-heading">
      <div className="blob -top-40 -right-24 size-[30rem] bg-orange/15" aria-hidden="true" />
      <div className="container-x section-y relative">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-rule text-orange">{howWeWork.eyebrow}</p>
            <h2 id="how-heading" className="display-lg mt-4">
              {howWeWork.heading}
            </h2>
          </div>
          <p className="lede text-white/70 lg:col-span-5">{howWeWork.body}</p>
        </Reveal>
        <Stagger as="ol" className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {howWeWork.steps.map((s, i) => (
            <StaggerItem as="li" key={s.step} className="flex flex-col bg-charcoal p-6 md:p-7">
              <span className="font-display text-5xl leading-none text-orange">0{i + 1}</span>
              <h3 className="mt-5 font-display text-2xl">{s.step}</h3>
              <p className="body-sm mt-2 text-white/70">{s.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
