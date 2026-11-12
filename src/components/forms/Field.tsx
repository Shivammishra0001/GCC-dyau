import { CircleX } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Tone = 'light' | 'dark' | 'orange'

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-mist transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-2 focus:ring-orange/60 min-h-12'

export function fieldClasses(error?: string | null) {
  return cn(inputBase, error ? 'border-red-600' : 'border-line')
}

export function labelClasses(tone: Tone = 'light') {
  return cn('mb-1.5 block text-sm font-semibold', tone === 'light' ? 'text-ink' : 'text-white')
}

export function FieldError({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700 [.dark-form_&]:text-white">
      <CircleX className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

type InputProps = {
  id: string
  label: string
  error?: string | null
  tone?: Tone
  hint?: string
  optional?: string
  /** Visually hide the label (placeholder-only designs in the source) while keeping it for AT. */
  hideLabel?: boolean
} & ComponentPropsWithoutRef<'input'>

export function Input({ id, label, error, tone = 'light', hint, optional, hideLabel, className, ...rest }: InputProps) {
  const errId = `${id}-error`
  const hintId = `${id}-hint`
  return (
    <div className={className}>
      <label htmlFor={id} className={cn(labelClasses(tone), hideLabel && 'sr-only')}>
        {label} {optional && <span className="font-normal opacity-80">{optional}</span>}
      </label>
      <input id={id} className={fieldClasses(error)} aria-invalid={error ? true : undefined} aria-describedby={cn(error && errId, hint && hintId) || undefined} {...rest} />
      {hint && (
        <p id={hintId} className="mt-1.5 text-xs opacity-80">
          {hint}
        </p>
      )}
      <FieldError id={errId}>{error}</FieldError>
    </div>
  )
}

type TextareaProps = { id: string; label: string; error?: string | null; tone?: Tone; optional?: string; hideLabel?: boolean } & ComponentPropsWithoutRef<'textarea'>

export function Textarea({ id, label, error, tone = 'light', optional, hideLabel, className, rows = 5, ...rest }: TextareaProps) {
  const errId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id} className={cn(labelClasses(tone), hideLabel && 'sr-only')}>
        {label} {optional && <span className="font-normal opacity-80">{optional}</span>}
      </label>
      <textarea id={id} rows={rows} className={cn(fieldClasses(error), 'resize-y')} aria-invalid={error ? true : undefined} aria-describedby={error ? errId : undefined} {...rest} />
      <FieldError id={errId}>{error}</FieldError>
    </div>
  )
}

type SelectProps = { id: string; label: string; error?: string | null; tone?: Tone; hideLabel?: boolean; children: ReactNode } & ComponentPropsWithoutRef<'select'>

export function Select({ id, label, error, tone = 'light', hideLabel, className, children, ...rest }: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={cn(labelClasses(tone), hideLabel && 'sr-only')}>
        {label}
      </label>
      <select id={id} className={cn(fieldClasses(error), 'appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 stroke=%27%230f0f0f%27 stroke-width=%271.8%27%3E%3Cpath d=%27m4 6 4 4 4-4%27/%3E%3C/svg%3E")] bg-[length:16px] bg-[position:right_1rem_center] bg-no-repeat pr-10')} {...rest}>
        {children}
      </select>
    </div>
  )
}
