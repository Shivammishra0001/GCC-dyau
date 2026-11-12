# DYAU — Content Inventory & Originality Statement (V2)

Per the V2 brief (§3, §16) the Aventus PDFs and Pinterest references were used only to understand the structure of a recruitment website. **No Aventus text, statistics, testimonials, team members, clients, case studies, contact details, URLs or photographs remain in the shipped site.** The earlier source-copy mapping (V1) is superseded by this document.

## What was removed in the V2 rebuild
- All page copy taken from the Aventus PDFs (hero, intro, service/sector names and lists, results, testimonials, case-study and article summaries, about-us mission/values, footer lines).
- Statistics (30+, 1000+, 100+, 98%), four testimonials, six case studies, three articles, 12 job listings, 32 team profiles with emails/LinkedIn, phone, address, email and social URLs.
- Every photograph extracted from the PDFs (team, case studies, services, sectors, heroes, insights) and the extracted image folders under `reference/`.

## Where each block of copy comes from now
| Block | File | Basis |
|---|---|---|
| Hero eyebrow / headline / body / CTAs | `content/homepage.ts#hero` | Original; facts limited to "founded in India, serving organisations worldwide, recruitment & talent solutions" |
| Introduction ("From India to the world.") | `content/homepage.ts#intro` | Original; three capability points, no numbers |
| Credibility grid (8 tiles) | `content/homepage.ts#credibility` | The eight brand values named in the brief, each with an original one-line commitment |
| Talent Solutions (5) — names, summaries, intros, "best suited to", process | `content/talent-solutions.ts` | Brief's candidate list; descriptions explain the service type and Dyau's intended way of working. Marked `pending-validation`. |
| Our Expertise (6) — names, summaries, intros, practice areas | `content/expertise.ts` | Professional default sector framework. Marked `pending-validation`. |
| How we work (5 steps) | `content/homepage.ts#howWeWork` | Original process description |
| Insights themes (4) | `content/pages.ts#insightsPage` | Planned editorial themes; explicitly labelled "coming soon" |
| Global CTA | `content/homepage.ts#globalCta` | Original |
| About — story, values | `content/pages.ts#aboutPage` | Original, from positioning and values only |
| Hire Talent — reasons, form labels | `content/pages.ts#hireTalentPage` | Original |
| Contact, Jobs, Privacy | `content/pages.ts` | Original interim statements |
| Footer blurb, newsletter copy, legal line | `content/navigation.ts`, `content/site.ts` | Original |

## Wording guardrails observed
- No claims of history ("since 20xx"), scale ("x consultants"), results ("x placements", "x% success") or clients.
- Service and sector pages describe *how the service is run* rather than *what has been achieved*.
- "Pending validation" items are tracked in `docs/BUSINESS_INFORMATION_REQUIRED.md` and can be renamed or removed by editing one content file each.
