# Local Diwali update — 12 October 2026

This describes the initial draft. The user's later pricing/design/SEO revisions supersede it; see [CLIENT_REVIEW.md](CLIENT_REVIEW.md) for the final state and public review link.

The work is saved in this checkout. No commits, pushes or deployments were made.

## Campaign and gifting

- Home campaign banners, Festive Gifts, Build Your Gift and Corporate Gifting now promote Diwali only. The Navratri promotion and deity references were removed from those surfaces.
- The supplied three NJOY images replace the Milad gift box artwork. The old Milad product hash remains an alias for the Diwali Mithai Box so existing shared links continue to work.
- All gifts and hampers use owner quotations. Placeholder gift prices and percentage savings were removed from the catalog, builder and gift messages. Saved gift bags also migrate to quotation pricing. Individual retail jar prices are retained.
- Butter shelf-life data and the visible six-month FAQs were corrected to two months.
- The home dialog appears after the scroll story reaches its last frame, once per browser session. It links to Festive Gifts, Build Your Gift and Corporate Gifting. Escape, the close button and the backdrop dismiss it.
- A small optional sparkle interaction complements the supplied Diwali artwork, diya icons and subtle decorative patterns. Reduced-motion preferences are respected.

## Shared fixes

- Five primary destinations: Home, The Collection, Festive Gifts, Build Your Gift and Corporate Gifting. Journal, Our Story and Contact are in More. Shared navigation is consistent on the articles too.
- More uses a restrained list layout, keyboard focus handling, Escape/backdrop dismissal and shared scroll locking. Its drawer is outside the header so it cannot be clipped by the header's backdrop effect.
- Contact's incorrect Home canonical URL and copied page title were corrected. Dead home-animation code was removed from Contact. Netlify pretty URLs and Home aliases consolidate alternate URLs; the gifting pages were added to the sitemap.
- Missing almond/peanut image aliases were restored without rewriting the articles.
- Other page body content was preserved apart from the specifically requested product/shelf-life corrections. Navigation, metadata, asset loading and broken-link repairs are shared changes.

## Performance and mobile

- The old loader fetched all 521 WebP frames (20,787,672 bytes). The mobile sequence has 131 frames totaling 1,258,244 bytes, about 94% smaller; the desktop sequence totals 3,334,412 bytes, about 84% smaller.
- The initial mobile animation requests four frames, approximately 39 KB including local-server response overhead. Subsequent requests follow the visible position; the queue replaces skipped work and decoded images are capped at 32.
- Native sticky scrolling replaces the GSAP dependency. The phone story spans seven viewport heights of scroll travel; a skip link remains available. Scrolling is not intercepted.
- Canvas edges blend into colors sampled from each actual frame, removing the fixed grey rectangle and stretched background artifacts.
- Responsive WebP campaign and catalog images reduce transfers. Cache headers are configured for deployment. Reduced-motion and data-saving modes show a static jar.
- Layouts were checked at 360, 768 and 1440 pixels. Browser checks cover menu opening/closing, gift selection/reselection, saved gift quotations, the Milad alias and corporate WhatsApp handoff. WhatsApp URLs were intercepted during QA; no messages were sent.
- Static checks cover all 16 HTML pages, local link targets, duplicate IDs, JSON-LD, inline scripts and event handlers. Browser screenshots and local QA scripts are in ignored `output/playwright/`.

## Preview and practical limits

Run `python server.py 5500` from this directory, then open `http://localhost:5500/`. The current task already started this preview server.

Tests use Chromium browser emulation; actual iOS Safari and Android hardware were not available. Production redirects, cache effectiveness and field loading times need verification after an authorized deployment. There is no automated pricing or payment collection: the owner shares a quote through WhatsApp.
