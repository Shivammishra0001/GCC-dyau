/**
 * Global brand facts. Only confirmed information is populated; everything else is empty and
 * tracked in docs/BUSINESS_INFORMATION_REQUIRED.md. Components hide blocks whose data is missing.
 */
export const site = {
  name: 'Dyau',
  tagline: 'Recruitment & Talent Solutions',
  /** Confirmed positioning (V2 brief §2) */
  positioning: 'A recruitment and talent-solutions consultancy founded in India and built to serve organisations worldwide.',
  description:
    'Dyau is a recruitment and talent-solutions consultancy founded in India and built to serve organisations worldwide. We connect ambitious companies with the people who move them forward.',
  /** Production origin — update before launch */
  url: 'https://www.dyau.com',
  copyright: `© ${new Date().getFullYear()} Dyau. All rights reserved.`,
  origin: { country: 'India', line: 'Founded in India. Working with organisations worldwide.' },
  contact: {
    /** CONTENT REQUIRED: general enquiries email */
    email: '',
    /** CONTENT REQUIRED: telephone */
    phoneDisplay: '',
    phoneHref: '',
    /** CONTENT REQUIRED: registered / principal office address */
    addressLines: [] as string[],
    /** CONTENT REQUIRED: map coordinates once an office address is confirmed */
    map: null as null | { lat: number; lon: number; label: string },
  },
  /** CONTENT REQUIRED: official profiles. Icons render only when a URL is present. */
  social: {
    linkedin: '',
    instagram: '',
  },
} as const

export const hasContactDetails = () => Boolean(site.contact.email || site.contact.phoneDisplay || site.contact.addressLines.length)
