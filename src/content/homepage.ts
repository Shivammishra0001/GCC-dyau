import type { Cta, ImageAsset, ValuePoint } from '../types/content'

/** Original Dyau homepage copy. Facts are limited to the confirmed positioning (V2 brief §2). */
export const hero = {
  eyebrow: 'Recruitment & Talent Solutions',
  headingLines: ['Exceptional talent,', 'wherever your business', 'needs it.'],
  body: 'Talent is a recruitment and talent-solutions consultancy founded in India and built to serve organisations worldwide. We connect ambitious companies with the people who move them forward.',
  primaryCta: { label: 'Find Talent', to: '/hire-talent' } satisfies Cta,
  secondaryCta: { label: 'Find a Job', to: '/find-a-job' } satisfies Cta,
  /** 'hawa-mahal' is the selected hero asset; 'sunset' remains as the earlier alternative. */
  image: 'hawa-mahal' as 'hawa-mahal' | 'sunset',
}

export const heroImages: Record<'hawa-mahal' | 'sunset', ImageAsset> = {
  'hawa-mahal': {
    src: '/assets/images/hero/dyau-hero-hawa-mahal-1672.webp',
    srcSet:
      '/assets/images/hero/dyau-hero-hawa-mahal-800.webp 800w, /assets/images/hero/dyau-hero-hawa-mahal-1200.webp 1200w, /assets/images/hero/dyau-hero-hawa-mahal-1672.webp 1672w',
    alt: 'The pink sandstone façade of Hawa Mahal in Jaipur under a clear blue sky',
    width: 1672,
    height: 941,
    objectPosition: '64% 45%',
  },
  sunset: {
    src: '/assets/images/hero/dyau-hero-sunset-1280.webp',
    srcSet: '/assets/images/hero/dyau-hero-sunset-800.webp 800w, /assets/images/hero/dyau-hero-sunset-1280.webp 1280w',
    alt: 'Aerial view of a coastline and pier at sunset',
    width: 1280,
    height: 720,
    objectPosition: '50% 60%',
  },
}

export const intro = {
  eyebrow: 'Who we are',
  heading: 'From India to the world.',
  paragraphs: [
    'Dyau was created to give organisations a recruitment partner that combines deep understanding of the Indian talent market with a genuinely international outlook.',
    'We work with leadership teams and hiring managers to find, assess and secure the professionals their plans depend on, whether that is one critical leadership appointment or a programme of hires across several markets.',
  ],
  points: [
    { term: 'Search and selection', text: 'Executive, specialist and professional hiring run with rigour from brief to onboarding.' },
    { term: 'Local insight, global reach', text: 'Rooted in India with the networks and discipline to work across borders.' },
    { term: 'Relationships over transactions', text: 'Long-term partnerships, honest advice and accountability for the outcome.' },
  ] satisfies ValuePoint[],
  cta: { label: 'About Dyau', to: '/about-us' } satisfies Cta,
  image: {
    src: '/assets/images/sections/intro-business-district-1200.webp',
    srcSet: '/assets/images/sections/intro-business-district-800.webp 800w, /assets/images/sections/intro-business-district-1200.webp 1200w',
    alt: 'Glass office towers of a modern Indian business district',
    width: 1200,
    height: 800,
  } satisfies ImageAsset,
}

/** Section 03 — brand credibility: capabilities and commitments only; no numbers or client claims. */
export const credibility = {
  eyebrow: 'Why Dyau',
  heading: 'Built on trust, run with discipline.',
  body: 'These are the standards we hold ourselves to on every mandate.',
  tiles: [
    { term: 'Trust', text: 'Confidential handling of every brief and every candidate conversation.' },
    { term: 'Professionalism', text: 'Clear process, structured assessment and respectful communication throughout.' },
    { term: 'Global perspective', text: 'Talent and opportunity considered across markets, not just the nearest one.' },
    { term: 'Relationships', text: 'We invest in knowing your business so the next hire is faster and better than the last.' },
    { term: 'Expertise', text: 'Consultants who understand the functions and sectors they recruit for.' },
    { term: 'Accountability', text: 'One point of ownership, honest progress reporting and no surprises.' },
    { term: 'Quality', text: 'Fewer, better-matched candidates rather than a volume of CVs.' },
    { term: 'Long-term partnership', text: 'Support that continues after the offer is signed.' },
  ] satisfies ValuePoint[],
  images: {
    partnership: {
      src: '/assets/images/sections/credibility-partnership-1200.webp',
      alt: 'Two professionals shaking hands across a meeting table',
      width: 1200,
      height: 900,
    } satisfies ImageAsset,
    global: {
      src: '/assets/images/sections/credibility-global-1200.webp',
      alt: 'City skyline at dusk seen from above',
      width: 1200,
      height: 900,
    } satisfies ImageAsset,
    quality: {
      src: '/assets/images/sections/credibility-quality-900.webp',
      alt: 'A calm, light-filled modern office interior',
      width: 900,
      height: 1200,
    } satisfies ImageAsset,
  },
}

export const talentSolutionsSection = {
  eyebrow: 'What we do',
  heading: 'Talent Solutions',
  body: 'Five ways of working, chosen to fit the role, the urgency and the market you are hiring in.',
  cta: { label: 'All talent solutions', to: '/talent-solutions' } satisfies Cta,
}

export const expertiseSection = {
  eyebrow: 'Where we specialise',
  heading: 'Our Expertise',
  body: 'Sector-focused consultants who speak the language of the teams they hire for.',
  cta: { label: 'Explore all sectors', to: '/our-expertise' } satisfies Cta,
}

/** Section 06 — replaces a statistics band until verified figures exist (docs/BUSINESS_INFORMATION_REQUIRED.md). */
export const howWeWork = {
  eyebrow: 'How we work',
  heading: 'A clear process from brief to onboarding.',
  body: 'Every mandate follows the same disciplined path, scaled to the seniority and urgency of the role.',
  steps: [
    { step: 'Brief', detail: 'We take time to understand the role, the team, the culture and what success looks like in the first year.' },
    { step: 'Search', detail: 'Market mapping and direct approach across India and the international markets relevant to the role.' },
    { step: 'Assess', detail: 'Structured interviews and reference checks produce a short, well-matched shortlist with candid notes.' },
    { step: 'Secure', detail: 'Offer management, counter-offer handling and notice-period support until the start date.' },
    { step: 'Support', detail: 'Check-ins through onboarding so the appointment delivers for both sides.' },
  ],
}

export const insightsSection = {
  eyebrow: 'Insights',
  heading: 'Perspectives on talent.',
  body: 'Our editorial programme is in preparation. These are the themes we will be writing about first.',
  cta: { label: 'Visit Insights', to: '/insights' } satisfies Cta,
}

export const globalCta = {
  eyebrow: 'Hiring across borders?',
  heading: "Tell us about the role. We'll tell you how we'd approach it.",
  body: 'Share a few details and a Dyau consultant will come back to you with a clear view on market, timeline and search strategy.',
  primary: { label: 'Start a conversation', to: '/hire-talent' } satisfies Cta,
  secondary: { label: 'Talent Solutions', to: '/talent-solutions' } satisfies Cta,
  image: {
    src: '/assets/images/sections/global-cta-2400.webp',
    srcSet: '/assets/images/sections/global-cta-1200.webp 1200w, /assets/images/sections/global-cta-2400.webp 2400w',
    alt: '',
    width: 2400,
    height: 1200,
  } satisfies ImageAsset,
}
