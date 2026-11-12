# DYAU — Sitemap & Route Inventory (V2)

Rule (V2 brief §13): **no empty routes**. A route exists only when it has original, business-safe content or a working function. Everything else is listed under "Not built" with the information needed to build it.

| Route | Page | Status | Content basis | Owner |
|---|---|---|---|---|
| `/` | Home | BUILT | Original copy from confirmed positioning; services/sectors pending validation | `pages/HomePage.tsx` |
| `/about-us` (+ `#how-we-work`) | About Dyau | BUILT | Confirmed positioning + brand values + process (default) | `pages/AboutPage.tsx` |
| `/talent-solutions` | Talent Solutions | BUILT · line-up pending validation | `content/talent-solutions.ts` | `pages/TalentSolutionsPage.tsx` |
| `/talent-solutions/executive-search` · `/permanent-recruitment` · `/contract-interim-hiring` · `/talent-acquisition` · `/recruitment-advisory` | Service pages | BUILT · pending validation | original service descriptions, "best suited to", process | `pages/TalentSolutionDetailPage.tsx` |
| `/our-expertise` | Our Expertise | BUILT · sector list pending validation | `content/expertise.ts` | `pages/OurExpertisePage.tsx` |
| `/our-expertise/technology-digital` · `/banking-financial-services` · `/engineering-infrastructure` · `/healthcare-life-sciences` · `/consumer-retail-services` · `/corporate-functions` | Sector pages | BUILT · pending validation | original sector overviews + practice areas | `pages/ExpertiseDetailPage.tsx` |
| `/find-a-job` (+ `#register`) | Find a Job | BUILT · functional | job board (feed/static) with honest empty state; registration form | `pages/FindJobPage.tsx`, `features/jobs/JobSearch.tsx` |
| `/find-a-job/:id` | Job detail + apply | BUILT · data-driven | renders when a job with that id exists; otherwise 404 | `pages/JobDetailPage.tsx` |
| `/hire-talent` | Hire Talent | BUILT · functional | employer brief form, reasons to work with Dyau | `pages/HireTalentPage.tsx` |
| `/contact-us` | Contact Us | BUILT · functional | enquiry form; contact details/map render when supplied | `pages/ContactPage.tsx` |
| `/insights` | Insights | BUILT | editorial framing, four planned themes, subscribe | `pages/InsightsPage.tsx` |
| `/privacy-policy` | Privacy Policy | BUILT · interim statement | legal text CONTENT REQUIRED | `pages/PrivacyPolicyPage.tsx` |
| `*` | 404 | BUILT | — | `pages/NotFoundPage.tsx` |

## Not built (awaiting business content)
| Intended route | Needs |
|---|---|
| `/our-people`, `/our-people/:slug` | Real team members, roles, photos, links |
| `/case-studies`, `/case-studies/:slug` | Actual Dyau projects with client permission |
| `/testimonials` | Authentic client/candidate quotes with consent |
| `/insights/articles/:slug`, `/insights/reports`, `/insights/salary-guide` | Original articles / reports; salary guide only if offered |
| `/careers` (Join Our Team) | Only if offered; open roles and employer copy |

Navigation (`src/content/navigation.ts`) and the footer link only to built routes; a Playwright link audit confirms no internal link points elsewhere (docs/QA_REPORT.md).
