# DYAU — Business Information Required

The V2 brief (DYAU_WEBSITE_AGENT_INSTRUCTIONS_V2.md §2, §16) allows only confirmed facts. Everything below is either **pending validation** (a professional default is in place and clearly scoped) or **missing** (the site hides the block or shows an honest interim state). Nothing invented is published.

## Confirmed and in use
| Fact | Source | Where used |
|---|---|---|
| Brand name Dyau, monogram DY | brief §2, §4 | logo lockup, titles |
| Origin: India; ambition: serve organisations worldwide | brief §2 | hero, intro, about, footer |
| Category: recruitment, talent acquisition, executive search, professional talent solutions | brief §2 | positioning copy |
| Brand values: trust, professionalism, global perspective, relationships, expertise, accountability, quality, long-term partnership | brief §2 | credibility grid, about values |
| Colours and typography direction | brief §4, §7 | design tokens |
| Selected hero asset: Hawa Mahal photograph | brief §6 + CLAUDE.md | homepage hero |

## Pending validation (default in place — confirm, rename or remove)
| Item | Default used | Where | File to edit |
|---|---|---|---|
| Service line-up | Executive Search · Permanent Recruitment · Contract & Interim Hiring · Talent Acquisition · Recruitment Advisory (the brief's candidate list) | Talent Solutions section, pages, nav, footer | `src/content/talent-solutions.ts`, `src/content/navigation.ts` |
| Service descriptions and process steps | Original copy describing how each service is generally run; no outcomes or clients claimed | service pages | `src/content/talent-solutions.ts` |
| Sector framework | Technology & Digital · Banking & Financial Services · Engineering & Infrastructure · Healthcare & Life Sciences · Consumer, Retail & Services · Corporate Functions | Expertise section, pages, nav, footer | `src/content/expertise.ts` |
| Practice-area lists per sector | Typical role families (not past placements) | sector pages | `src/content/expertise.ts` |
| "How we work" five-step process | Brief → Search → Assess → Secure → Support | homepage band, about page | `src/content/homepage.ts#howWeWork` |
| Insights themes | Hiring in India · Cross-border talent · Leadership & succession · Better hiring practice | Insights page and homepage teaser | `src/content/pages.ts#insightsPage` |
| Hero headline and intro copy | Original wording built only from the confirmed positioning | homepage | `src/content/homepage.ts` |

## Missing (block hidden or interim state shown)
| Item | Current behaviour |
|---|---|
| General email address | Footer/contact/hire-talent hide the email; forms show "not connected" fallback without a mailto until `site.contact.email` is set |
| Telephone number | Hidden |
| Office address and map location | Hidden; `OfficeMap` renders when `site.contact.map` is set |
| LinkedIn / Instagram / other profiles | Social icons hidden until URLs exist |
| Legal entity name, registration, year founded | Copyright uses "Dyau"; no founding year published |
| Founders / leadership team and profiles | No Our People page (route not created) |
| Client logos, case studies, testimonials | Sections and routes intentionally absent |
| Statistics (placements, years, consultants, completion rates) | No numbers published; process band used instead |
| Live roles and job descriptions, category taxonomy | Job board shows honest empty state + registration; connect `VITE_JOBS_ENDPOINT` or add to `src/content/jobs.ts` |
| Articles, reports, salary guide | Insights page lists themes only; no article routes |
| Careers / Join our team page | Not created (brief: "if offered") |
| Privacy policy text | Interim statement shown; legal copy required before launch |
| Form and newsletter endpoints | `VITE_FORMS_ENDPOINT`, `VITE_NEWSLETTER_ENDPOINT` |
| Logo | Supplied (PNG, transparent) and in use everywhere; a vector or higher-resolution original would improve crispness above ~100px |
| Production domain | `site.url` placeholder `https://www.dyau.com` for canonical/OG tags |
