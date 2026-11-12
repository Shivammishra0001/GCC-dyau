/**
 * Form submission service.
 * No backend was supplied with the project. Endpoints are read from environment variables so the
 * forms can be connected without touching UI code:
 *   VITE_FORMS_ENDPOINT       — receives multipart/form-data POSTs for enquiry / hire-talent / job-application
 *   VITE_NEWSLETTER_ENDPOINT  — receives application/json POSTs { email }
 * When an endpoint is missing the UI shows an honest "not connected" state (never a fake success).
 */
export type FormKind = 'enquiry' | 'hire-talent' | 'job-application' | 'newsletter'

export type SubmitResult = { ok: true } | { ok: false; code: 'not-configured' | 'network' | 'server'; message: string }

const env = import.meta.env as Record<string, string | undefined>

export function formEndpoint(kind: FormKind): string | undefined {
  return kind === 'newsletter' ? env.VITE_NEWSLETTER_ENDPOINT : env.VITE_FORMS_ENDPOINT
}

export function isFormConfigured(kind: FormKind) {
  return Boolean(formEndpoint(kind))
}

export async function submitForm(kind: FormKind, data: FormData): Promise<SubmitResult> {
  const endpoint = formEndpoint(kind)
  if (!endpoint) {
    return { ok: false, code: 'not-configured', message: 'Online submission is not connected yet.' }
  }
  data.set('form', kind)
  try {
    const res = await fetch(endpoint, { method: 'POST', body: data })
    if (!res.ok) return { ok: false, code: 'server', message: `The server responded with ${res.status}. Please try again.` }
    return { ok: true }
  } catch {
    return { ok: false, code: 'network', message: 'We could not reach the server. Check your connection and try again.' }
  }
}

export async function subscribeNewsletter(email: string): Promise<SubmitResult> {
  const endpoint = formEndpoint('newsletter')
  if (!endpoint) return { ok: false, code: 'not-configured', message: 'Newsletter sign-up is not connected yet.' }
  try {
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
    if (!res.ok) return { ok: false, code: 'server', message: `The server responded with ${res.status}. Please try again.` }
    return { ok: true }
  } catch {
    return { ok: false, code: 'network', message: 'We could not reach the server. Check your connection and try again.' }
  }
}

/** Builds a mailto: fallback so a visitor can still send their message when the endpoint is missing. */
export function mailtoFallback(to: string, subject: string, lines: Array<[string, string]>) {
  const body = lines
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
