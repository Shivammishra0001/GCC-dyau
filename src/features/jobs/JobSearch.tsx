import { Search } from 'lucide-react'
import { useEffect, useId, useMemo, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Input, Select } from '../../components/forms/Field'
import { Button } from '../../components/ui/Button'
import { Stagger, StaggerItem } from '../../components/motion/Reveal'
import { jobsPage } from '../../content/pages'
import { loadJobs } from '../../services/jobs'
import { cn } from '../../lib/cn'
import type { Job } from '../../types/content'

const PAGE_SIZE = 12

/**
 * Job board with URL-synced filters and pagination. Data comes from services/jobs.ts
 * (feed or static list). With no roles it renders an honest empty state pointing to registration.
 */
export function JobSearch() {
  const id = useId()
  const [params, setParams] = useSearchParams()
  const [jobs, setJobs] = useState<Job[] | null>(null)
  const [draft, setDraft] = useState({ location: params.get('location') ?? '', category: params.get('category') ?? '', q: params.get('q') ?? '' })

  useEffect(() => {
    let alive = true
    loadJobs().then((j) => alive && setJobs(j))
    return () => {
      alive = false
    }
  }, [])

  const all = useMemo(() => jobs ?? [], [jobs])
  const locations = useMemo(() => Array.from(new Set(all.map((j) => j.country))).sort(), [all])
  const categories = useMemo(() => Array.from(new Set(all.map((j) => j.category).filter(Boolean) as string[])).sort(), [all])
  const location = params.get('location') ?? ''
  const category = params.get('category') ?? ''
  const q = (params.get('q') ?? '').trim().toLowerCase()
  const page = Math.max(1, Number(params.get('page') ?? 1) || 1)

  const filtered = useMemo(
    () => all.filter((j) => (!location || j.country === location) && (!category || j.category === category) && (!q || `${j.title} ${j.location}`.toLowerCase().includes(q))),
    [all, location, category, q],
  )
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, pages)
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = new URLSearchParams()
    if (draft.location) next.set('location', draft.location)
    if (draft.category) next.set('category', draft.category)
    if (draft.q.trim()) next.set('q', draft.q.trim())
    setParams(next)
  }
  const setPage = (p: number) => {
    const next = new URLSearchParams(params)
    if (p <= 1) next.delete('page')
    else next.set('page', String(p))
    setParams(next)
    document.getElementById('job-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (jobs && jobs.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 md:p-10">
        <p className="eyebrow text-orange">Live roles</p>
        <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">{jobsPage.empty.heading}</h2>
        <p className="lede mt-3 max-w-2xl text-stone">{jobsPage.empty.body}</p>
        <Button to="#register" className="mt-6" arrow>
          {jobsPage.empty.cta}
        </Button>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={onSubmit} role="search" aria-label="Search jobs" className="grid gap-3 rounded-2xl border border-line bg-white p-4 md:grid-cols-[1fr_1fr_1.4fr_auto] md:items-end">
        <Select id={`${id}-location`} label={jobsPage.filters.location} value={draft.location} onChange={(e) => setDraft((d) => ({ ...d, location: e.target.value }))}>
          <option value="">All locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </Select>
        <Select id={`${id}-category`} label={jobsPage.filters.category} value={draft.category} onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
        <Input id={`${id}-q`} label={jobsPage.filters.keyword} placeholder={jobsPage.filters.keyword} type="search" value={draft.q} onChange={(e) => setDraft((d) => ({ ...d, q: e.target.value }))} />
        <Button type="submit" size="lg" className="md:min-w-32">
          <Search className="size-4" aria-hidden="true" />
          {jobsPage.filters.search}
        </Button>
      </form>

      <div id="job-results" className="scroll-mt-28">
        <p className="mt-6 text-sm text-stone" aria-live="polite">
          {jobs === null ? 'Loading roles…' : filtered.length === 0 ? 'No roles match your search.' : `${filtered.length} ${filtered.length === 1 ? 'role' : 'roles'}`}
        </p>
        {jobs && filtered.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-dashed border-line p-8 text-center">
            <p className="font-display text-2xl text-ink">Try a broader search</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button type="button" variant="outline" onClick={() => { setDraft({ location: '', category: '', q: '' }); setParams(new URLSearchParams()) }}>
                Clear filters
              </Button>
              <Button to="#register" arrow>
                {jobsPage.empty.cta}
              </Button>
            </div>
          </div>
        ) : (
          <Stagger as="ul" key={`${location}-${category}-${q}-${current}`} className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" stagger={0.05}>
            {visible.map((j) => (
              <StaggerItem as="li" key={j.id}>
                <Link to={`/find-a-job/${j.id}`} className="group relative flex h-full min-h-52 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)]">
                  <div>
                    <h3 className="font-display text-[1.35rem] leading-snug text-ink transition-colors group-hover:text-orange">{j.title}</h3>
                    <p className="mt-2 text-sm text-stone">{j.location}</p>
                  </div>
                  <p className="mt-5 text-sm text-stone">{j.posted}</p>
                  <span aria-hidden="true" className="absolute right-0 bottom-0 size-8 rounded-tl-2xl bg-orange transition-transform duration-300 group-hover:scale-125" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        )}
        {pages > 1 && (
          <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
              <button key={p} type="button" onClick={() => setPage(p)} aria-current={p === current ? 'page' : undefined} className={cn('inline-flex size-11 items-center justify-center rounded-full text-sm font-semibold transition-colors', p === current ? 'bg-orange text-white' : 'hover:bg-sand')}>
                {p}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}
