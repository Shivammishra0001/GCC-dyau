import { Seo } from '../components/ui/Seo'
import { site } from '../content/site'
import { CredibilitySection } from '../sections/home/CredibilitySection'
import { ExpertiseSection } from '../sections/home/ExpertiseSection'
import { HeroSection } from '../sections/home/HeroSection'
import { InsightsSection } from '../sections/home/InsightsSection'
import { IntroductionSection } from '../sections/home/IntroductionSection'
import { TalentSolutionsSection } from '../sections/home/TalentSolutionsSection'
import { GlobalCtaSection } from '../sections/shared/GlobalCtaSection'
import { HowWeWorkBand } from '../sections/shared/HowWeWorkBand'

/**
 * Homepage composition. Testimonials and Case Studies sections are intentionally absent until the
 * business supplies authentic content (docs/BUSINESS_INFORMATION_REQUIRED.md).
 */
export default function HomePage() {
  return (
    <>
      <Seo title={site.tagline} description={site.description} path="/" />
      <HeroSection />
      <IntroductionSection />
      <CredibilitySection />
      <TalentSolutionsSection />
      <ExpertiseSection />
      <HowWeWorkBand />
      <InsightsSection />
      <GlobalCtaSection />
    </>
  )
}
