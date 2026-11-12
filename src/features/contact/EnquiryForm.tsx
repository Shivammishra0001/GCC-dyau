import { useId, useState, type FormEvent } from 'react'
import { Input, Textarea } from '../../components/forms/Field'
import { FileField } from '../../components/forms/FileField'
import { FormStatus } from '../../components/forms/FormStatus'
import { Button } from '../../components/ui/Button'
import { enquiryForm } from '../../content/pages'
import { site } from '../../content/site'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { cn } from '../../lib/cn'
import { validateCv, validateEmail, validateRequired } from '../../lib/validation'
import { mailtoFallback } from '../../services/forms'

type Audience = 'candidate' | 'employer'
type Props = { tone?: 'light' | 'dark'; defaultAudience?: Audience; context?: string; className?: string }

/**
 * Shared "Get In Touch" form (source: every inner page). Tabs switch audience; the CV attachment
 * is only relevant to candidates. Labels are visually hidden to match the placeholder-only source
 * design while staying accessible.
 */
export function EnquiryForm({ tone = 'light', defaultAudience = 'candidate', context, className }: Props) {
  const id = useId()
  const [audience, setAudience] = useState<Audience>(defaultAudience)
  const [values, setValues] = useState({ fullName: '', email: '', enquiry: '' })
  const [cv, setCv] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const { status, result, submit } = useFormSubmit('enquiry')
  const dark = tone === 'dark'

  const validate = () => {
    const next = {
      fullName: validateRequired(values.fullName, 'your full name'),
      email: validateEmail(values.email),
      enquiry: validateRequired(values.enquiry, 'your enquiry'),
      cv: audience === 'candidate' ? validateCv(cv) : null,
    }
    setErrors(next)
    return Object.values(next).every((v) => !v)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) {
      const form = e.currentTarget
      // wait for the re-render that adds aria-invalid before moving focus
      window.setTimeout(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(), 0)
      return
    }
    const data = new FormData(e.currentTarget)
    data.set('audience', audience)
    if (context) data.set('context', context)
    await submit(data)
  }

  const tabBtn = (a: Audience, label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={audience === a}
      aria-controls={`${id}-panel`}
      id={`${id}-tab-${a}`}
      tabIndex={audience === a ? 0 : -1}
      onClick={() => setAudience(a)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          setAudience(a === 'candidate' ? 'employer' : 'candidate')
          const other = document.getElementById(`${id}-tab-${a === 'candidate' ? 'employer' : 'candidate'}`)
          other?.focus()
        }
      }}
      className={cn(
        'min-h-11 flex-1 rounded-full px-5 text-[0.9375rem] font-semibold transition-colors duration-300',
        audience === a ? 'bg-orange text-white' : dark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-sand',
      )}
    >
      {label}
    </button>
  )

  const fallback = !site.contact.email ? undefined : mailtoFallback(site.contact.email, `${audience === 'employer' ? 'Hiring' : 'Candidate'} enquiry — Dyau website`, [
    ['Full name', values.fullName],
    ['Email', values.email],
    ['Enquiry', values.enquiry],
  ])

  return (
    <form onSubmit={onSubmit} noValidate className={cn('mx-auto w-full max-w-2xl', dark && 'dark-form', className)}>
      <div role="tablist" aria-label="I am" className={cn('mx-auto mb-8 flex w-full max-w-md rounded-full border p-1', dark ? 'border-white/40' : 'border-orange/60')}>
        {tabBtn('candidate', enquiryForm.tabs.candidate)}
        {tabBtn('employer', enquiryForm.tabs.employer)}
      </div>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${audience}`} className="grid gap-4 sm:grid-cols-2">
        <Input id={`${id}-name`} name="fullName" label={enquiryForm.fields.fullName} placeholder={enquiryForm.fields.fullName} hideLabel autoComplete="name" required tone={tone} value={values.fullName} onChange={(e) => setValues((v) => ({ ...v, fullName: e.target.value }))} error={errors.fullName} />
        <Input id={`${id}-email`} name="email" type="email" inputMode="email" label={enquiryForm.fields.email} placeholder={enquiryForm.fields.email} hideLabel autoComplete="email" required tone={tone} value={values.email} onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))} error={errors.email} />
        <Textarea id={`${id}-enquiry`} name="enquiry" label={enquiryForm.fields.enquiry} placeholder={enquiryForm.fields.enquiry} hideLabel required tone={tone} className="sm:col-span-2" value={values.enquiry} onChange={(e) => setValues((v) => ({ ...v, enquiry: e.target.value }))} error={errors.enquiry} />
        {audience === 'candidate' && (
          <div className="sm:col-span-2">
            <FileField name="cv" label={enquiryForm.fields.cv} tone={tone} onChange={setCv} error={errors.cv} />
          </div>
        )}
        <div className="flex justify-center sm:col-span-2">
          <Button type="submit" size="lg" variant={dark ? 'primary' : 'dark'} disabled={status === 'submitting'} className="min-w-44">
            {status === 'submitting' ? 'Sending…' : enquiryForm.fields.submit}
          </Button>
        </div>
      </div>
      <FormStatus status={status} result={result} tone={tone} fallbackHref={fallback} successMessage="Thank you — your enquiry has been received. A consultant will be in touch." />
    </form>
  )
}
