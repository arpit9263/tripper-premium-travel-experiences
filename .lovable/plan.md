## Trippper — Final Premium Upgrade Plan

A full audit + rebuild of everything below the "Explore Hotel Stays" section, plus header, footer, and all inner pages. The top of the homepage (hero → Hotel Stays) stays as the quality benchmark.

### 1. Header & Navigation (rewrite `SiteHeader.tsx`)

- Holiday-focused nav: **Home · Holidays ▾ · Destinations ▾ · Packages · About · Contact**
  - Holidays mega-menu: Domestic India / International / Honeymoon / Family / Adventure / Luxury / Group / Weekend
  - Destinations mega-menu: featured destinations grid with images, linking to `/destinations` filtered views
- Future-ready dropdown placeholder ("More Services") with disabled "Coming soon" chips for Flights, Hotels, Visa, Travel Insurance
- Top utility bar: phone, email, "24/7 Support", currency toggle (visual only)
- Mobile drawer (Sheet) with accordion nav, all links functional
- Scroll-state transparent → solid (already exists, refine)

### 2. Homepage — sections below "Explore Hotel Stays" (rewrite `index.tsx`)

Replace current basic blocks with:

1. **Upcoming Trips / Fixed Departures** — premium cards with: package title, route, departure date, duration, price, seats-left progress bar, "Book Seat" + "Customize Trip" CTAs. Filter chips (This Month / Next Month / Weekend).
2. **Domestic & International Holidays** — two-column showcase with tabs (Domestic India ↔ International). Each tab: scalable destination grid + "View all" link to `/destinations?region=...`.
3. **Holiday Themes** — bento grid: Honeymoon, Family, Adventure, Luxury, Group, Pilgrimage, Beach, Snow.
4. **Why Trippper** — 6 trust pillars with icons + numbers (15K+ travelers, 120+ destinations, 4.9★ rating, 24/7 support, best price, expert curation).
5. **How It Works** — 4-step horizontal timeline: Discover → Customize → Book → Travel.
6. **Testimonials** — carousel with avatars, ratings, trip taken, quote.
7. **Travel Blog Preview** — 3 latest articles linking to `/blog`.
8. **Newsletter / Plan-My-Trip CTA** — full-width gradient panel with form.

All cards: real hover states, motion, responsive grid.

### 3. Footer (rewrite `SiteFooter.tsx`)

6-column premium layout:

- Brand column: logo, tagline, address, IATA/trust badges, social icons
- Holiday Categories
- Destinations (top 8)
- Company (About, Careers, Press, Partners, Reviews)
- Support (Contact, FAQs, Help Center, Cancellation, Refund)
- Newsletter signup + app store badges (visual)
- Trust strip: payment methods, certifications
- Legal bar: © 2026, Privacy, Terms, Cookies, Sitemap

### 4. Inner Pages — full rewrite

- **About** (`about.tsx`): story timeline, mission/vision, leadership cards, stats strip, awards, CTA
- **Destinations** (`destinations.tsx`): filter sidebar (region, theme, budget, duration), responsive grid, featured carousel, FAQ
- **Packages** (`packages.tsx`): package cards with itinerary preview drawer, sort/filter, comparison table, testimonials
- **Services** (`services.tsx`): all current services + premium icons, process section, why-us
- **Gallery** (`gallery.tsx`): masonry grid with lightbox, category filter
- **Blog** (`blog.tsx`): featured article hero + grid + categories sidebar + newsletter
- **Contact** (`contact.tsx`): contact form (working with toast), office locations, map placeholder, FAQs, support channels

Each page: PageHero, breadcrumbs, multiple sections, FAQ where relevant, testimonials block, final CTA.

### 5. Shared Components (new)

- `UpcomingTripCard.tsx`
- `HolidayThemeBento.tsx`
- `TestimonialsCarousel.tsx`
- `StepsTimeline.tsx`
- `StatsStrip.tsx`
- `FaqAccordion.tsx`
- `BlogCard.tsx`
- `NewsletterCta.tsx`

### 6. Functionality & polish

- All `<Link to>` use real route paths; remove dead `#` links
- Contact + newsletter forms wired with `sonner` toasts
- Carousels: real autoplay, pause-on-hover, arrows + dots
- Filters on Destinations/Packages: real client-side filtering of `src/lib/destinations.ts` (extended with `region`, `theme`, `budget`)
- All routes get proper `head()` meta (title, description, og:*)
- Mobile responsiveness verified at 375 / 768 / 1280  
  
 Holiday Packages are the primary business focus of Trippper. The website should clearly reflect this positioning.
  - Flights, Hotels, Visa Services, Insurance, and other travel services should only appear as future-ready placeholders and should not dominate the user experience.
  - The design quality, spacing, typography, animations, and visual consistency of all sections below "Explore Hotel Stays" must match the premium standard established by the sections above it.
  - Every page, component, route, button, filter, CTA, and navigation item must feel complete, interconnected, and production-ready. No placeholders, unfinished sections, or dead-end experiences should remain.

### 7. Verification

- Build passes
- Headless screenshot check on `/`, `/destinations`, `/packages`, `/about`, `/contact`, `/blog`, `/gallery`, `/services` at desktop + mobile widths
- No console errors

### Out of scope

- No backend / Lovable Cloud (no auth, no DB) — all data is static in `src/lib/`
- No real payments / booking flow — CTAs route to contact / customize forms
- Flights / Hotels / Visa / Insurance remain "Coming soon" chips only