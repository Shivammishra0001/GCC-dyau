DYAU Website — Agent Instructions & UX/UI Development Blueprint
Project: DYAU (DY) — GCC recruitment and talent solutions website
Document purpose: Single source of project direction for Claude Code and human developers
Primary rule: Preserve the existing project and its real business content. Improve the design and experience without losing working functionality.
0. Read this before doing any work
You are the lead product designer, UX architect, frontend engineer, motion designer, accessibility specialist and QA engineer for the DYAU website. Work to the standard expected of a senior developer with 10+ years of professional experience.

Do not behave like a generic website generator. Do not create only a homepage mockup. Do not change frameworks or rewrite the application before understanding it. Do not invent copy, statistics, customer logos, testimonials, team members, job listings or business claims.
Mandatory first actions
1. Read the repository's root CLAUDE.md and every applicable nested CLAUDE.md / AGENTS.md before changing files.
2. Read this document completely.
3. Inspect installed Claude Code skills and project agents. Read the relevant SKILL.md files for UI UX Pro Max, GSAP, Motion and 21st.dev if they are installed and available.
4. Inspect package.json, all lockfiles, build configuration, routes, entry points, current styles, API clients, backend integrations and tests.
5. Run git status and preserve all pre-existing user changes. Never reset, clean, overwrite or delete uncommitted work.
6. Inspect every supplied PDF, screenshot, image and video frame that is accessible in the project. Build a source inventory before implementation.
7. Produce a short audit and implementation plan. Then proceed in well-defined phases; do not repeatedly ask for approval on routine design decisions.
8. If an essential asset, credential, API or fact is genuinely missing, record the exact dependency and continue with independent work. Never fake a working integration.
Keep the agent on the approved path
The approved scope is: complete DYAU recruitment website, all source-backed pages and sections, modern differentiated UX, meaningful animation, functional controls, maintainable code and verified quality.

Do not introduce unrelated features, change the business model, invent new service lines, add unrelated sustainability or travel content, or redesign the brand identity without instruction.
1. Product and brand direction
Brand
- Brand name: Dyau
- Short monogram: DY
- Approved logo direction: the first selected black DY monogram with the Dyau wordmark.
- Primary logo treatment: black on white / warm off-white.
- Inverse logo treatment: white on dark photographic or charcoal backgrounds.
- Accent colour: warm DYAU orange, approximately #FF570A.
- Core neutrals: ink / charcoal, white, warm off-white and restrained grey.
Do not use the former Aventus logo in the redesigned site. Do not invent an etymology or meaning for Dyau. Use the supplied approved logo asset when available; do not approximate it in text if an approved vector asset exists.
Brand personality
Confident, internationally minded, specialist, human, precise, warm, premium and credible. The site should feel like an established GCC executive-search and recruitment consultancy—not a generic SaaS landing page, travel business or sustainability agency.
Visual design direction
Use the Pinterest reference video frames as the visual design reference, not as content to copy wholesale:
- Cinematic, photographic hero with strong contrast and restrained copy.
- Spacious light introduction section.
- Centered editorial introduction / trust statement.
- Large image-led service cards.
- Clear section-specific layouts rather than repeating one card template everywhere.
- Premium photography, refined type, generous whitespace and precise alignment.
- Subtle organic forms / gradient blobs only when they support the composition.
- Orange used as an accent for CTAs, small rules, active states and key indicators—not as a full-page fill.
The green gradient surrounding the website preview in the supplied video montage is the video presentation background. It is not part of the site design and must not be reproduced.
2. Reference files and asset handling
First locate these files in the repository, its reference folder or the supplied attachments. Do not hard-code temporary /mnt/data paths into the application. Copy approved assets into the project's own asset directories and use stable relative paths.
Reference	Intended use	Instruction
image(20261110-125305).png	Hawa Mahal / Jaipur architectural photograph	Latest supplied hero-image candidate. Use as the hero visual if this is the user's selected first-section image. Preserve composition; optimise a production copy.
-9(1).jpg	Orange sunset beach photograph	Earlier approved hero-image option. Treat as an alternate hero asset; do not combine two different hero photographs. Prefer the latest explicitly selected image after checking the user's current direction.
image(20261110-125311).png	Tall montage of reference website frames	Study section progression, spacing, photo cards, white intro band and “What we offer” layout. This is a design reference, not a website screenshot to paste into the page.
dyau_reference_montage.jpg and dyau_reference_frames/	Extracted Pinterest video frames	Inspect all available frames in order and infer the actual site's visual transitions and section layout.
Screenshot 2026-11-10 at 6.14.11 PM.png	Small visual/copy reference	Contains the phrase “Book Your Modern Hobbit Retreat Today!”. This phrase appears unrelated to a GCC recruitment consultancy. Preserve it in the source inventory, but do not publish it in Dyau recruitment content unless the user explicitly confirms its relevance and intended placement.
Original Aventus PDFs	Business content source	Extract, map and verify every available page, section and content block. Do not use generated copy in place of source text.
Approved DY logo asset	Brand	Use the exact approved black DY / Dyau lockup and a reversed version only if supplied.


Asset requirements
- Never use watermarked stock imagery in production.
- Verify commercial usage rights for stock images, videos, client logos, headshots and third-party marks.
- Do not use generated or illustrative client logos as real customer endorsements.
- Do not fabricate team headshots or profile identities.
- Keep original source files untouched. Create optimised derivatives for the site.
- Use descriptive names such as dyau-hero-hawa-mahal.webp, dyau-hero-sunset.webp, service-retained-search.webp and expertise-financial-services.webp.
- Provide alt text for informative images; use empty alt text for purely decorative imagery.
- Use responsive image sources where appropriate (srcSet, sizes, AVIF/WebP fallbacks).
- Do not autoplay audio. Any background video must be muted, playsInline, optimised and paired with a poster image.
3. Content governance: exact source copy
The supplied Aventus PDFs are the primary source of truth for the website's business content. The accessible source set includes documents for:
- GCC Recruitment Specialists / homepage
- About Aventus
- Talent Solutions
- GCC Recruitment Expertise
- Latest Jobs in the UAE & GCC
- Meet the Aventus Team / Our People
- Recruitment Case Studies
- Hire Specialist Talent in the UAE & KSA
Also inspect all other PDFs and reference pages supplied with the project. Some page content may be contained in page screenshots rather than extracted PDF text; inspect the rendered page images where needed.
Exact-copy rules
1. Preserve headings, subheadings, paragraph wording, punctuation, numbers, service names, role titles, dates, location labels, testimonials, attributions, form labels, placeholders, CTA labels and footer content exactly as supplied.
2. The permitted rebrand change is to replace company-specific references to “Aventus” with “Dyau” where the sentence refers to the business being rebranded. Make the smallest grammatically necessary edit only.
3. Do not change third-party company names, client names, personal names, testimonial attributions, historical references, source titles or quoted statements just because they contain a name.
4. Do not invent a meaning for “Dyau”. If a source section explains “Aventus”, do not rewrite it as an invented Dyau story. Flag it for a brand-approved replacement or omit only with explicit direction.
5. Do not invent logos, clients, numbers, testimonials, team members, job listings, locations, office addresses, credentials or case-study outcomes.
6. If source content conflicts across PDFs, keep a source matrix showing the page, exact wording, filename and page number. Do not silently reconcile different versions.
7. If content is missing, mark it CONTENT REQUIRED in the content inventory and continue with other work.
8. For every rendered page, maintain a section-level source mapping so a reviewer can verify the text against the source PDF.
Specific copy visible in the reference frames
The Pinterest reference imagery visibly contains phrases such as “Helping Sustainable Brands Grow Smarter”, “Work with a team that gets it.” and “What we offer”. The sustainable-brands statement is not relevant to Dyau's recruitment business and must not be used as Dyau positioning. “Work with a team that gets it.” and “What we offer” may be treated as optional visual/copy inspiration only; use them only if they are approved as new Dyau copy. The source PDFs remain authoritative for required business copy.

The small supplied screenshot phrase “Book Your Modern Hobbit Retreat Today!” is also unrelated to recruitment. Record it in the reference inventory and request confirmation before assigning it to any Dyau page. Do not put it into the homepage by default.
4. Information architecture and route inventory
Discover all live reference routes and all accessible PDF page references. At minimum, audit and implement the following pages when the source material supports them:
Global
- Home
- Find a Job
- Talent Solutions landing page
- Individual Talent Solutions pages
- Our Expertise landing page
- Individual expertise pages
- Insights landing page
- Articles / Blog
- Individual article pages
- Salary Guide
- Reports
- About Us
- Our People / Team
- Individual team profiles, only when source-backed
- Testimonials
- Case Studies landing page
- Individual case studies
- Contact Us
- Hire Talent
- Join Our Journey / Careers
- Force for Good
- Get to Our Office / location section
- Privacy Policy
Do not claim that an inaccessible page has been recreated. Add discovered routes to docs/SITEMAP.md with source status: PDF-SUPPORTED, LIVE-REFERENCE-VERIFIED, CONTENT-MISSING or NOT-AVAILABLE.
Suggested route shape
Use routes consistent with the current application and the live reference where possible. Example only:
/
/find-a-job
/talent-solutions
/talent-solutions/retained-search
/talent-solutions/contingent-recruitment
/talent-solutions/hr-advisory-rpo
/talent-solutions/project-interim-hiring
/talent-solutions/value-based-recruitment
/our-expertise
/our-expertise/financial-services
/our-expertise/digital-technology
/our-expertise/corporate-functions
/insights
/insights/articles/:slug
/insights/salary-guide
/insights/reports
/about-us
/our-people
/case-studies
/case-studies/:slug
/contact-us
/hire-talent
/careers
/force-for-good
/privacy-policy
Do not create empty or fake pages just to make every route exist. Build the route only when there is source content or a clearly defined functional requirement; otherwise mark it pending.
5. Homepage section design specification
Each section must have its own layout treatment while remaining within one coherent brand system. Do not make every section look like the same three-card template.
Section 1 — Cinematic hero
- Use the latest approved first-section image. The Hawa Mahal image is the latest supplied hero candidate; the sunset beach image is the earlier alternative. Do not mix them in one background. Resolve the final selected asset from the user's latest instruction and keep the other as an alternate.
- Full-width, approximately 80–95vh on desktop, adjusted for the navigation and responsive layout.
- Dark, controlled gradient overlay to preserve text contrast.
- Black DY / Dyau logo on a light navbar, or approved reversed logo if the header overlays a dark image.
- Source-backed eyebrow, headline, description and CTA labels.
- Use a restrained entrance sequence: eyebrow, heading, body, CTAs.
- Subtle background scale or parallax linked to scroll progress.
- Provide static poster / image fallback and disable parallax for reduced-motion users.
- Do not add unapproved carousel slides. If there is only one approved image, do not create fake pagination.
Section 2 — Trust / proof strip
- Light background, compact and editorial.
- Use verified customer logos only if their use is authorised and the PDF/live source supports them.
- Otherwise use factual trust points from source copy; do not fabricate client names or logo rows.
- Use restrained divider lines and subtle entrance motion.
Section 3 — Centered introduction / “Work with a team” pattern
- Spacious white / warm-white area inspired by the reference video.
- Center the supplied company introduction with a readable line length.
- Use a distinctive serif display heading, sans-serif body and carefully spaced proof points.
- Reveal the content as it enters view; avoid over-animating every line.
- Use only exact source-supported copy or explicitly approved new copy.
Section 4 — Talent Solutions / “What we offer” card sequence
Use the reference's horizontal image-card concept but make it about Dyau's real service lines:
1. Retained Search
2. Contingent Recruitment
3. HR Advisory & RPO
4. Project & Interim Hiring
5. Value-Based Recruitment
Design:
- Large image cards with a consistent visual ratio.
- Clear service heading and original source description on the relevant detail page.
- Strong readable text contrast.
- Orange arrow / CTA indicator.
- Horizontal scroll on desktop if appropriate; native touch carousel on mobile.
- Cards must remain keyboard accessible.
- Each card links to its real service detail route.
- Add a section-level progress indicator only if it reflects actual carousel/scroll state.
Section 5 — Our Expertise
Use a distinct layout from Talent Solutions: a split editorial introduction plus three large photographic sector cards or a responsive grid.

Required categories:
- Financial Services
- Digital, Transformation & Technology
- Corporate Functions
Use exact available specialisations under each category. Do not invent subcategories. Card photography must be relevant to the sector, professionally licensed and visually consistent.
Section 6 — Results That Speak
- Use the verified source statistics only.
- The current source homepage includes 30+, 1,000+, 100+ and 98%; verify each label and exact wording against the PDFs before rendering.
- Use a distinctive dark or charcoal band to create contrast with the surrounding light sections.
- Optional count-up only when it does not mislead and only once on entry.
- Respect reduced-motion preferences.
Section 7 — Testimonials
- Use a clean editorial quote layout, not fake review cards.
- Preserve quote wording and attribution exactly.
- Use source-supported photos only.
- Carousel controls must work and be keyboard accessible.
- Avoid autoplay by default; if used, pause on hover/focus and provide controls.
Section 8 — Case Studies
- Use image-led feature cards or one large feature plus smaller supporting cards.
- Preserve all verified case-study titles, summaries and outcomes.
- Provide working “Learn More” / original CTA actions.
- Use reveal and restrained image hover movement.
Section 9 — Insights
- Use an editorial magazine layout with a featured story and supporting article cards.
- Preserve exact title, category, date and summary where supplied.
- Ensure links resolve to actual article / report / salary guide pages.
- Avoid invented publication dates, authors or read times.
Section 10 — Employer CTA
- Use a bold contrasting full-width band with a relevant photograph or restrained gradient.
- Use the original employer CTA content and working links to the enquiry form / Talent Solutions page.
Section 11 — Footer
- Deep charcoal or black footer with clear column hierarchy.
- DY / Dyau branding.
- Source-backed company statement, service links, expertise, company pages and contact details.
- Newsletter must be integrated with a real endpoint or clearly marked as pending.
- Privacy Policy link must work.
- Avoid clutter and ensure mobile stacking is readable.
6. Typography and visual variety
Choose font families that fit the job of each section, but keep the overall system restrained. Recommended starting direction:
- Display / editorial headings: Instrument Serif or DM Serif Display.
- Body and UI: Manrope or DM Sans.
- Navigation / labels: the same sans-serif family with consistent weight and tracking.
Use no more than two primary font families, plus a weight/italic variation where helpful. Self-host licensed font files when practical; otherwise use an appropriately configured font provider and font-display: swap.

Create section variety through layout, backgrounds, photography, grid, composition and typography scale—not by changing the brand palette randomly:
- Hero: cinematic image / dark overlay.
- Introduction: centered, white, generous whitespace.
- Talent solutions: horizontal photo cards.
- Expertise: split editorial + sector cards.
- Results: dark full-width stat band.
- Testimonials: light editorial quote treatment.
- Case studies: image-led feature grid.
- Insights: magazine-style layout.
- CTA: warm photographic / dark banner.
- Footer: charcoal information architecture.
Do not give every section a different unrelated font. Keep the design system coherent.
7. Motion and scrolling specification
Primary engine: Motion for React. Use its official React APIs and documentation:
- Scroll animations: https://motion.dev/docs/react-scroll-animations
- useScroll: https://motion.dev/docs/react-use-scroll
- Reduced motion: https://motion.dev/docs/react-use-reduced-motion
Motion rules
1. Use useScroll and useTransform for scroll-linked effects such as hero parallax, image scaling, progress indicators and horizontal galleries.
2. Use whileInView / useInView for scroll-triggered reveal effects.
3. Use useSpring only where smoothing improves the response; avoid making controls feel laggy.
4. Use AnimatePresence for route transitions or presence-based UI only when it does not delay navigation.
5. Use CSS for simple hover, focus and color transitions.
6. Use GSAP + ScrollTrigger only for complex timeline / pinning scenes that materially need it. Do not let GSAP and Motion animate the same element or transform.
7. Avoid one animation library per section. Establish a common motion language and reusable variants.
8. Animate transform, opacity and other compositor-friendly properties whenever possible. Avoid animating expensive layout properties on every scroll frame.
9. Respect prefers-reduced-motion using Motion's reduced-motion support and CSS media queries. Remove parallax, pinned scroll and large translations for reduced-motion users.
10. Never block page navigation or core controls while animations complete.
11. Do not hijack normal vertical scrolling. Horizontal sections must have a clear exit and must not trap mobile users.
12. Avoid excessive animated blobs. Use one or two subtle, low-contrast decorative shapes only where they strengthen the composition.
Required motion map
Area	Motion
Hero	Text stagger, subtle image parallax / scale, CTA reveal
Intro	Once-only reveal, small proof-point stagger
Talent Solutions	Scroll-linked horizontal cards on desktop; touch carousel on mobile
Expertise	Card reveal / image mask; no forced pin if not needed
Statistics	Once-only count-up from exact source values
Testimonials	Controlled fade/slide between real quotes
Case studies	Staggered image reveal, restrained hover zoom
Insights	Editorial reveal with minimal movement
CTA	Subtle background parallax only where safe
Footer	Small opacity reveal; no complex effects


Create shared motion primitives and central settings rather than copy-pasting animation values into every component.
8. Maintainable architecture and file structure
First preserve the current architecture if it is already sound. Do not migrate a working project merely to match this suggested tree. If the project is React + Vite, use a feature-oriented structure similar to:
project-root/
├── CLAUDE.md
├── DYAU_WEBSITE_AGENT_INSTRUCTIONS.md
├── README.md
├── docs/
│   ├── SITEMAP.md
│   ├── CONTENT_SOURCE_MAP.md
│   ├── DESIGN_SYSTEM.md
│   ├── MOTION_GUIDE.md
│   ├── ASSET_INVENTORY.md
│   └── QA_REPORT.md
├── public/
│   └── assets/
│       ├── brand/
│       ├── images/
│       │   ├── hero/
│       │   ├── services/
│       │   ├── expertise/
│       │   ├── team/
│       │   ├── case-studies/
│       │   └── insights/
│       ├── video/
│       └── graphics/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers/
│   ├── components/
│   │   ├── ui/
│   │   ├── navigation/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── motion/
│   ├── sections/
│   │   └── home/
│   │       ├── HeroSection.tsx
│   │       ├── TrustStrip.tsx
│   │       ├── IntroductionSection.tsx
│   │       ├── TalentSolutionsSection.tsx
│   │       ├── ExpertiseSection.tsx
│   │       ├── ResultsSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── CaseStudiesSection.tsx
│   │       ├── InsightsSection.tsx
│   │       ├── EmployerCTASection.tsx
│   │       └── HomeFooter.tsx
│   ├── features/
│   │   ├── jobs/
│   │   ├── talent-solutions/
│   │   ├── expertise/
│   │   ├── team/
│   │   ├── case-studies/
│   │   ├── insights/
│   │   └── contact/
│   ├── pages/
│   ├── content/
│   │   ├── homepage.ts
│   │   ├── navigation.ts
│   │   ├── talent-solutions.ts
│   │   ├── expertise.ts
│   │   ├── team.ts
│   │   ├── testimonials.ts
│   │   ├── case-studies.ts
│   │   └── insights.ts
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── motion.css
│   └── types/
├── tests/
└── package.json
If the current repository is not React, adapt these principles to its existing framework rather than introducing a forced migration.
Component ownership rules
- pages/ owns route composition, not large blocks of UI markup.
- sections/ owns page-level editorial sections.
- features/ owns domain functionality (jobs, service detail pages, team, insights and forms).
- components/ui/ owns generic primitives (button, input, badge, card, modal, carousel controls).
- components/motion/ owns reusable motion wrappers and variants.
- content/ owns source-verified copy and labels—not layout code.
- services/ owns API calls and data integrations.
- styles/ owns tokens and global foundations.
A developer must be able to change a service description in content/talent-solutions.ts without rewriting its card component. A developer must be able to restyle the card component without editing source copy. Avoid god components and giant files.
9. Functional behaviour
Every visible control must have a defined, tested action:
- Header navigation and all dropdown destinations
- Mobile menu open / close and keyboard behaviour
- Find Talent / Hire Talent actions
- Find a Job navigation
- Service cards and expertise cards
- Carousel previous / next buttons and indicators
- Job search fields, filters and pagination
- Job detail and apply actions
- Employer / candidate selector tabs
- Contact and enquiry forms
- CV upload validation
- Newsletter subscription
- Team email / LinkedIn links where source-backed
- Case-study and insight article links
- Privacy Policy and footer links
Forms must use existing backend endpoints where they exist. Do not fake submission success. Provide validation, loading, server error and success states. If an endpoint or credential is missing, document it as a blocked integration and leave the form in a safe, honest state.

Use lucide-react consistently if it is already compatible with the project. Icons must be labelled when interactive and decorative icons must be hidden from assistive technology.
10. Responsive design and accessibility
Test at minimum:
- Large desktop: 1440px and above
- Laptop: 1280px
- Tablet: 768px
- Mobile: 390px and 360px
Requirements:
- No horizontal page overflow.
- Mobile navigation works by keyboard and touch.
- Horizontal service cards are swipeable on mobile.
- Pinned desktop animation degrades to normal touch scrolling on narrow screens.
- Hero crop preserves the important part of the image; adjust object-position per breakpoint.
- Heading line breaks remain intentional.
- Controls have visible focus styles and sufficient touch targets.
- Form inputs have labels and usable error messages.
- Use semantic landmarks and correct heading hierarchy.
- Follow reduced-motion preferences.
- Maintain WCAG-appropriate text contrast.
11. Installation and tool rules
Before installing anything, inspect the current package manager, Node version, lockfile and dependencies. Use only the package manager already used by the project. Never create mixed npm / pnpm / yarn lockfiles.

Potential setup commands—run only when needed and only after confirming project compatibility:
# Claude Code — current official installer
curl -fsSL https://claude.ai/install.sh | bash
claude --version
claude doctor

# UI UX Pro Max skill
npx ui-ux-pro-max-cli init --ai claude

# GSAP agent skill (auto-detects installed coding agent)
npx skills add https://github.com/greensock/gsap-skills

# 21st.dev MCP config for Claude Code, if required
npx @21st-dev/cli@latest init --client claude --write

# 21st.dev skills, if required
npx @21st-dev/cli skills install --global
For a confirmed React + Vite project, packages may include:
# Only install missing packages
npm install motion lucide-react react-router-dom

# Tailwind CSS v4 with Vite, only if Tailwind v4 is the chosen/current setup
npm install tailwindcss @tailwindcss/vite

# GSAP runtime only when advanced GSAP animation is actually required
npm install gsap @gsap/react
Do not install all packages automatically. Check package.json first. Do not upgrade React, Vite, Tailwind, router or animation libraries without checking compatibility and the current lockfile. UI libraries must be selected based on quality, accessibility, dependency cost and compatibility—not novelty.
12. Testing and quality gates
Before implementation
- [ ] Root and nested instructions read
- [ ] Skills inspected and relevant ones read
- [ ] Git status recorded
- [ ] Stack and package manager identified
- [ ] Routes and APIs inventoried
- [ ] PDF and media source inventory completed
- [ ] Content gaps recorded
- [ ] Design and motion plan documented
Before marking each page complete
- [ ] Correct route exists
- [ ] Original section order checked
- [ ] Text compared to source
- [ ] Images are approved and licensed
- [ ] All links work
- [ ] All buttons work
- [ ] Forms validate and use the correct integration
- [ ] Mobile layout checked
- [ ] Keyboard and focus behaviour checked
- [ ] Reduced-motion behaviour checked
- [ ] No browser console errors
Final QA
- [ ] Production build succeeds
- [ ] All required routes tested
- [ ] No broken internal links
- [ ] No fake / placeholder content remains
- [ ] Content source map complete
- [ ] No unresolved critical console or network errors
- [ ] Forms tested against real integrations or clearly marked blocked
- [ ] 360px, 390px, 768px, 1280px and 1440px layouts reviewed
- [ ] Animation performance reviewed
- [ ] Reduced-motion experience reviewed
- [ ] SEO metadata checked
- [ ] README and docs updated
- [ ] Final git diff reviewed; no unrelated edits
Report PASS, FAIL or NOT VERIFIED honestly. Never claim that an untested feature is working.
13. Required project documentation to maintain
Create and keep these files current:
- docs/SITEMAP.md — all routes, source status and page owner.
- docs/CONTENT_SOURCE_MAP.md — exact PDF filename, page number, section and implemented component.
- docs/DESIGN_SYSTEM.md — colours, type scale, spacing, grids, components and image rules.
- docs/MOTION_GUIDE.md — animation patterns, ownership, reduced-motion behaviour and performance rules.
- docs/ASSET_INVENTORY.md — filename, source, licence status, dimensions, intended section and alt text.
- docs/QA_REPORT.md — tests, status, failures, blocked integrations and unresolved content gaps.
- README.md — local setup, development, build, test and deployment instructions.
14. Execution sequence and deliverables
Execute in this order:
1. Repository and skills audit.
2. Asset and PDF content inventory.
3. Sitemap and source-to-section mapping.
4. Design system and section-specific wireframe plan.
5. Homepage hero and global navigation.
6. Homepage sections.
7. Internal page templates and all source-backed pages.
8. Forms, links, search, filters and API integrations.
9. Motion and responsive refinement.
10. QA, accessibility, build and documentation.
Do not stop after the audit or wireframes. Once the audit is complete, implement the work in logical, reviewable stages. Do not ask the user to repeat information already available in the supplied PDFs, images or existing code.
Final acceptance criteria
The result must be recognisably DYAU, visually distinctive, relevant to GCC recruitment, faithful to verified source copy, responsive, accessible, smooth to navigate, functionally complete and maintainable by another developer. The homepage should feel cinematic; inner pages should each have a layout suited to their content. Motion must support the story rather than distract from it.

Keep the project on this path. Preserve what works. Verify before claiming completion