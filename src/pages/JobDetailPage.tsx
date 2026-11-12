import { ArrowLeft, Clock, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { Reveal } from '../components/motion/Reveal'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { EnquiryForm } from '../features/contact/EnquiryForm'
import { loadJobs } from '../services/jobs'
import type { Job } from '../types/content'
import NotFoundPage from './NotFoundPage'

export default function JobDetailPage() {
  const { id = '' } = useParams()
  const [job, setJob] = useState<Job | null | undefined>(undefined)
  useEffect(() => {
    let alive = true
    loadJobs().then((jobs) => alive && setJob(jobs.find((j) => j.id === id) ?? null))
    return () => {
      alive = false
    }
  }, [id])
  if (job === undefined) return <div className="min-h-[60vh]" aria-busy="true" />
  if (!job) return <NotFoundPage />
  return (
    <>
      <Seo title={job.title} description={`${job.title} — ${job.location}. Apply through Dyau.`} path={`/find-a-job/${job.id}`} />
      <section className="bg-offwhite pt-[calc(var(--header-h)+2rem)] pb-14 md:pb-20">
        <div className="container-x">
          <Link to="/find-a-job" className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-stone hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden="true" /> All roles
          </Link>
          <Reveal className="mt-6 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow eyebrow-rule text-orange">Live role</p>
              <h1 className="display-lg mt-4 text-ink">{job.title}</h1>
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-stone">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-orange" aria-hidden="true" />
                  <dt className="sr-only">Location</dt>
                  <dd>{job.location}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-orange" aria-hidden="true" />
                  <dt className="sr-only">Posted</dt>
                  <dd>{job.posted}</dd>
                </div>
              </dl>
              {job.description ? (
                <div className="prose-dy mt-8 max-w-2xl whitespace-pre-line text-ink">{job.description}</div>
              ) : (
                <p className="mt-8 rounded-2xl border border-dashed border-line bg-white p-5 text-stone">The full description for this role is available from the consultant. Apply below and we will share it.</p>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="#apply" size="lg" arrow>
                  Apply for this role
                </Button>
              </div>
            </div>
            <aside id="apply" className="scroll-mt-28 rounded-3xl bg-white p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)] lg:col-span-5 lg:p-8">
              <h2 className="display-sm text-ink">Apply</h2>
              <p className="body-sm mt-2 text-stone">Attach your CV and a consultant will be in touch.</p>
              <EnquiryForm className="mt-6" defaultAudience="candidate" context={`job:${job.id} ${job.title}`} />
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
