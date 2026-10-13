# NJOY client review — 13 October 2026

Public review link: **https://participate-blank-difficulties-associate.trycloudflare.com/**

The preview was restarted on 13 October 2026. This new link replaces the expired temporary link. All five main pages and the updated banner/animation assets were verified to return HTTP 200. GitHub publication was authorized on 13 October 2026; the validation below records the preview work before publication.

The link serves this local checkout through Cloudflare Tunnel. It remains available while this computer, the review server and tunnel process are running. It is a temporary review link, not the production deployment. The preview returns noindex headers and a blocking robots.txt; production SEO files remain separately ready for nutdelicacy.in.

## Revised behavior

- Original fixed-price duos and combos are retained, including Everyday Duo ₹399 and Classic Duo ₹595. Following the latest client comments, custom 2/3/4-jar gift boxes have no displayed or cart price: they are quoted by the owner. Existing custom bulk sets still require quotes.
- Upcoming, unlaunched products show Coming soon and have no published price or order action. Previously saved upcoming selections are treated as coming-soon inquiries, rather than fixed-price purchases.
- The builder uses the eight launched individual products only. Pure hazelnut, walnut and walnut-almond previews were removed from the builder.
- The Diwali Mithai Box has no invented price. It can be added to cart alongside fixed-price products.
- Catalog cards, home product cards, product dialogs, product detail pages and the gift builder offer Add to cart. The cart offers Get quote on WhatsApp.
- A mixed cart's WhatsApp message lists each fixed item with unit price, quantity and line total; lists Diwali/custom selections separately for quotation; and labels the fixed-price subtotal as excluding quote items. Full delivery details are optional for an initial quote.
- Removed the long owner-pricing explanation and shelf-life line from the festive hero. Shelf life remains correctly documented in product information and FAQs where appropriate.
- Final copy corrections: plain cocoa wording, generic almond/cashew descriptions, and roasted peanuts with dark chocolate instead of coconut-sugar copy. Matching product descriptions and product-page metadata were updated.

## Design

- Festive Gifts has a separate responsive landscape editorial banner, generated using the built-in Imagegen tool with the real NJOY jar photographs as identity references. WebP sizes: 640, 1000 and source-native 1536 pixels. Original PNG: `assets/diwali/editorial-banner.png`. Prompt and detailed notes: `output/banner-generation.md`.
- Interactive diya ritual: a more prominent celebration panel, hanging lights and three short firework bursts. The canvas stops after 2.8 seconds, respects reduced motion, and never intercepts taps. The manifesto has glowing string lights.
- Collection: four flavour buttons change the jar, product name, description and product link.
- Build Your Gift: on page load, the box assembles, fills, closes, wraps its ribbon and reveals Happy Diwali. Selecting 2/3/4 jars replays it. The mobile entrance replays once when visible; reduced motion shows the completed gift immediately. The selected size transfers to the actual builder.
- Corporate Gifting: Branded opens by default. Amazon, Rapido and Campa cycle only within the packaging preview, as requested; there is no sample-name button list or customer endorsement claim. Editing stops the cycle. The photo has three NJOY labelled jars, permanent NJOY branding and a separate editable centre lid. Classic/Signature hide the added company-name overlay. The quote CTA scrolls to the inquiry form and transfers the actual chosen brand and quantity. Emoji benefit icons were replaced with SVG line icons.
- Catalogue, featured, flavour and box cards have original gold diya/paisley mandalas and warm seasonal framing inspired by the supplied design reference. The watermarked reference was not used as a site image.
- The home popup has its own large responsive NJOY gift/jar/diya/rangoli photograph, separate from the product poster. All three jars and the branded gift box stay visible through uncropped presentation. Updated approved-direction asset prompts: `output/gifting-banners-v4.md`; images `assets/diwali/popup-celebration-v4-*` and `corporate-packaging-v4-*`.

## Animation

- Sharper assets at twice the previous sampled frame density: 261 frames, 800px mobile and 1280px desktop, preserving the full original story.
- Mobile set totals 5.03 MB; desktop 11.68 MB. This deliberately trades some of the previous compression for improved quality; both remain smaller than the original 20.79 MB sequence.
- Frames are requested around the visible scroll position, not downloaded all at once. Three requests run at a time; decoded sharp-frame cache is limited to 16, and stale requests are cancelled.
- A single 66-keyframe preview sheet (244 KB mobile / 469 KB desktop) supplies interpolated fallback motion while sharp frames are downloading. It trades temporary preview sharpness for continuity on slow connections. The initial sharp-frame preload is limited to two frames until that sheet is ready.
- The supplied 16.23-second recording showed brown/green bands because flying nuts contaminated the sampled corner colours, which were then stretched across the viewport. The renderer now uses a stable neutral studio gradient, with prepared feathered masks to blend image boundaries. This was a rendering bug and was independent of tunnel hosting.
- The scroll paint loop reuses prepared bitmaps and paints at most once per browser frame. Reduced-motion and data-saving modes preserve the static fallback and do not download the preview sheet.
- Both local preview servers now accept a larger pending connection queue (128) to prevent asset request refusals during bursts. The public review server runs as one background process. A tunnel remains dependent on this computer/internet; it is not a production CDN performance guarantee.

## SEO and Google files

- Twelve new original, researched guides; 21 Journal articles in total.
- Twenty static individual product URLs under `/shop/` so product content, prices and ingredients are visible without a JavaScript modal.
- Unique titles/descriptions, consistent canonical URLs, social metadata, internal links and appropriate Organization/WebSite/WebPage/BlogPosting/BreadcrumbList/ItemList/Product/Offer structured data.
- Quote-only products intentionally have no ₹0 Offer and no fabricated reviews or star ratings.
- Root `sitemap.xml`: 48 unique production URLs. Root `robots.txt`: production crawl rules.
- `NJOY_Google_Search_Console_Kit.zip`: sitemap, robots, keyword map, research notes and Search Console instructions. Actual DNS/HTML verification needs Google's account-specific token. Submission has not been performed.

## Validation

- Static checks: all 48 pages, local links, duplicate IDs, JSON-LD, 19 inline scripts and 541 event handlers; no failures.
- SEO checks: all 48 canonical URLs match the sitemap; one H1 per page, unique titles, present descriptions and valid positive fixed-price Offers; no failures.
- Latest browser layouts/interactions checked at 360, 768 and 1242 pixels; no horizontal overflow, missing assets or JavaScript errors. Earlier rounds also checked 578, 1024 and 1440 pixels.
- Mixed cart verified with Everyday Duo ₹399 plus Diwali Mithai Box: message retains ₹399 × 1 = ₹399 and asks for the Diwali quotation separately.
- Gift-builder quotation, eight launched flavours, automatic wrapping, corporate branding/quantity transfer, flavour switching, Journal filters, article layout, static product Add to cart, scroll sequence, finale popup and reduced-motion fallback checked.
- Public preview verified with HTTP 200, responsive banner rendering and noindex headers.
- Public preview tested cold with 180ms latency and 300KB/s download throttling: sharp canvas ready at ~2.0s and the complete low-bandwidth preview sheet ready at ~4.8s. After that initial load, six forward/reverse positions tracked within four frames after 400ms, with no missing resources or JavaScript errors. Full-quality frames replace the temporary preview as available. This is one browser/network simulation, not a physical-device guarantee.
- Eleven local scroll positions kept the lower margin at neutral RGB(209,209,209), including the pouring scene. No brown/green tint returned. Public tests confirmed the same neutral margin.
- Automatic wrapping was observed immediately after DOM load. Amazon, Rapido and Campa cycled in the public packaging preview; no sample-name buttons were present. Typing a company name stopped the cycle, and Classic/Signature hid the extra overlay. New photograph widths matched their containers.

WhatsApp URLs were intercepted during local QA; no messages were sent. Physical Android/iOS devices were not available. Git commits, GitHub publication and production deployment had not been performed at the time of the preview checks above; publication was subsequently authorized as noted at the top of this report.
