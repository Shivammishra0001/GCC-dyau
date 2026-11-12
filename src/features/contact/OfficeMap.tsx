import { ExternalLink, MapPin } from 'lucide-react'
import { site } from '../../content/site'

/** OpenStreetMap embed; renders nothing until an office location is confirmed in content/site.ts. */
export function OfficeMap() {
  const m = site.contact.map
  if (!m) return null
  const bbox = `${m.lon - 0.012},${m.lat - 0.008},${m.lon + 0.012},${m.lat + 0.008}`
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <iframe title={`Map showing the Dyau office at ${m.label}`} src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${m.lat},${m.lon}`} className="h-72 w-full md:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <p className="flex items-center gap-2 text-sm text-ink">
          <MapPin className="size-4 text-orange" aria-hidden="true" />
          <span className="font-semibold">{m.label}</span>
        </p>
        <a href={`https://www.openstreetmap.org/?mlat=${m.lat}&mlon=${m.lon}#map=16/${m.lat}/${m.lon}`} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-orange hover:underline">
          Open in Maps <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
