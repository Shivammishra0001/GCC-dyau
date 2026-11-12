import { Mail, MapPin, Phone } from 'lucide-react'
import { contactPage } from '../../content/pages'
import { hasContactDetails, site } from '../../content/site'

/** Contact block. Renders only confirmed details; otherwise an honest pending note. */
export function ContactDetails() {
  if (!hasContactDetails()) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-5 text-stone">
        <p className="font-semibold text-ink">{contactPage.detailsHeading}</p>
        <p className="body-sm mt-1">{contactPage.detailsPending}</p>
      </div>
    )
  }
  return (
    <dl className="space-y-5">
      {site.contact.phoneDisplay && (
        <div className="flex gap-3">
          <Phone className="mt-1 size-4 shrink-0 text-orange" aria-hidden="true" />
          <div>
            <dt className="text-sm font-semibold text-ink">Phone</dt>
            <dd className="text-stone">
              <a href={site.contact.phoneHref} className="link-underline hover:text-ink">
                {site.contact.phoneDisplay}
              </a>
            </dd>
          </div>
        </div>
      )}
      {site.contact.email && (
        <div className="flex gap-3">
          <Mail className="mt-1 size-4 shrink-0 text-orange" aria-hidden="true" />
          <div>
            <dt className="text-sm font-semibold text-ink">Email</dt>
            <dd className="text-stone">
              <a href={`mailto:${site.contact.email}`} className="link-underline break-all hover:text-ink">
                {site.contact.email}
              </a>
            </dd>
          </div>
        </div>
      )}
      {site.contact.addressLines.length > 0 && (
        <div className="flex gap-3">
          <MapPin className="mt-1 size-4 shrink-0 text-orange" aria-hidden="true" />
          <div>
            <dt className="text-sm font-semibold text-ink">Office</dt>
            <dd className="text-stone">
              {site.contact.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </dd>
          </div>
        </div>
      )}
    </dl>
  )
}
