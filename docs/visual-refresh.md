# Basis Services — warm visual refresh

## Decisions

- Keep the official Basis lockup without the small tagline; do not recreate its lettering.
- Warm cream surfaces, forest-green text/actions, dark forest header and footer.
- Header darkening and the English Bythe credit were requested during implementation.
- Preserve English content, public routes, contacts, real-work gallery and SEO.
- Replace unrelated before/after photos with three real-work detail examples.
- No deployment to Vercel, domain change, backend, fabricated reviews or new commercial promises.

## Structure

- Server-rendered home sections and service icon mapping live in reusable components.
- Interactive islands: header, gallery and quote form.
- Quote validation/message creation and carousel playback policy are pure typed utilities.
- Styles are separated by responsibility under src/styles; globals.css only imports them in order.
- Removed the unused embla-carousel-autoplay dependency. Embla remains for accessible manual navigation and drag.
- Bythe SVG copied unchanged from the reference project pratika-sport/public/images/bythe-logo.svg; credit links to https://bythe.tech.

## Verification — 2026-09-04

- pnpm test: 13 passing unit tests (quote validation/message and playback policy).
- pnpm lint: passed.
- pnpm build: passed, including TypeScript; home, services and SEO routes are static.
- Home and services measured at 375, 640, 768, 820, 1024 and 1440 CSS px: no document horizontal overflow, no overflowing heading boxes.
- Visual review: desktop hero/services, mobile hero/footer, 640px hero, details and quote sections.
- Mobile menu: opens, closes with Escape, returns focus to its trigger.
- Form: House reveals room fields; Office removes them. Invalid required fields and past dates show inline errors and focus the first invalid field. Entered data is retained.
- No real WhatsApp message sent. Message success/encoding covered by unit tests; valid form external handoff was not submitted during live-browser testing.
- Gallery: manual next stops autoplay, Play while focused remains paused, all 15 images loaded successfully.
- Reduced-motion behavior covered by pure policy tests and the reduced-motion CSS rule; OS preference was not changed.
- Footer badge visually checked at 375px; official SVG and link verified.
- HTTP 200 for /, /services, /robots.txt, /sitemap.xml, /manifest.webmanifest, /icon.png, /apple-icon.png and new assets.
- Canonical URLs and JSON-LD remain present.

### Contrast samples

| Foreground / background | Ratio |
| --- | --- |
| #36543A / #F7F2E8 | 7.57:1 |
| #596052 / #E8EEE3 | 5.52:1 |
| #FFFDF8 / #17241B | 15.83:1 |
| #171912 / #B9EC35 | 12.76:1 |
| #BEC9B7 / #17241B | 9.37:1 |
| Input border #7B8774 / white | 3.78:1 |

## Generated decorations

Built-in image generation was used, not the API/CLI fallback. Both source PNGs had genuine alpha; no artificial background removal was needed. Their alpha was retained when resizing to 400px WebP.

- public/images/decor-products.webp — 27,694 bytes.
- public/images/decor-towels.webp — 44,300 bytes.
- Used only as decorative images in quote/process sections, with empty alt text.
- No generated imagery represents actual Basis work.

### Products prompt

Use case: stylized-concept. Asset type: decorative transparent PNG cutout for a warm premium cleaning website. A small tasteful group of two unbranded cleaning spray bottles and one folded microfiber cloth. Muted forest green #36543A, warm cream, subtle brushed gold accents. Soft matte 3D editorial illustration, restrained and elegant, no glossy exaggerated effects. Centered isolated objects with generous padding, genuinely transparent alpha background, no floor, no backdrop, no cast shadow beyond objects, no text, no labels, no logos, no people, no checkerboard. Square composition.

### Towels prompt

Use case: stylized-concept. Asset type: decorative transparent PNG cutout for a warm premium cleaning website. A neatly organized stack of three folded plush towels, warm ivory cream and muted sage forest green, with one fine muted gold fabric edge. Soft matte 3D editorial illustration, restrained, tactile, elegant, not cartoonish. Centered isolated objects, generous padding, genuinely transparent alpha background. No floor, no backdrop, no checkerboard, no cast shadow beyond objects, no text, no labels, no logos, no people, no other objects. Square composition.

## Performance and limitations

Most content remains static server-rendered HTML. Only three interaction components hydrate. Decoration assets total about 72KB before Next image optimization; offscreen photography is lazy-loaded. The photo gallery remains the main potential bandwidth cost. No production Lighthouse/Core Web Vitals result is claimed from the development server.

