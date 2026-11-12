import type { Cta, ExpertiseArea } from '../types/content'

/**
 * Our Expertise — sector framework with original copy.
 * STATUS: sector list pending business validation (docs/BUSINESS_INFORMATION_REQUIRED.md).
 * Role lists describe the kinds of positions each practice covers; they are not claims of past placements.
 */
export const expertisePage = {
  eyebrow: 'Our Expertise',
  heading: 'Specialists in the sectors we serve.',
  body: 'Recruiting well depends on understanding the work. Our consultants are organised by sector and function so they can judge candidates the way your hiring managers would.',
  cta: { label: 'Speak to a consultant', to: '/contact-us' } satisfies Cta,
  hero: {
    src: '/assets/images/pages/expertise-hero-2400.webp',
    srcSet: '/assets/images/pages/expertise-hero-1200.webp 1200w, /assets/images/pages/expertise-hero-2400.webp 2400w',
    alt: '',
    width: 2400,
    height: 1350,
    objectPosition: '50% 50%',
  },
  enquiry: {
    heading: 'Start the conversation',
    body: 'Whether you are hiring or exploring your next move, tell us about it.',
  },
}

const img = (file: string, alt: string, w = 900, h = 1200) => ({
  src: `/assets/images/expertise/${file}-${w}.webp`,
  srcSet: `/assets/images/expertise/${file}-600.webp 600w, /assets/images/expertise/${file}-${w}.webp ${w}w`,
  alt,
  width: w,
  height: h,
})

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: 'technology-digital',
    title: 'Technology & Digital',
    shortTitle: 'Technology & Digital',
    summary: 'Engineering, product, data and digital leadership for companies building in and from India.',
    intro:
      'India is one of the deepest technology talent markets in the world, and competition for the best of it is global. We recruit across software engineering, product, data and technology leadership for product companies, global capability centres and digital teams inside established businesses.',
    roles: ['Technology and engineering leadership', 'Software engineering and architecture', 'Product management and design', 'Data, analytics and AI', 'Cloud, security and infrastructure', 'Delivery, programme and transformation'],
    image: img('sector-technology-digital', 'A technology office with rows of monitors at dusk'),
    status: 'pending-validation',
  },
  {
    slug: 'banking-financial-services',
    title: 'Banking & Financial Services',
    shortTitle: 'Banking & Financial Services',
    summary: 'Front-office, risk, finance and operations talent for banks, insurers, fintechs and investors.',
    intro:
      'From established banks and insurers to fintechs and investment firms, financial services hiring demands regulatory awareness and a precise understanding of each function. We recruit revenue, control and enabling roles across the sector.',
    roles: ['Corporate, commercial and private banking', 'Wealth and asset management', 'Fintech, payments and digital banking', 'Risk, compliance and audit', 'Finance, treasury and operations', 'Insurance and reinsurance'],
    image: img('sector-banking-financial-services', 'Glass towers of a financial district seen from below against a clear sky'),
    status: 'pending-validation',
  },
  {
    slug: 'engineering-infrastructure',
    title: 'Engineering & Infrastructure',
    shortTitle: 'Engineering & Infrastructure',
    summary: 'Technical and leadership talent for manufacturing, energy, construction and infrastructure.',
    intro:
      'Capital projects, manufacturing growth and the energy transition all depend on scarce technical leadership. We recruit engineers, project professionals and plant and programme leaders who have delivered in demanding environments.',
    roles: ['Plant, operations and manufacturing leadership', 'Project, programme and construction management', 'Design, process and quality engineering', 'Energy, utilities and renewables', 'Supply chain, procurement and logistics', 'HSE and sustainability'],
    image: img('sector-engineering-infrastructure', 'The interior of a clean, modern industrial facility'),
    status: 'pending-validation',
  },
  {
    slug: 'healthcare-life-sciences',
    title: 'Healthcare & Life Sciences',
    shortTitle: 'Healthcare & Life Sciences',
    summary: 'Clinical, scientific, commercial and operational roles across healthcare and life sciences.',
    intro:
      'Healthcare providers, pharmaceutical and medical-technology companies and research organisations need people who combine scientific credibility with commercial or operational judgement. We recruit across the value chain, from research to market access and hospital operations.',
    roles: ['Hospital and healthcare operations leadership', 'Clinical and medical affairs', 'Research, development and regulatory', 'Quality and manufacturing', 'Commercial, marketing and market access', 'Digital health and health technology'],
    image: img('sector-healthcare-life-sciences', 'A bright, modern healthcare facility corridor'),
    status: 'pending-validation',
  },
  {
    slug: 'consumer-retail-services',
    title: 'Consumer, Retail & Services',
    shortTitle: 'Consumer, Retail & Services',
    summary: 'Commercial, marketing, operations and leadership talent for consumer-facing businesses.',
    intro:
      'Consumer businesses live or die by the quality of their commercial and operational teams. We recruit leaders and specialists across brands, retailers, hospitality and consumer services, in India and in the markets they are expanding into.',
    roles: ['General management and P&L leadership', 'Sales, category and key-account management', 'Brand, marketing and e-commerce', 'Retail and store operations', 'Supply chain and merchandising', 'Customer experience and service operations'],
    image: img('sector-consumer-retail-services', 'The interior of a modern retail store'),
    status: 'pending-validation',
  },
  {
    slug: 'corporate-functions',
    title: 'Corporate Functions',
    shortTitle: 'Corporate Functions',
    summary: 'Finance, HR, legal, procurement and strategy professionals for every sector.',
    intro:
      'Every organisation depends on strong corporate functions. We recruit the finance, people, legal, procurement and strategy professionals who give leadership teams control and confidence, across industries and across borders.',
    roles: ['Finance, accounting and FP&A', 'Human resources and talent', 'Legal, governance and compliance', 'Procurement and operations', 'Strategy, transformation and PMO', 'Marketing and communications'],
    image: img('sector-corporate-functions', 'A quiet office corner with an armchair by a window overlooking the city'),
    status: 'pending-validation',
  },
]

/** Three panels on the homepage; the full set lives on /our-expertise. */
export const homepageExpertiseOrder = ['technology-digital', 'banking-financial-services', 'engineering-infrastructure']

export const getExpertise = (slug: string) => expertiseAreas.find((e) => e.slug === slug)
