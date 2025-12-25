# Cursor Prompt: Build Service Landing Page as per flow.md

## OVERVIEW
## OUTPUT RULES (STRICT)

- Do NOT introduce any frameworks or libraries other than:
  HTML, TailwindCSS, Vanilla JS, jQuery.
- Do NOT use React, Vue, Alpine, GSAP, Swiper, AOS, or any CSS frameworks other than Tailwind.
- Do NOT inline content text directly in HTML.
- Do NOT invent extra sections not listed in flow.md.
- Do NOT over-comment or explain concepts in the output.
- Focus on production-ready structure, not demos or pseudo-code.
- HTML code must be in index.html file 
- CSS code must be in style.css file
- Javasctipt code must be in main.js file
- content must bt in content.js file

**Goal:**  
Design and build a landing page for a service/product platform, inspired by Salla, Zid, and online menu platforms, with the aim to be unique, lively, and highly interactive.

---

## DESIGN SYSTEM & CONSTRAINTS

- **Languages & Tools:** HTML, CSS, JavaScript, jQuery, TailwindCSS only.
- **Language:** Arabic فصحى خفيفة.
- **Mobile-first, fully responsive:** Must work perfectly on mobile, tablet, laptop, desktop, and extra-large screens.
- **Animations:** Use lively, non-distracting animated sections/blocks instead of static paragraphs.
- **Illustrations:** Use SVGs, blobs, icons, gradients as backgrounds and section textures.
- **Code Principles:** Clean, DRY, commented, sectioned for backend integration.
- **Content Management:** All display content (text, titles, assets) must be in a separate content file as an array of objects (keyed by code section, title, content, assets).
- **Reference flow.md for ALL section breakdowns and requirements.**

---

## MAJOR PAGE SECTIONS (as per flow.md)

1. **Header**:  
   - Logo, nav (scroll to section), login/register.
   - Sticky, transparent/blur background.
   - Hamburger for mobile.

2. **Hero Section**:  
   - Bold headline, sub-headline, major illustration, primary CTA.
   - Large, bold, animated background accents.

3. **Features**:  
   - 3-6 feature cards, each with icon and bite-size text.
   - Animations on scroll/hover.

4. **Plans**:  
   - 3 visually distinct blocks, highlight top features and pricing.
   - Choose/Register button => opens registration modal.

5. **Call to Action**:  
   - Full-width, high-contrast section.
   - Prominent button (scroll/redirect to registration).

6. **FAQ**:  
   - 3-6 most common issues, collapsible accordion, each with icons.

7. **User Story Guide**:  
   - Step-by-step visual (timeline or process blocks).
   - Use icons/animation instead of paragraphs.

8. **Floating Support Modal**:  
   - Always on-screen help icon.
   - Opens modal: Name/Phone/Email/Service/Message, social links, illustration.  
   - AJAX submit to API, shows confirmation, includes animated feedback.

9. **Footer**:  
   - Logo, nav, socials, copyright.

---

## Layout Structure
1. **Header**: Sticky navbar with blur backdrop, logo, nav links (الرئيسية, المميزات, الأسعار, كيف يعمل), mobile hamburger menu, CTA buttons

2. **Hero Section**: Full-screen with animated gradient blobs, main headline "حول قائمتك إلى تجربة رقمية مميزة", sub-headline, two CTA buttons, stats counter (1000+ عميل, 50000+ قائمة, 99.9% وقت التشغيل)

3. **Features Section**: 6 feature cards in grid with icons, hover animations:
   - قوائم QR ذكية
   - تحديثات فورية
   - تحليلات متقدمة
   - دعم متعدد اللغات
   - تصميم متجاوب
   - دعم فني 24/7

4. **How It Works**: 4-step timeline (سجل حسابك → أضف قائمتك → احصل على رمز QR → ابدأ الاستخدام)

5. ## PRICING MODEL

Plans:
- أساسي – ربع سنوي
- احترافي – نصف سنوي (Most Popular)
- مؤسسي – سنوي

Prices should be placeholders.
Highlight value, not math.


6. **FAQ Section**: Accordion with 5+ common questions

7. **CTA Banner**: Full-width gradient section with action buttons

8. **Footer**: Logo, quick links, social icons, payment methods, copyright

9. **Support Modal**: Floating button that opens contact form modal

## Animations
- Fade-in-up on scroll reveal
- Floating/pulsing blobs in hero
- Scale on hover for cards
- Smooth accordion transitions
- Blob morphing animations

## Key Features
- Fully RTL Arabic text direction
- Responsive mobile-first design
- Intersection Observer for scroll animations
- Centralized content in data/content.ts file
- Semantic color tokens (no hardcoded colors in components)
## RTL & ARABIC RULES

- `dir="rtl"` must be set on `<html>`.
- Use logical properties (padding-inline, margin-inline) where possible.
- Headings use Cairo only.
- Body text uses Tajawal only.
- Avoid letter-spacing on Arabic text.
- Ensure readable line-height (1.7–1.9) for paragraphs.
## CONTENT & COPY

- Content for **all sections** should be in ARABIC (فصحى خفيفة), included only via an external content file (array of objects per flow.md instructions).
- Each content object must specify: block section, title, actual content, and required assets.
## CONTENT FILE STRUCTURE (MANDATORY)

All content must live in `content.js` and follow this exact schema:

const content = {
  hero: {
    title: "",
    subtitle: "",
    ctas: [{ label: "", action: "" }],
    stats: [{ label: "", value: "" }],
    assets: { illustration: "", blobs: [] }
  },
  features: [
    { icon: "", title: "", description: "" }
  ],
  howItWorks: [
    { step: 1, title: "", description: "", icon: "" }
  ],
  pricing: [
    {
      plan: "",
      price: "",
      period: "",
      highlighted: false,
      features: [],
      cta: ""
    }
  ],
  faq: [
    { question: "", answer: "" }
  ],
  footer: {
    links: [],
    socials: []
  }
}


## INTERACTIONS & ANIMATIONS

- Scroll/fade-in/hover animations per section (as outlined).
- Modal popups for registration/support use jQuery.
- Accordions/menus work smoothly on all screen sizes.
## ANIMATION LIMITS

- Animations must enhance comprehension, not distract.
- No infinite shaking, spinning, or flashing.
- Prefer:
  opacity + translateY
  scale on hover
  slow blob morphing (CSS only)
- Max animation duration: 800ms
- Respect `prefers-reduced-motion`.

---

## VISUALS

- Use vibrant, well-contrasted color palettes (see flow.md), with backgrounds/textures for each section.
- Each block must feel visually distinct and engaging.
- Use illustrations for clarity and energy, not just filler.

---

## ORIGINALITY & BENCHMARKS

- Use https://salla.com, https://zid.sa/ar/, and https://landing.6lb.menu/ for inspiration, but push further – more color, movement, user-centric/friendly.
- At every step: optimize for clarity, friendliness, and mobile usability.

---

## FILE ORGANIZATION

- **Main files:**  
  - `index.html` (structure, links to content/JS/CSS)
  - `main.js` (all interactivity, separation of concerns)
  - TailwindCSS for all UI styling
  - `content.js` (or suitable format): All section content as array of objects (see above)

---

## QUESTIONS FOR YOU (USER)

- **Brand/Logo/assets:** Do you have final logos, or should placeholders be used?
 i dont
- **Illustrations:** Any illustration style or palette references (flat, hand-drawn, isometric)?
Hand-drawn → sketchy, imperfect lines. Feels human, casual, friendly.

- **Primary color family** (Brand, preference)?
## Color Palette Guide

### Base Colors
- **Primary:** `#FF8059` (Energetic Coral)
  - For main CTA buttons, feature highlights, major icons, hover states, and accents that should draw user attention.
  - Consider using as a gradient start/end with the accent color for animated backgrounds or blobs.

- **Secondary:** `#5FD2BB` (Fresh Teal)
  - Use for section backgrounds, secondary buttons, info banners, secondary features, or testimonial highlights.
  - Excellent for soft overlays or cards to balance energy with a calming effect.

- **Accent:** `#FFCA3A` (Golden Yellow)
  - Use for badges, highlight tags (e.g. "Best Value"), callouts, navigation indicators, progress steps, hover effects, or animated “shine” overlays.
  - Small animated geometric shapes or accent lines work well with this.

- **Background:** `#F7F9FA` (Light Off-White)
  - Use as the main background color for the overall page and section containers.
  - Optionally, deeper shades or subtle gradients of this for alternating blocks: e.g., `#f1f5f9` for cards.

- **Contrast/Dark:** `#22242A` (Rich Deep Grey)
  - Use for text, essential icons, footers, navigation bars, and to ensure sufficient contrast against bright colors and backgrounds.
  - Works well as a base for dark modals, overlays, or menu backgrounds.

---

### Supporting/Utility Colors

- **Light Card/Block:** `#FFFFFF` (White)
  - Use for cards, floating action buttons, or modal surfaces.
- **Border/Shadow:** `#E0E3EB` (Pale Blue-Grey)
  - Use for hairline borders, card shadows, or subtle dividers.
- **Disabled/Muted:** `#B0B2B8`
  - For disabled actions, placeholder text, or less-prominent icons.

---

### Visual Hierarchy & Patterns

- **Use Primary color for:**  
  - Main "Register/Buy/Action" buttons
  - Active navigation links
  - Floating CTA or support icons
  - Animations/features that need strong attention for conversion

- **Use Secondary for:**  
  - Section backgrounds for features, plans, FAQ
  - Alternating content backgrounds (e.g. hero: white, features: teal, plans: white)
  - Accent illustrations/shapes on light backgrounds

- **Use Accent for:**  
  - Promo labels, highlights inside cards or on text
  - Small dots, lines, or decorative shapes in illustrations
  - Animated backgrounds (as blobs, strokes, or overlays)

- **Contrast/Dark for:**  
  - All text for readability
  - Main navigation and footer
  - Modal overlays
  - Icon outlines and deep shadows

---

### Container & Illustration Suggestions

- **Hero/intro:** White background with energetic coral blobs and golden yellow accents, bold dark text.
- **Feature/plan cards:** Use fresh teal backgrounds, white cards, and coral/accent highlight lines.
- **Section dividers/textures:** Wavy or blob-shaped SVGs mixing coral/teal/yellow as overlays, under illustrated icons or callouts.
- **Support modal/floating button:** Teal or coral background for icon; white/modally overlay for form.

---

### Example Tailwind Config

If you want nice theme support, your `tailwind.config.js` can be extended:

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF8059',
        secondary: '#5FD2BB',
        accent: '#FFCA3A',
        background: '#F7F9FA',
        contrast: '#22242A',
        card: '#FFFFFF',
        border: '#E0E3EB',
        muted: '#B0B2B8',
      },
    },
  },
}---

### Accessibility

- Always check contrast for readable text on colored backgrounds (especially yellow on white, or white on teal).
- Use dark text on light backgrounds, and reversed (white, bold) text on Primary/Secondary dark backgrounds.

- **Specific features to highlight** that are unique compared to competitors?
all in one all the features in one place
- **Domains/APIs:** Is there an actual API endpoint for support forms, or should submission just simulate?
yes there is , but keep it as place holder now
- **Preferred plan/pricing breakdowns?**
3 plans , quarter , half-year and yearly


- **Preferred font(s) or typography guidelines for Arabic?**
Use Cairo in weights 700–900 for titles/headings (bold, distinct).
Use Tajawal in weight 400–600 for paragraphs, captions, secondary UI.
Make sure both fonts are loaded on your site (via Google Fonts or locally).
Set appropriate font-family in your CSS for headings (h1, h2, h3...) vs. body (body, p, span, li...).
---

## BEFORE YOU START

Ask me these questions and wait for answers before generating code:

1. Should this be delivered as:
   - Single HTML file + JS + content file
   - Or fully separated components per section?

2. Do you want:
   - Minimal JS (only interactions)
   - Or richer animations with more JS logic?

3. Should placeholder illustrations be:
   - Inline SVG
   - External SVG files
   - Or simple shapes only?

4. Is SEO structure required now (meta tags, schema), or later?

5. Should registration modal be visual-only or wired for future backend integration?

Do NOT start implementation until these are answered.
## IMPLEMENTATION ORDER

1. Base layout + RTL + fonts
2. Header + mobile navigation
3. Hero section
4. Features
5. How It Works
6. Pricing
7. FAQ
8. CTA
9. Footer
10. Support modal
11. Animations & polish

MOVE By The ORDER ONE by ONE