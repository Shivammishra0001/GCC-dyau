import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type Chrome = { overlayHeader: boolean; hideFooterCard: boolean }
type Ctx = { chrome: Chrome; setChrome: (c: Partial<Chrome>) => void }

const defaults: Chrome = { overlayHeader: false, hideFooterCard: false }
const PageChromeContext = createContext<Ctx>({ chrome: defaults, setChrome: () => {} })

export function PageChromeProvider({ children }: { children: ReactNode }) {
  const [chrome, setState] = useState<Chrome>(defaults)
  // stable setter so consumers' effects do not re-run on every chrome change
  const setChrome = useCallback((c: Partial<Chrome>) => setState((prev) => ({ ...prev, ...c })), [])
  const value = useMemo<Ctx>(() => ({ chrome, setChrome }), [chrome, setChrome])
  return <PageChromeContext.Provider value={value}>{children}</PageChromeContext.Provider>
}

export const usePageChrome = () => useContext(PageChromeContext)

/**
 * Pages with a dark photographic hero call this so the header starts transparent/white
 * and switches to the solid light bar once the user scrolls.
 */
export function useOverlayHeader(enabled = true) {
  const { setChrome } = usePageChrome()
  useEffect(() => {
    setChrome({ overlayHeader: enabled })
    return () => setChrome({ overlayHeader: false })
  }, [enabled, setChrome])
}

export function useHideFooterCard() {
  const { setChrome } = usePageChrome()
  useEffect(() => {
    setChrome({ hideFooterCard: true })
    return () => setChrome({ hideFooterCard: false })
  }, [setChrome])
}
