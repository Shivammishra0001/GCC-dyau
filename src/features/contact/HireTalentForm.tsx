import { Link } from 'react-router'
import { useId, useState, type FormEvent } from 'react'
import { Input, Textarea } from '../../components/forms/Field'
import { FormStatus } from '../../components/forms/FormStatus'
import { Button } from '../../components/ui/Button'
import { hireTalentPage } from '../../content/pages'
import { site } from '../../content/site'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { validateEmail, validatePhone, validateRequired } from '../../lib/validation'
import { mailtoFallback } from '../../services/forms'

/** Employer brief form (original Dyau fields). Posts to VITE_FORMS_ENDPOINT; honest fallback when unset. */
export function HireTalentForm() {
  const id = useId()
  const f = hireTalentPage.form
  const [values, setValues] = useState({ name: '', company: '', email: '', phone: '', location: '', roles: '', details: '' })
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const { status, result, submit } = useFormSubmit('hire-talent')

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues((v) => ({ ...v, [k]: e.target.value }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = {
      name: validateRequired(values.name, 'your name'),
      company: validateRequired(values.company, 'your company name'),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone, false),
      roles: validateRequired(values.roles, "the role(s) you're hiring for"),
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) {
      const form = e.currentTarget
      window.setTimeout(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(), 0)
      return
    }
    await submit(new FormData(e.currentTarget))
  }

  const fallback = site.contact.email
    ? mailtoFallback(site.contact.email, 'Hiring brief — Dyau website', [
        ['Name', values.name],
        ['Company', values.company],
        ['Work email', values.email],
        ['Phone', values.phone],
        ['Hiring location', values.location],
        ["Role(s) you're hiring for", values.roles],
        ['Anything else', values.details],
      ])
    : undefined

  return (
    <form onSubmit={onSubmit} noValidate className="dark-form rounded-3xl bg-charcoal p-6 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] sm:p-8 lg:p-10">
      <h2 className="display-sm">{f.heading}</h2>
      <p className="body-sm mt-2 text-white/70">{f.subheading}</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Input id={`${id}-name`} name="name" tone="dark" label={f.fields.name.label} placeholder={f.fields.name.placeholder} autoComplete="name" required value={values.name} onChange={set('name')} error={errors.name} />
        <Input id={`${id}-company`} name="company" tone="dark" label={f.fields.company.label} placeholder={f.fields.company.placeholder} autoComplete="organization" required value={values.company} onChange={set('company')} error={errors.company} />
        <Input id={`${id}-email`} name="email" type="email" inputMode="email" tone="dark" label={f.fields.email.label} placeholder={f.fields.email.placeholder} autoComplete="email" required value={values.email} onChange={set('email')} error={errors.email} />
        <Input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" tone="dark" label={f.fields.phone.label} placeholder={f.fields.phone.placeholder} autoComplete="tel" value={values.phone} onChange={set('phone')} error={errors.phone} />
        <Input id={`${id}-location`} name="location" tone="dark" label={f.fields.location.label} placeholder={f.fields.location.placeholder} value={values.location} onChange={set('location')} />
        <Input id={`${id}-roles`} name="roles" tone="dark" label={f.fields.roles.label} placeholder={f.fields.roles.placeholder} required value={values.roles} onChange={set('roles')} error={errors.roles} />
        <Textarea id={`${id}-details`} name="details" tone="dark" label={f.fields.details.label} optional={f.fields.details.optional} placeholder={f.fields.details.placeholder} rows={4} className="sm:col-span-2" value={values.details} onChange={set('details')} />
      </div>

      <p className="mt-5 text-xs text-white/65">
        {f.consent.before}
        <Link to="/privacy-policy" className="font-semibold underline underline-offset-4">
          {f.consent.link}
        </Link>
        {f.consent.after}
      </p>

      <Button type="submit" size="lg" className="mt-5 min-w-44" disabled={status === 'submitting'} arrow>
        {status === 'submitting' ? 'Sending…' : f.submit}
      </Button>
      <FormStatus status={status} result={result} tone="dark" fallbackHref={fallback} successMessage="Thank you — your brief has been received. A consultant will reply personally." />
    </form>
  )
}
