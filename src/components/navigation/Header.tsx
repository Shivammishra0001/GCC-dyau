import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { headerCta, primaryNav } from '../../content/navigation'
import { site } from '../../content/site'
import { useScrollLock } from '../../hooks/useScrollLock'
import { cn } from '../../lib/cn'
import type { NavLinkItem } from '../../types/content'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { SocialLinks } from '../ui/SocialIcons'
import { usePageChrome } from '../layout/PageChrome'

export function Header() {
  const { chrome } = usePageChrome()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null)
  const location = useLocation()
  // the menu is only open for the location it was opened on, so navigation closes it without an effect
  const menuOpen = menuOpenAt === location.key
  const setMenuOpen = (next: boolean | ((o: boolean) => boolean)) => {
    const value = typeof next === 'function' ? next(menuOpen) : next
    setMenuOpenAt(value ? location.key : null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overlay = chrome.overlayHeader && !scrolled && !menuOpen
  const tone = overlay ? 'white' : 'black'

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500',
        overlay ? 'bg-transparent text-white' : 'bg-white/92 text-ink shadow-[0_1px_0_0_var(--dy-line)] backdrop-blur-md',
      )}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo tone={tone} height={56} className="h-12 md:h-14" />

        <DesktopNav overlay={overlay} />

        <div className="hidden items-center gap-3 lg:flex">
          <Button to={headerCta.to} size="md">
            {headerCta.label}
          </Button>
          {(site.social.linkedin || site.social.instagram) && (
            <>
              <span aria-hidden="true" className={cn('mx-1 h-6 w-px', overlay ? 'bg-white/40' : 'bg-line')} />
              <SocialLinks itemClassName={overlay ? 'text-white hover:bg-white/15' : 'text-ink hover:bg-sand'} />
            </>
          )}
        </div>

        <button
          type="button"
          className={cn('inline-flex size-11 items-center justify-center rounded-full lg:hidden', overlay ? 'hover:bg-white/15' : 'hover:bg-sand')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

    </header>
    {/* rendered outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel */}
    <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

/* ---------------- Desktop ---------------- */

function DesktopNav({ overlay }: { overlay: boolean }) {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) => (
          <li key={item.label} className="relative">
            {item.children ? <DropdownItem item={item} overlay={overlay} /> : <TopLink item={item} overlay={overlay} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function TopLink({ item, overlay, className }: { item: NavLinkItem; overlay: boolean; className?: string }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === '/'}
      className={({ isActive }) =>
        cn(
          'relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium transition-colors duration-300',
          "after:absolute after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-300 after:content-['']",
          'hover:after:scale-x-100 focus-visible:after:scale-x-100',
          isActive && 'after:scale-x-100',
          overlay ? 'text-white' : 'text-ink',
          className,
        )
      }
    >
      {item.label}
    </NavLink>
  )
}

function DropdownItem({ item, overlay }: { item: NavLinkItem; overlay: boolean }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | null>(null)
  const location = useLocation()
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  // close automatically when the route changes
  const isOpen = open && openedAt === location.key

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120)
  }
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center"
      onMouseEnter={() => {
        cancelClose()
        setOpenedAt(location.key)
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false)
          ;(ref.current?.querySelector('a') as HTMLElement | null)?.focus()
        }
      }}
    >
      <TopLink item={item} overlay={overlay} className="pr-1" />
      <button
        type="button"
        className={cn('inline-flex size-8 items-center justify-center rounded-full', overlay ? 'text-white hover:bg-white/15' : 'text-ink hover:bg-sand')}
        aria-expanded={isOpen}
        aria-controls={id}
        aria-label={`${item.label} submenu`}
        onClick={() => {
          setOpenedAt(location.key)
          setOpen(!isOpen)
        }}
      >
        <ChevronDown className={cn('size-4 transition-transform duration-300', isOpen && 'rotate-180')} aria-hidden="true" />
      </button>

      <div
        id={id}
        className={cn(
          'absolute top-full left-0 min-w-64 pt-2 transition-[opacity,transform] duration-200 ease-[var(--ease-out)]',
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <ul className="overflow-hidden rounded-xl border-t-2 border-orange bg-white py-2 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
          {item.children!.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  cn('block px-5 py-2.5 text-[0.9375rem] transition-colors hover:bg-offwhite hover:text-orange', isActive && 'text-orange')
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ---------------- Mobile ---------------- */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useScrollLock(open)
  const panelRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const first = panelRef.current?.querySelector<HTMLElement>('a, button')
    first?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      hidden={!open}
      className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-white text-ink lg:hidden"
    >
      <nav aria-label="Mobile" className="container-x py-4">
        <ul className="divide-y divide-line">
          {primaryNav.map((item) => {
            const isOpen = expanded === item.label
            return (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="flex min-h-14 flex-1 items-center text-lg font-medium">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className="inline-flex size-12 items-center justify-center rounded-full hover:bg-sand"
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label}`}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                    >
                      <ChevronDown className={cn('size-5 transition-transform duration-300', isOpen && 'rotate-180')} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul hidden={!isOpen} className="mb-3 ml-3 border-l border-line pl-4">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to} className="flex min-h-11 items-center text-base text-stone hover:text-orange">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        <div className="mt-6 flex flex-col gap-4">
          <Button to={headerCta.to} size="lg" className="w-full">
            {headerCta.label}
          </Button>
          {(site.social.linkedin || site.social.instagram || site.contact.phoneDisplay) && (
            <div className="flex items-center justify-between">
              {(site.social.linkedin || site.social.instagram) && <SocialLinks itemClassName="text-ink hover:bg-sand" />}
              {site.contact.phoneDisplay && (
                <a href={site.contact.phoneHref} className="text-sm font-medium">
                  {site.contact.phoneDisplay}
                </a>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
