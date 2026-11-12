# DYAU — COMPLETE WEBSITE REDESIGN & DEVELOPMENT (V2)
## Senior UX/UI Design, Full-Stack Engineering & Motion Design Brief

> Supplied by the project owner on 2026-11-11. This V2 document takes priority over older conflicting development instructions (including the source-copy rules in CLAUDE.md that treated the Aventus PDFs as the content source).

### 1. Read all project instructions first
Read CLAUDE.md and this document, inspect installed skills/agents/tools, the project structure, supplied references, existing code and git status. Understand before changing.

### 2. Company brand and business positioning
Brand **DYAU**, monogram **DY**, name **Dyau**. Company origin: **India**. Ambition: serve organisations and clients **worldwide**. Category: recruitment, talent acquisition, executive search and professional talent solutions, subject to the services confirmed by the business. Build around trust, professionalism, global perspective, relationships, expertise, accountability, quality and long-term partnerships. **Do not invent** company history, offices, employee numbers, clients, certifications, statistics or geographies. Where information is missing, create a documented content requirement.

### 3. Strict copyright and originality
The Aventus website and Pinterest references are **visual and structural inspiration only**. Do not copy Aventus branding, logo, photographs, website text, testimonials, team members, clients, history, statistics or case studies. Use Dyau branding, original business details, licensed/authorised photography and original copy. Flag unavailable facts for confirmation.

### 4. Final brand identity
Approved first DY logo (black serif monogram + Dyau wordmark). Colours: #000000, #171717, #FFFFFF, #F7F6F3, accent #FF570A used selectively. Premium, sophisticated corporate identity.

### 5. Visual design direction
Pinterest video/screenshots inspire layout, composition, image placement, transitions and motion. Distinct treatment per section; premium international corporate design, editorial aesthetics, cinematic photography, white space, refined typography, elegant image cards, subtle organic elements, sophisticated animation, one coherent language.

### 6. Homepage hero — top priority
Full-screen (100vh minus navigation), full-width background, balanced composition, **bright, clear, natural** image treatment (no heavy overlays, no oversaturation), subject kept visible, responsive positioning. Eyebrow, large editorial serif headline, supporting paragraph, orange primary CTA, outlined secondary CTA; restrained gradient only where needed. Staggered entrance, subtle image movement, scroll-linked transformation, gentle CTA reveal. Use the approved blue-sky Hawa Mahal photograph only if it is the selected hero asset.

### 7. Natural professional typography
Editorial serif headings (Instrument Serif / Playfair Display); natural readable sans body (Inter / DM Sans / Manrope). Consistent sizes, line heights, weights, tracking and paragraph widths. Compact, comfortable body text — no oversized, bold or widely tracked paragraphs.

### 8. Homepage structure (original Dyau content)
01 Hero · 02 Company introduction (India-origin brand serving organisations worldwide) · 03 Brand credibility (verified capabilities only) · 04 Talent Solutions (image-led horizontal section; candidate services for validation: Executive Search, Permanent Recruitment, Contract and Interim Hiring, Talent Acquisition, Recruitment Advisory) · 05 Our Expertise (confirmed specialisations, distinct imagery) · 06 Results (verified numbers only) · 07 Testimonials (authentic only) · 08 Case Studies (actual projects only) · 09 Insights (original editorial) · 10 Global recruitment CTA · 11 Compact footer.

### 9. Footer redesign
Significantly more compact: reduced padding, clean four-column desktop layout, small logo, compact link structure, readable contact info, slim newsletter row, essential legal links, proper mobile stacking. Target ~220–300px desktop height without unreadable fonts.

### 10. Unique image sourcing
No competitor photography. Unique, relevant, licensed/authorised imagery: Indian modern business districts, global offices, executive professionals, boardrooms, consultations, international skylines, diverse workplaces, modern architecture. Consistent, section-supporting, optimised, alt-texted, mapped in a central asset document.

### 11. Different design for each section
Hero full-screen cinematic · Introduction spacious split · Talent Solutions horizontal cards · Expertise three large photographic panels · Statistics bold but refined · Testimonials editorial carousel · Case Studies asymmetric grid · Insights magazine cards · Employer CTA cinematic banner · Footer compact dark.

### 12. Motion design and scrolling
Motion for React primary (useScroll, useTransform, useInView, useSpring, AnimatePresence, variants); scroll-position transforms and a horizontal scroll section per motion.dev docs; pinned desktop sections with native touch scrolling on mobile; no scroll locking; hero reveal, fade-ups, image masks, hover transitions, subtle parallax, staggered text, animated buttons, testimonial transitions. GSAP only for specialist timelines; never both on one element. Respect prefers-reduced-motion.

### 13. Website pages
Homepage, About Us, Talent Solutions + service pages, Our Expertise + sector pages, Find a Job, Job Details, Apply, Our People, Case Studies (+ individual), Insights, Articles, Reports, Salary Guide (if offered), Contact Us, Hire Talent, Join Our Team (if offered), Privacy Policy. Confirm offerings. **No empty routes. No unsupported claims.**

### 14. Functional requirements
Every control works: menus, dropdowns, mobile menu, tabs, carousels, horizontal controls, forms, search, filtering, pagination, attachments, newsletter, contact submission, social links. Reuse backends if present; otherwise identify what needs integration. Never simulate success.

### 15. Maintainable architecture
Modular folders (app, components, navigation, UI primitives, forms, motion, sections, features, pages, content, services, hooks, styles, assets, docs). Content separate from presentation. Documentation for structure, responsibilities, content updates, image replacement, animation, routing and commands.

### 16. Content and brand accuracy
Only Dyau's verified information. Remove competitor-specific names, history, offices, phone numbers, emails, team, statistics, testimonials, clients and case studies. Known positioning: India-origin, worldwide ambition, recruitment and talent services. Maintain a required-business-information list. Never invent.

### 17. Quality assurance
Test every page: design, responsive layouts, alignment, hero brightness, image positioning, readability, footer height, CTAs, links, dropdowns, tabs, forms, search/pagination, animation smoothness, reduced motion, console, network, production build. Do not claim unverified work.

### 18. Execution approach
Audit → skills → content inventory → missing-information report → asset mapping → design system → homepage → internal pages → motion → responsive → integrations → QA. Proceed autonomously with professional defaults; ask only for genuinely essential missing business information.

### Final expectation
A distinctive, premium, original DYAU website: immersive bright hero, natural typography, section personality within one brand, motion that enhances, compact footer, real-business content, maintainable architecture. A working website, not a prototype.
