import { jobs as staticJobs } from '../content/jobs'
import type { Job } from '../types/content'

/**
 * Job source. Reads from `VITE_JOBS_ENDPOINT` (JSON array of Job) when configured;
 * falls back to the static list in content/jobs.ts. Integration status is tracked in docs/QA_REPORT.md.
 */
const endpoint = (import.meta.env as Record<string, string | undefined>).VITE_JOBS_ENDPOINT

export async function loadJobs(): Promise<Job[]> {
  if (!endpoint) return staticJobs
  try {
    const res = await fetch(endpoint)
    if (!res.ok) return staticJobs
    const data = (await res.json()) as unknown
    return Array.isArray(data) ? (data as Job[]) : staticJobs
  } catch {
    return staticJobs
  }
}
