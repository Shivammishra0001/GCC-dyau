import type { Cta, ValuePoint } from '../types/content'

/** About Us — original copy limited to confirmed positioning and the values set out in the V2 brief. */
export const aboutPage = {
  eyebrow: 'About Dyau',
  heading: 'A recruitment partner from India, for organisations everywhere.',
  body: 'Dyau exists to connect ambitious organisations with exceptional people, with the care, rigour and honesty that lasting partnerships are built on.',
  cta: { label: 'Work with us', to: '/hire-talent' } satisfies Cta,
  hero: {
    src: '/assets/images/pages/about-hero-2400.webp',
    srcSet: '/assets/images/pages/about-hero-1200.webp 1200w, /assets/images/pages/about-hero-2400.webp 2400w',
    alt: '',
    width: 2400,
    height: 1350,
    objectPosition: '50% 55%',
  },
  story: {
    eyebrow: 'Our purpose',
    heading: 'Local roots. Global standards.',
    paragraphs: [
      'Dyau was founded in India with a simple ambition: to build an internationally recognised recruitment brand that organisations anywhere can trust with the hires that matter most.',
      'We believe recruitment is a relationship business. The best outcomes come from understanding a company deeply, representing it honestly to candidates, and staying accountable long after the offer letter is signed.',
      'Our consultants are organised by sector and function, so clients work with people who understand the roles they are hiring for, and candidates speak to someone who understands their careers.',
    ],
  },
  values: {
    eyebrow: 'What we stand for',
    heading: 'The principles behind every mandate.',
    items: [
      { term: 'Trust', text: 'Confidentiality and candour, with clients and candidates alike.' },
      { term: 'Professionalism', text: 'Structured process, prepared conversations and respect for everyone’s time.' },
      { term: 'Global perspective', text: 'Talent and opportunity viewed across markets, not just the nearest one.' },
      { term: 'Relationships', text: 'We play the long game, building partnerships rather than closing transactions.' },
      { term: 'Expertise', text: 'Sector and functional depth that lets us judge fit, not just keywords.' },
      { term: 'Accountability', text: 'Clear ownership, honest reporting and responsibility for the result.' },
      { term: 'Quality', text: 'Fewer, better-matched candidates presented with real insight.' },
      { term: 'Long-term partnership', text: 'Support that continues through onboarding and beyond.' },
    ] satisfies ValuePoint[],
  },
  /** CONTENT REQUIRED: founders / leadership team, offices, year of founding, registrations. */
}

export const insightsPage = {
  eyebrow: 'Insights',
  heading: 'Perspectives on talent, hiring and leadership.',
  body: 'Our editorial programme is in preparation. Below are the themes we will cover first; subscribe to receive new pieces as they are published.',
  themes: [
    { slug: 'hiring-in-india', title: 'Hiring in India', summary: 'How the Indian talent market is evolving across technology, finance and industry, and what it means for employers.' },
    { slug: 'cross-border-talent', title: 'Cross-border talent', summary: 'Moving people and roles between India and international markets: practicalities, pitfalls and what works.' },
    { slug: 'leadership-and-succession', title: 'Leadership & succession', summary: 'Building leadership pipelines, planning succession and running executive search well.' },
    { slug: 'hiring-practice', title: 'Better hiring practice', summary: 'Interviewing, assessment, offers and onboarding: small changes that improve outcomes.' },
  ],
  subscribe: { heading: 'Be first to read', body: 'One email when something worth reading is published. No spam.' },
}

export const enquiryForm = {
  heading: 'Get in touch',
  tabs: { candidate: 'I am looking for a job', employer: 'I am hiring' },
  fields: {
    fullName: 'Full name',
    email: 'Email',
    enquiry: 'Enquiry',
    cv: 'Attach your CV',
    submit: 'Submit',
  },
}

export const hireTalentPage = {
  eyebrow: 'For employers',
  headingLine1: 'Tell us the role.',
  headingLine2: "We'll find the person.",
  body: 'Share a few details about what you are hiring for. A Dyau consultant will come back to you with a clear view on market, timeline and the best way to run the search.',
  reasons: [
    { term: 'Search-level rigour on every role', text: 'Structured briefs, market mapping and assessed shortlists, not keyword matching.' },
    { term: 'India depth, international reach', text: 'Access to one of the world’s largest talent markets, with the discipline to hire across borders.' },
    { term: 'One accountable point of contact', text: 'A named consultant owns the mandate from brief to onboarding.' },
  ] satisfies ValuePoint[],
  form: {
    heading: 'Send us your brief',
    subheading: 'We reply to every brief personally.',
    fields: {
      name: { label: 'Name', placeholder: 'Your name' },
      company: { label: 'Company', placeholder: 'Company name' },
      email: { label: 'Work email', placeholder: 'you@company.com' },
      phone: { label: 'Phone', placeholder: 'Include country code' },
      location: { label: 'Hiring location', placeholder: 'e.g. Bengaluru, Dubai, London' },
      roles: { label: "Role(s) you're hiring for", placeholder: 'e.g. Head of Engineering' },
      details: { label: 'Anything else?', optional: '(optional)', placeholder: 'Timeline, seniority, or what you have tried so far.' },
    },
    consent: { before: 'By submitting, you agree to our ', link: 'privacy policy', after: '. We never share your details with candidates.' },
    submit: 'Send brief',
  },
  jobSeekerLink: { label: 'Looking for a job instead? See live roles', to: '/find-a-job' },
}

export const contactPage = {
  eyebrow: 'Contact',
  heading: 'Let’s talk.',
  body: 'Whether you are planning a hire, exploring your next role or simply want to understand how we work, we would be glad to hear from you.',
  detailsHeading: 'Contact details',
  /** Shown while site.contact is empty (CONTENT REQUIRED). */
  detailsPending: 'Our direct telephone, email and office details are being finalised. Use the form and we will reply by email.',
  officeHeading: 'Our office',
}

export const jobsPage = {
  eyebrow: 'For candidates',
  heading: 'Find your next role.',
  body: 'Live opportunities are published here as they open. Register your interest and a consultant will contact you when a suitable role comes up.',
  filters: { location: 'Location', category: 'Category', keyword: 'Keyword', search: 'Search' },
  empty: {
    heading: 'No live roles are published right now.',
    body: 'Many of our searches are confidential and never advertised. Share your CV and we will approach you directly when there is a match.',
    cta: 'Register your interest',
  },
  register: { heading: 'Register your interest', body: 'Tell us about your experience and the kind of role you are looking for.' },
}

export const privacyPage = {
  heading: 'Privacy Policy',
  /** CONTENT REQUIRED: legal text approved by the business. */
  pending: 'Our privacy policy is being prepared and will be published here before launch. Until then, information submitted through this site is used only to respond to your enquiry.',
}
