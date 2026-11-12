import { cn } from '../../lib/cn'
import { site } from '../../content/site'

/** Brand glyphs are kept inline (lucide no longer ships brand icons). */
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SocialLinks({ className, itemClassName }: { className?: string; itemClassName?: string }) {
  const item = cn('inline-flex size-10 items-center justify-center rounded-full transition-colors duration-300', itemClassName)
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {site.social.linkedin && (
        <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="Dyau on LinkedIn" className={item}>
          <LinkedInIcon className="size-[1.125rem]" />
        </a>
      )}
      {site.social.instagram && (
        <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Dyau on Instagram" className={item}>
          <InstagramIcon className="size-5" />
        </a>
      )}
    </div>
  )
}
