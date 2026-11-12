import { Check, CircleX, LoaderCircle } from 'lucide-react'
import type { SubmitResult } from '../../services/forms'
import { cn } from '../../lib/cn'

type Props = { status: 'idle' | 'submitting' | 'done'; result?: SubmitResult | null; fallbackHref?: string; fallbackLabel?: string; successMessage: string; tone?: 'light' | 'dark' }

/** Live-region feedback for every form: loading, success, server/network error and the honest not-connected state. */
export function FormStatus({ status, result, fallbackHref, fallbackLabel = 'Send it by email instead', successMessage, tone = 'light' }: Props) {
  const box = cn('mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm', tone === 'dark' ? 'border-white/25 bg-white/10 text-white' : 'border-line bg-white text-ink')
  return (
    <div aria-live="polite" aria-atomic="true">
      {status === 'submitting' && (
        <p className={box}>
          <LoaderCircle className="size-5 shrink-0 animate-spin" aria-hidden="true" /> Sending…
        </p>
      )}
      {status === 'done' && result?.ok && (
        <p className={box}>
          <Check className="size-5 shrink-0 text-green-700" aria-hidden="true" /> {successMessage}
        </p>
      )}
      {status === 'done' && result && !result.ok && (
        <div className={box} role="alert">
          <CircleX className="size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">{result.code === 'not-configured' ? 'Online submission is not connected yet.' : 'Your message was not sent.'}</p>
            <p className="mt-1 opacity-85">{result.code === 'not-configured' ? 'Your details stay on this page and were not sent anywhere.' : result.message}</p>
            {fallbackHref && (
              <a href={fallbackHref} className="mt-2 inline-block font-semibold underline underline-offset-4">
                {fallbackLabel}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
