export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const phonePattern = /^\+?[0-9 ()-]{7,20}$/

export const CV_ACCEPT = '.pdf,.doc,.docx'
export const CV_MAX_BYTES = 5 * 1024 * 1024

export function validateEmail(v: string) {
  if (!v.trim()) return 'Enter your email address.'
  if (!emailPattern.test(v.trim())) return 'Enter a valid email address, like name@company.com.'
  return null
}

export function validateRequired(v: string, label: string) {
  return v.trim() ? null : `Enter ${label}.`
}

export function validatePhone(v: string, required = true) {
  if (!v.trim()) return required ? 'Enter your phone number.' : null
  if (!phonePattern.test(v.trim())) return 'Enter a valid phone number, like +971 50 123 4567.'
  return null
}

export function validateCv(file: File | null, required = false) {
  if (!file) return required ? 'Attach your CV as a PDF or Word document.' : null
  const ext = file.name.toLowerCase().split('.').pop()
  if (!ext || !['pdf', 'doc', 'docx'].includes(ext)) return 'Your CV must be a PDF, DOC or DOCX file.'
  if (file.size > CV_MAX_BYTES) return 'Your CV must be 5 MB or smaller.'
  return null
}
