import { Paperclip, X } from 'lucide-react'
import { useId, useRef, useState } from 'react'
import { CV_ACCEPT } from '../../lib/validation'
import { cn } from '../../lib/cn'
import { FieldError } from './Field'

type Props = { id?: string; label: string; name: string; error?: string | null; tone?: 'light' | 'dark'; onChange?: (file: File | null) => void; className?: string }

/** Accessible file picker styled as a pill button (source label: "Attach your CV"). */
export function FileField({ id, label, name, error, tone = 'light', onChange, className }: Props) {
  const auto = useId()
  const inputId = id ?? auto
  const ref = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const errId = `${inputId}-error`

  const update = (f: File | null) => {
    setFile(f)
    onChange?.(f)
  }

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <input
        ref={ref}
        id={inputId}
        name={name}
        type="file"
        accept={CV_ACCEPT}
        className="sr-only"
        aria-describedby={error ? errId : `${inputId}-hint`}
        aria-invalid={error ? true : undefined}
        onChange={(e) => update(e.target.files?.[0] ?? null)}
      />
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-6 text-[0.9375rem] font-semibold transition-colors focus-within:ring-2 focus-within:ring-orange/60',
          tone === 'light' ? 'border-orange text-orange hover:bg-orange hover:text-white' : 'border-orange bg-white text-ink hover:bg-orange hover:text-white',
        )}
      >
        <Paperclip className="size-4" aria-hidden="true" />
        {file ? 'Change CV' : label}
      </label>
      {file && (
        <p className="flex items-center gap-2 text-sm">
          <span className="max-w-60 truncate">{file.name}</span>
          <button
            type="button"
            aria-label="Remove attached CV"
            className="inline-flex size-7 items-center justify-center rounded-full hover:bg-black/10"
            onClick={() => {
              if (ref.current) ref.current.value = ''
              update(null)
            }}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </p>
      )}
      <p id={`${inputId}-hint`} className="text-xs opacity-75">
        PDF, DOC or DOCX, up to 5 MB.
      </p>
      <FieldError id={errId}>{error}</FieldError>
    </div>
  )
}
