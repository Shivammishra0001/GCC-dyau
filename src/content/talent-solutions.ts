import type { Cta, TalentSolution } from '../types/content'

/**
 * Talent Solutions — original Dyau copy describing each service and how we run it.
 * STATUS: the service line-up is the candidate set from the V2 brief and is pending business
 * validation (docs/BUSINESS_INFORMATION_REQUIRED.md). Nothing here claims past results or clients.
 */
export const talentSolutionsPage = {
  eyebrow: 'Talent Solutions',
  heading: 'The right way to hire, for every kind of role.',
  body: 'From a single confidential leadership search to a programme of professional hires, we match the method to the mandate. Each solution below is run by consultants who know the function and the market.',
  cta: { label: 'Discuss a role', to: '/hire-talent' } satisfies Cta,
  hero: {
    src: '/assets/images/pages/talent-solutions-hero-2400.webp',
    srcSet: '/assets/images/pages/talent-solutions-hero-1200.webp 1200w, /assets/images/pages/talent-solutions-hero-2400.webp 2400w',
    alt: '',
    width: 2400,
    height: 1350,
    objectPosition: '50% 50%',
  },
  enquiry: {
    heading: 'Start the conversation',
    body: 'Tell us what you are hiring for, or share your CV, and a consultant will reply.',
  },
}

const img = (file: string, alt: string) => ({
  src: `/assets/images/services/${file}-900.webp`,
  srcSet: `/assets/images/services/${file}-600.webp 600w, /assets/images/services/${file}-900.webp 900w`,
  alt,
  width: 900,
  height: 1125,
})

export const talentSolutions: TalentSolution[] = [
  {
    slug: 'executive-search',
    title: 'Executive Search',
    shortTitle: 'Executive Search',
    summary: 'Retained, confidential search for leadership and board-level appointments.',
    intro:
      'Executive Search is for the appointments that shape a business: C-suite, functional heads, country and regional leaders. We run it as a retained, exclusive engagement so the search gets the depth and discretion it deserves, mapping the market thoroughly rather than relying on who happens to be available.',
    bestFor: ['C-suite and board appointments', 'Functional and regional heads', 'Confidential replacements and new-market leadership', 'Roles where the ideal candidate is not actively looking'],
    howWeWork: [
      { step: 'Define', detail: 'Role specification, success profile and stakeholder alignment before any approach is made.' },
      { step: 'Map', detail: 'A structured map of the relevant organisations and leaders across India and the markets you operate in.' },
      { step: 'Engage', detail: 'Direct, discreet approaches by a senior consultant, with regular reporting on market response.' },
      { step: 'Assess', detail: 'Competency-based interviews, referencing and a documented shortlist with candid recommendations.' },
      { step: 'Secure', detail: 'Offer negotiation, counter-offer management and support through notice and onboarding.' },
    ],
    image: img('service-executive-search', 'An empty executive boardroom with a long table and city view'),
    status: 'pending-validation',
  },
  {
    slug: 'permanent-recruitment',
    title: 'Permanent Recruitment',
    shortTitle: 'Permanent Recruitment',
    summary: 'Specialist and professional hires delivered with search-level rigour.',
    intro:
      'Permanent Recruitment covers the specialist, managerial and professional roles that keep a business moving. We combine an active network with targeted search, assess every candidate against the brief rather than the CV, and present a short, relevant list rather than a volume of applications.',
    bestFor: ['Specialist and managerial roles', 'Growing teams that need several hires in sequence', 'Hard-to-fill positions in niche disciplines', 'Employers who want fewer, better-matched candidates'],
    howWeWork: [
      { step: 'Brief', detail: 'We agree the must-haves, the nice-to-haves and the realities of the market before we start.' },
      { step: 'Source', detail: 'Network, referrals and direct search in parallel, so the shortlist reflects the whole market.' },
      { step: 'Screen', detail: 'Structured first-stage interviews against the brief; only genuinely suitable people go forward.' },
      { step: 'Shortlist', detail: 'A small number of profiles with clear notes on fit, motivation and availability.' },
      { step: 'Close', detail: 'Interview coordination, feedback loops and offer management through to start date.' },
    ],
    image: img('service-permanent-recruitment', 'A team collaborating in a bright, modern office'),
    status: 'pending-validation',
  },
  {
    slug: 'contract-interim-hiring',
    title: 'Contract & Interim Hiring',
    shortTitle: 'Contract & Interim',
    summary: 'Experienced professionals for projects, transformations and cover, quickly.',
    intro:
      'Contract and Interim Hiring gives you experienced people for a defined period: to lead a programme, cover a gap, or add capacity during change. Speed matters here, so we keep a warm network of proven interim professionals and move fast without lowering the bar on assessment.',
    bestFor: ['Transformation and project leadership', 'Maternity, sabbatical and attrition cover', 'Capacity for peaks and new initiatives', 'Trial-before-permanent arrangements'],
    howWeWork: [
      { step: 'Scope', detail: 'Clarity on deliverables, duration, reporting lines and day-rate or salary parameters.' },
      { step: 'Shortlist', detail: 'Available, pre-assessed professionals presented quickly, usually within days.' },
      { step: 'Engage', detail: 'Clean contracting and onboarding so your interim is productive from the first week.' },
      { step: 'Manage', detail: 'Regular check-ins across the assignment and a smooth exit or conversion at the end.' },
    ],
    image: img('service-contract-interim-hiring', 'Hands over plans and a laptop on a project desk'),
    status: 'pending-validation',
  },
  {
    slug: 'talent-acquisition',
    title: 'Talent Acquisition',
    shortTitle: 'Talent Acquisition',
    summary: 'Embedded or project-based hiring support when volume or pace outgrows your team.',
    intro:
      'Talent Acquisition support is for organisations hiring at a pace or scale their internal team cannot absorb: new sites, new markets, rapid growth. We can work as an extension of your team for a defined programme, bringing process, tooling and consultants who represent your employer brand with care.',
    bestFor: ['Multi-role hiring programmes and new-site launches', 'Market entry into or out of India', 'In-house teams that need surge capacity', 'Employers building a repeatable hiring process'],
    howWeWork: [
      { step: 'Plan', detail: 'Hiring plan, role prioritisation and a realistic timeline agreed with your leadership.' },
      { step: 'Build', detail: 'Sourcing channels, assessment criteria and candidate communication set up in your name.' },
      { step: 'Run', detail: 'Dedicated consultants manage the pipeline end to end with transparent weekly reporting.' },
      { step: 'Hand over', detail: 'Documentation and know-how transferred so your team can continue independently.' },
    ],
    image: img('service-talent-acquisition', 'Two professionals in conversation across a table in a meeting room'),
    status: 'pending-validation',
  },
  {
    slug: 'recruitment-advisory',
    title: 'Recruitment Advisory',
    shortTitle: 'Recruitment Advisory',
    summary: 'Practical advice on talent strategy, market intelligence and hiring practice.',
    intro:
      'Recruitment Advisory brings our market knowledge to the decisions that come before a hire: how a role should be shaped, what the market will bear, where the talent sits and how to compete for it. It is pragmatic, specific and designed to make your next hiring decision a better-informed one.',
    bestFor: ['Workforce and succession planning', 'Compensation and market benchmarking', 'Organisation design for new teams or markets', 'Improving interview and selection practice'],
    howWeWork: [
      { step: 'Listen', detail: 'We start with your business goals and the talent questions standing between you and them.' },
      { step: 'Research', detail: 'Market mapping, benchmarking and structured conversations with relevant professionals.' },
      { step: 'Advise', detail: 'A clear written view with options, trade-offs and a recommended path.' },
      { step: 'Act', detail: 'Where useful, we move straight into search or hiring support with no re-briefing needed.' },
    ],
    image: img('service-recruitment-advisory', 'A planning wall covered with notes during a strategy workshop'),
    status: 'pending-validation',
  },
]

export const getTalentSolution = (slug: string) => talentSolutions.find((s) => s.slug === slug)
