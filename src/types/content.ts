export type ImageAsset = {
  src: string
  srcSet?: string
  alt: string
  width: number
  height: number
  /** CSS object-position override for art direction */
  objectPosition?: string
}

export type NavLinkItem = {
  label: string
  to: string
  children?: NavLinkItem[]
}

export type Cta = { label: string; to: string }

export type TalentSolution = {
  slug: string
  title: string
  shortTitle: string
  /** One-line promise shown on cards */
  summary: string
  /** Detail-page copy: what the service is and how Dyau runs it */
  intro: string
  bestFor: string[]
  howWeWork: { step: string; detail: string }[]
  image: ImageAsset
  /** Business confirmation status — see docs/BUSINESS_INFORMATION_REQUIRED.md */
  status: 'confirmed' | 'pending-validation'
}

export type ExpertiseArea = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  intro: string
  roles: string[]
  image: ImageAsset
  status: 'confirmed' | 'pending-validation'
}

export type Job = {
  id: string
  title: string
  location: string
  country: string
  posted: string
  category?: string
  description?: string
}

export type InsightTheme = {
  slug: string
  title: string
  summary: string
}

export type ValuePoint = { term: string; text: string }
