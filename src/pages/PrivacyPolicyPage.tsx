import { Reveal } from '../components/motion/Reveal'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { privacyPage } from '../content/pages'

/** Legal text is CONTENT REQUIRED; this page states the interim position honestly. */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo title={privacyPage.heading} description="Dyau privacy policy." path="/privacy-policy" />
      <section className="bg-offwhite pt-[calc(var(--header-h)+2.5rem)] pb-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow eyebrow-rule text-orange">Legal</p>
            <h1 className="display-xl mt-4 text-ink">{privacyPage.heading}</h1>
            <p className="lede mt-6 text-stone">{privacyPage.pending}</p>
            <Button to="/contact-us" variant="outline" arrow className="mt-8">
              Contact us with a privacy question
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
