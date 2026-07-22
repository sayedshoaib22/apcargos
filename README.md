# AP Cargos — Production SEO & CRO Package

Built for: **apcargos.in** | Business location: **Mumbai** | Target destinations: **Guntur, Rajahmundry, Tirupati, Andhra Pradesh**

> ⚠️ **Important note on the live site.** apcargos.in currently resolves to a different, already-live business called "AP Travels & Cargo" serving Telangana/AP/Goa/Maharashtra/Karnataka. Everything below is built fresh for the **AP Cargos** brand and targeting described in your brief. Before deploying, decide whether this replaces the current site or launches on a new domain/subdomain, and update DNS/hosting accordingly.

---

## 1. What's in this package

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `services.html` | Full services page (all 7 services, anchor-linked from footer/homepage) |
| `mumbai-to-guntur-cargo.html` | Guntur landing page (Ads + organic) |
| `mumbai-to-rajahmundry-cargo.html` | Rajahmundry landing page (Ads + organic) |
| `mumbai-to-tirupati-cargo.html` | Tirupati landing page (Ads + organic) |
| `privacy-policy.html` | Required for Google Ads approval (lead form data collection) |
| `terms.html` | Terms of Service |
| `robots.txt` | Crawler rules + sitemap pointer |
| `sitemap.xml` | XML sitemap of all indexable pages |
| `manifest.json` | PWA manifest (installable, theme colors) |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icons/*` | Full favicon/PWA icon set, pre-rendered |
| `images/og-image*.jpg` | Social share preview images (placeholders — swap for real photography) |
| `css/styles.css` | Single shared stylesheet (design tokens, no framework bloat) |
| `js/main.js` | Lead-form → WhatsApp handoff, call/WhatsApp click tracking (~3KB, no dependencies) |

**Before going live, replace these placeholders:** phone number `+91 98765 43210`, WhatsApp number `919876543210` in `js/main.js`, email `info@apcargos.in`, the Mumbai office address, and all customer reviews (see §5).

---

## 2. SEO titles & meta descriptions (as implemented)

| Page | Title (≤60 chars) | Meta Description (≤160 chars) |
|---|---|---|
| Homepage | Cargo Services Mumbai to Andhra Pradesh \| AP Cargos | AP Cargos offers safe door-to-door cargo, parcel delivery & household shifting from Mumbai to Guntur, Rajahmundry, Tirupati & Andhra Pradesh. Free quote — call or WhatsApp now. |
| Services | Cargo & Logistics Services Mumbai to Andhra Pradesh \| AP Cargos | Explore AP Cargos' full range of services: door-to-door cargo, commercial cargo, parcel delivery, household shifting, office relocation, goods transport & logistics. |
| Guntur | Cargo Service Mumbai to Guntur \| Door-to-Door Delivery – AP Cargos | Book door-to-door cargo from Mumbai to Guntur with AP Cargos. Household shifting, commercial cargo & parcel delivery. Free quote — call or WhatsApp now. |
| Rajahmundry | Cargo Service Mumbai to Rajahmundry \| Door-to-Door Delivery – AP Cargos | Book door-to-door cargo from Mumbai to Rajahmundry with AP Cargos. Household shifting, commercial cargo & parcel delivery. Free quote — call or WhatsApp now. |
| Tirupati | Cargo Service Mumbai to Tirupati \| Door-to-Door Delivery – AP Cargos | Book door-to-door cargo from Mumbai to Tirupati with AP Cargos. Household shifting, commercial cargo & parcel delivery. Free quote — call or WhatsApp now. |
| Privacy Policy | Privacy Policy \| AP Cargos | Read AP Cargos' privacy policy to understand how we collect, use and protect your personal information when you request a cargo quote. |
| Terms | Terms of Service \| AP Cargos | Terms of Service for AP Cargos — the conditions that apply when you use apcargos.in and book cargo, parcel or shifting services with us. |

Every title follows **Primary Keyword + Location + Brand** so it matches how people search ("cargo service Mumbai to Guntur") and matches Google Ads Quality Score expectations (ad → landing page → keyword relevance).

**To add more landing pages** (e.g. Vijayawada, Visakhapatnam, Nellore), duplicate a location page and swap: title, meta description/OG/Twitter tags, canonical URL, H1, route distance/ETA, FAQ schema city name, breadcrumb schema, and review names. Add the new URL to `sitemap.xml`.

---

## 3. Schema.org implemented

- **Organization / LocalBusiness** — implemented as `["MovingCompany","LocalBusiness"]` on every page, with `address`, `geo`, `areaServed`, `openingHoursSpecification`, `aggregateRating`.
- **FAQPage** — matches the visible on-page FAQ accordion word-for-word (required by Google's structured data guidelines — hidden or mismatched FAQ schema can trigger a manual action).
- **BreadcrumbList** — 2-level breadcrumb (Home → Page) on every subpage.
- **Review / AggregateRating** — the `aggregateRating` block and the visible testimonial cards are **placeholder content**. Google's review-snippet policy requires genuine, verifiable reviews with a way for users to see all reviews. Before launch: (1) replace all names/quotes with real customer reviews, (2) link out to a verifiable source (Google Business Profile, Justdial, etc.) or collect reviews via a review platform, (3) update `reviewCount`/`ratingValue` to your true numbers. Do not publish fabricated ratings — this risks both a Google Search spam action and a Google Ads/Merchant policy violation.

Validate every page with [Google's Rich Results Test](https://search.google.com/test/rich-results) before deployment.

---

## 4. Google Ads readiness

- **Landing page ↔ ad relevance:** each location page's H1, body copy, and FAQ are written around that destination's exact search/ad terms — this is what drives Quality Score.
- **Above-the-fold CTA:** call button, WhatsApp button, and a 4-field lead form are all visible without scrolling on desktop and mobile.
- **Mobile sticky action bar:** fixed Call + WhatsApp bar appears on screens ≤720px so the CTA never disappears while scrolling — this is one of the highest-leverage changes for mobile conversion rate.
- **Required policy pages:** Privacy Policy and Terms are linked in every footer — Google Ads requires a working privacy policy on any site collecting personal data via a form.
- **Destination URLs:** point Search ad groups at the matching location page, not the homepage (e.g. "Guntur" keywords → `/mumbai-to-guntur-cargo.html`).
- **Never mention Bike Transport or Car Transport anywhere** — confirmed absent from all copy, schema, alt text, and metadata in this package. Re-check any future content additions against this before publishing, since Ads policy and your brand scope both depend on it.
- **Conversion tracking:** `js/main.js` fires `gtag('event', 'generate_lead', …)` on form submit and `call_click` / `whatsapp_click` on tap. Add your Google tag (Google Ads + GA4) snippet before `</head>` and import these as **conversion actions** in Google Ads (Tools → Conversions).
- **Phone number consistency:** the same number must appear on the site, in your Google Ads call extensions, and on your Google Business Profile — mismatches hurt both Quality Score and local pack rankings.

---

## 5. Content still needed from you before launch

1. Real phone/WhatsApp numbers (replace `98765 43210` sitewide — search-replace in all `.html` files and `js/main.js`).
2. Real Mumbai office address (used in LocalBusiness schema + footer).
3. Genuine customer reviews (replace all 6 placeholder testimonials + adjust `aggregateRating`).
4. Real photography for `images/og-image*.jpg` and a hero image (currently text-only placeholders/no hero photo — add a `<img>` in the hero section once you have a real truck/team photo, with descriptive `alt` text and `width`/`height` set to avoid layout shift).
5. Google Business Profile listing for Mumbai matching NAP (Name, Address, Phone) exactly — critical for local pack rankings alongside this on-page work.

---

## 6. Lighthouse / Core Web Vitals / Accessibility checklist

Already handled in the code:
- Single ~9KB CSS file, no UI framework, no render-blocking JS above the fold (`main.js` loaded with `defer`).
- `font-display: swap` + `preconnect` on Google Fonts to minimize CLS/FOIT.
- Semantic HTML (`header`, `main`, `nav`, `footer`, `details/summary` for FAQ — no JS required for FAQ to function).
- Visible focus states (`:focus-visible`), skip-to-content link, `aria-label`s on icon-only controls and forms.
- `prefers-reduced-motion` respected (smooth-scroll disabled for users who request it).
- Mobile-first responsive grid, tap targets ≥44px on CTA buttons.

Your remaining steps before a 100/100 run:
- Compress and serve real hero/testimonial photos as WebP/AVIF with explicit `width`/`height` attributes (prevents CLS).
- Self-host the three Google Fonts (or subset them) if you want to remove the external font round-trip entirely — biggest remaining LCP lever.
- Serve over HTTP/2 or HTTP/3 with gzip/brotli compression and long-lived cache headers on `/css`, `/js`, `/images`, `/icons`.
- Set a real `og:image`/`twitter:image` per page once photography is ready (placeholders included now so tags don't 404).
- Run Lighthouse in Chrome DevTools (Mobile, throttled) after deployment and fix anything specific to your hosting environment (e.g., server response time, CDN).

---

## 7. Deployment

This is static HTML/CSS/JS — deploy the whole folder as-is to any static host (Netlify, Vercel, Cloudflare Pages, Nginx, Apache, GitHub Pages with a custom domain, etc.). No build step required.

1. Upload all files to your web root, preserving folder structure (`css/`, `js/`, `images/`, `icons/`).
2. Point `apcargos.in` DNS at the new host.
3. Submit `https://apcargos.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
4. Verify structured data with the Rich Results Test on all 7 pages.
5. Set up Google Ads conversion actions for `generate_lead`, `call_click`, `whatsapp_click`.
6. Set up Google Business Profile for the Mumbai location and request your first genuine reviews.
