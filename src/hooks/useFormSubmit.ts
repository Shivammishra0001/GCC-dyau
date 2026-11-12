import { useCallback, useState } from 'react'
import { submitForm, type FormKind, type SubmitResult } from '../services/forms'

/** Shared submit state machine for all forms. */
export function useFormSubmit(kind: FormKind) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [result, setResult] = useState<SubmitResult | null>(null)

  const submit = useCallback(
    async (data: FormData) => {
      setStatus('submitting')
      setResult(null)
      const r = await submitForm(kind, data)
      setResult(r)
      setStatus('done')
      return r
    },
    [kind],
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setResult(null)
  }, [])

  return { status, result, submit, reset }
}
