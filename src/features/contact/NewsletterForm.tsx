import { useId, useState, type FormEvent } from 'react'
import { FormStatus } from '../../components/forms/FormStatus'
import { footerNewsletter } from '../../content/navigation'
import { site } from '../../content/site'
import { validateEmail } from '../../lib/validation'
import { mailtoFallback, subscribeNewsletter, type SubmitResult } from '../../services/forms'
import { cn } from '../../lib/cn'

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [result, setResult] = useState<SubmitResult | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const err = validateEmail(email)
    setError(err)
    if (err) return
    setStatus('submitting')
    const r = await subscribeNewsletter(email.trim())
    setResult(r)
    setStatus('done')
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn('w-full', compact ? 'max-w-sm' : 'max-w-md')}>
      <label htmlFor={id} className="sr-only">
        {footerNewsletter.placeholder}
      </label>
      <div className={cn('flex rounded-full border bg-white/5 p-1 focus-within:ring-2 focus-within:ring-orange/70', error ? 'border-red-400' : 'border-white/20')}>
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={footerNewsletter.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn('min-w-0 flex-1 bg-transparent px-4 text-white placeholder:text-white/50 focus:outline-none', compact && 'text-sm')}
        />
        <button type="submit" disabled={status === 'submitting'} className={cn('rounded-full bg-orange px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-deep disabled:opacity-60', compact ? 'min-h-10' : 'min-h-11')}>
          {footerNewsletter.cta}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
      <FormStatus status={status} result={result} tone="dark" fallbackHref={site.contact.email ? mailtoFallback(site.contact.email, 'Subscribe me to Dyau insights', [['Email', email]]) : undefined} fallbackLabel="Ask to be added by email" successMessage="You're subscribed. Welcome aboard." />
    </form>
  )
}
