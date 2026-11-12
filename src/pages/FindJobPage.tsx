import { Reveal } from '../components/motion/Reveal'
import { Seo } from '../components/ui/Seo'
import { jobsPage } from '../content/pages'
import { EnquiryForm } from '../features/contact/EnquiryForm'
import { JobSearch } from '../features/jobs/JobSearch'

export default function FindJobPage() {
  return (
    <>
      <Seo title="Find a Job" description={jobsPage.body} path="/find-a-job" />
      <section className="bg-offwhite pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pb-20">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow eyebrow-rule text-orange">{jobsPage.eyebrow}</p>
            <h1 className="display-xl mt-4 text-ink">{jobsPage.heading}</h1>
            <p className="lede mt-5 text-stone">{jobsPage.body}</p>
          </Reveal>
          <Reveal className="mt-10" delay={0.1}>
            <JobSearch />
          </Reveal>
        </div>
      </section>
      <section id="register" className="section-y scroll-mt-24 bg-charcoal-2 text-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-lg">{jobsPage.register.heading}</h2>
            <p className="lede mt-4 text-white/75">{jobsPage.register.body}</p>
          </Reveal>
          <Reveal className="mt-10" delay={0.1}>
            <EnquiryForm tone="dark" defaultAudience="candidate" context="register-interest" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
