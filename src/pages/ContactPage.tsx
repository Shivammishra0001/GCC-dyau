import { Reveal } from '../components/motion/Reveal'
import { Seo } from '../components/ui/Seo'
import { contactPage } from '../content/pages'
import { site } from '../content/site'
import { ContactDetails } from '../features/contact/ContactDetails'
import { EnquiryForm } from '../features/contact/EnquiryForm'
import { OfficeMap } from '../features/contact/OfficeMap'
import { SocialLinks } from '../components/ui/SocialIcons'

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us" description={contactPage.body} path="/contact-us" />
      <section className="bg-offwhite pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow eyebrow-rule text-orange">{contactPage.eyebrow}</p>
            <h1 className="display-xl mt-4 text-ink">{contactPage.heading}</h1>
            <p className="lede mt-5 text-stone">{contactPage.body}</p>
            <div className="mt-8">
              <ContactDetails />
            </div>
            {(site.social.linkedin || site.social.instagram) && <SocialLinks className="mt-6 -ml-2" itemClassName="text-ink hover:bg-sand" />}
            {site.contact.map && (
              <div id="our-office" className="mt-8 scroll-mt-28">
                <h2 className="display-sm text-ink">{contactPage.officeHeading}</h2>
                <div className="mt-4">
                  <OfficeMap />
                </div>
              </div>
            )}
          </Reveal>
          <Reveal className="rounded-3xl bg-white p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] lg:col-span-7 lg:p-10" delay={0.1}>
            <h2 className="display-sm text-ink">Send a message</h2>
            <EnquiryForm className="mt-6" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
