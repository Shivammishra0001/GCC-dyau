import type { Job } from '../types/content'

/**
 * Job board data. Empty until the business publishes roles or an ATS feed is connected
 * (see services/jobs.ts). The UI renders an honest empty state with a registration form.
 */
export const jobs: Job[] = []

export const getJob = (id: string) => jobs.find((j) => j.id === id)
