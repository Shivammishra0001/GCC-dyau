import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

// Code-split every inner page; the homepage stays in the main bundle for fastest first paint.
const lazy = (loader: () => Promise<{ default: React.ComponentType }>) => async () => ({ Component: (await loader()).default })

/**
 * Only routes with real content are registered (V2 brief: no empty routes).
 * Case studies, testimonials, team profiles and articles are added when the business supplies them.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: SiteLayout,
    HydrateFallback: () => null,
    children: [
      { index: true, Component: HomePage },
      { path: 'find-a-job', lazy: lazy(() => import('../pages/FindJobPage')) },
      { path: 'find-a-job/:id', lazy: lazy(() => import('../pages/JobDetailPage')) },
      { path: 'talent-solutions', lazy: lazy(() => import('../pages/TalentSolutionsPage')) },
      { path: 'talent-solutions/:slug', lazy: lazy(() => import('../pages/TalentSolutionDetailPage')) },
      { path: 'our-expertise', lazy: lazy(() => import('../pages/OurExpertisePage')) },
      { path: 'our-expertise/:slug', lazy: lazy(() => import('../pages/ExpertiseDetailPage')) },
      { path: 'insights', lazy: lazy(() => import('../pages/InsightsPage')) },
      { path: 'about-us', lazy: lazy(() => import('../pages/AboutPage')) },
      { path: 'contact-us', lazy: lazy(() => import('../pages/ContactPage')) },
      { path: 'hire-talent', lazy: lazy(() => import('../pages/HireTalentPage')) },
      { path: 'privacy-policy', lazy: lazy(() => import('../pages/PrivacyPolicyPage')) },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
