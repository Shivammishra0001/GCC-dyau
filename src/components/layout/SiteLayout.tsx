import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router'
import { Header } from '../navigation/Header'
import { Footer } from './Footer'
import { PageChromeProvider } from './PageChrome'

function HashScroll() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (!el) return
    const t = window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    return () => window.clearTimeout(t)
  }, [hash, pathname])
  return null
}

function RouteFocus() {
  const { pathname } = useLocation()
  useEffect(() => {
    // move focus to main content after route change for keyboard/screen-reader users
    const main = document.getElementById('main')
    if (main && pathname !== '/') main.focus({ preventScroll: true })
  }, [pathname])
  return null
}

function PendingBar() {
  const nav = useNavigation()
  if (nav.state === 'idle') return null
  return <div className="fixed inset-x-0 top-0 z-[60] h-0.5 animate-pulse bg-orange" aria-hidden="true" />
}

export function SiteLayout() {
  return (
    <PageChromeProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <PendingBar />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={(l) => l.pathname} />
      <HashScroll />
      <RouteFocus />
    </PageChromeProvider>
  )
}
