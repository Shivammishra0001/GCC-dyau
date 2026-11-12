import type { NavLinkItem } from '../types/content'

/** Header navigation — only routes that have real content. */
export const primaryNav: NavLinkItem[] = [
  { label: 'Find a Job', to: '/find-a-job' },
  {
    label: 'Talent Solutions',
    to: '/talent-solutions',
    children: [
      { label: 'Executive Search', to: '/talent-solutions/executive-search' },
      { label: 'Permanent Recruitment', to: '/talent-solutions/permanent-recruitment' },
      { label: 'Contract & Interim Hiring', to: '/talent-solutions/contract-interim-hiring' },
      { label: 'Talent Acquisition', to: '/talent-solutions/talent-acquisition' },
      { label: 'Recruitment Advisory', to: '/talent-solutions/recruitment-advisory' },
    ],
  },
  {
    label: 'Our Expertise',
    to: '/our-expertise',
    children: [
      { label: 'Technology & Digital', to: '/our-expertise/technology-digital' },
      { label: 'Banking & Financial Services', to: '/our-expertise/banking-financial-services' },
      { label: 'Engineering & Infrastructure', to: '/our-expertise/engineering-infrastructure' },
      { label: 'Healthcare & Life Sciences', to: '/our-expertise/healthcare-life-sciences' },
      { label: 'Consumer, Retail & Services', to: '/our-expertise/consumer-retail-services' },
      { label: 'Corporate Functions', to: '/our-expertise/corporate-functions' },
    ],
  },
  { label: 'Insights', to: '/insights' },
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'About Dyau', to: '/about-us' },
      { label: 'How we work', to: '/about-us#how-we-work' },
      { label: 'Contact Us', to: '/contact-us' },
    ],
  },
]

export const headerCta = { label: 'Hire Talent', to: '/hire-talent' }

export const footerColumns: { heading: string; links: NavLinkItem[] }[] = [
  {
    heading: 'Talent Solutions',
    links: [
      { label: 'Executive Search', to: '/talent-solutions/executive-search' },
      { label: 'Permanent Recruitment', to: '/talent-solutions/permanent-recruitment' },
      { label: 'Contract & Interim Hiring', to: '/talent-solutions/contract-interim-hiring' },
      { label: 'Talent Acquisition', to: '/talent-solutions/talent-acquisition' },
      { label: 'Recruitment Advisory', to: '/talent-solutions/recruitment-advisory' },
    ],
  },
  {
    heading: 'Expertise',
    links: [
      { label: 'Technology & Digital', to: '/our-expertise/technology-digital' },
      { label: 'Banking & Financial Services', to: '/our-expertise/banking-financial-services' },
      { label: 'Engineering & Infrastructure', to: '/our-expertise/engineering-infrastructure' },
      { label: 'Healthcare & Life Sciences', to: '/our-expertise/healthcare-life-sciences' },
      { label: 'All sectors', to: '/our-expertise' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Find a Job', to: '/find-a-job' },
      { label: 'Hire Talent', to: '/hire-talent' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact Us', to: '/contact-us' },
    ],
  },
]

export const footerNewsletter = {
  heading: 'Hiring intelligence, in your inbox',
  body: 'Occasional notes on talent markets, hiring practice and leadership. No spam.',
  placeholder: 'Your work email',
  cta: 'Subscribe',
}

export const footerBlurb = 'Recruitment and talent solutions. Founded in India, working with organisations worldwide.'

export const legalLinks = [{ label: 'Privacy Policy', to: '/privacy-policy' }]
