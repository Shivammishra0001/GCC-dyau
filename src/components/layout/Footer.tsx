import { Link } from 'react-router'
import { footerBlurb, footerColumns, footerNewsletter, legalLinks } from '../../content/navigation'
import { site } from '../../content/site'
import { NewsletterForm } from '../../features/contact/NewsletterForm'
import { Logo } from '../brand/Logo'
import { Reveal } from '../motion/Reveal'
import { fade } from '../motion/motion-config'
import { SocialLinks } from '../ui/SocialIcons'

/**
 * Compact charcoal footer (≈ 300px on desktop): brand + newsletter in the first column,
 * three link columns, a contact column, one legal line, and an original paper-cut Indian
 * skyline graphic sitting behind the base so it adds no height.
 */
export function Footer() {
  const hasSocial = Boolean(site.social.linkedin || site.social.instagram)
  return (
    <footer className="relative isolate overflow-hidden bg-charcoal text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-[0.07] md:h-28" aria-hidden="true">
        <img src="/assets/images/graphics/india-skyline-papercut.svg" alt="" className="h-full w-full object-cover object-bottom [filter:invert(1)]" />
      </div>
      <Reveal variants={fade} className="container-x relative pt-9 pb-4 md:pt-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Logo tone="white" height={40} />
            <p className="mt-3 max-w-xs text-sm text-white/65">{footerBlurb}</p>
            <div className="mt-4">
              <p className="text-sm font-semibold">{footerNewsletter.heading}</p>
              <p className="mb-2 text-xs text-white/50">{footerNewsletter.body}</p>
              <NewsletterForm compact />
            </div>
            {hasSocial && <SocialLinks className="mt-3 -ml-2" itemClassName="text-white hover:bg-white/10" />}
          </div>
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="md:col-span-2">
              <h2 className="eyebrow font-sans text-white/50">{col.heading}</h2>
              <ul className="mt-2.5 space-y-1">
                {col.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="link-underline inline-block py-0.5 text-sm text-white/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="md:col-span-2">
            <h2 className="eyebrow font-sans text-white/50">Get in touch</h2>
            <ul className="mt-2.5 space-y-1 text-sm text-white/80">
              <li>
                <Link to="/hire-talent" className="link-underline inline-block py-0.5 hover:text-white">
                  Hire talent
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="link-underline inline-block py-0.5 hover:text-white">
                  Contact us
                </Link>
              </li>
              {site.contact.email && (
                <li>
                  <a href={`mailto:${site.contact.email}`} className="link-underline inline-block py-0.5 break-all hover:text-white">
                    {site.contact.email}
                  </a>
                </li>
              )}
              {site.contact.phoneDisplay && (
                <li>
                  <a href={site.contact.phoneHref} className="link-underline inline-block py-0.5 hover:text-white">
                    {site.contact.phoneDisplay}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-1.5 border-t border-white/10 pt-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <ul className="flex flex-wrap gap-x-5">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline inline-block py-1 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </footer>
  )
}
