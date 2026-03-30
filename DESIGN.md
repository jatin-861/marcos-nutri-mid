# Design System Document: The Kinetic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The High-Performance Manuscript"**

This design system rejects the "template-heavy" look of traditional e-commerce. Instead, it adopts a high-end editorial approach—think luxury fitness journals meets precision engineering. We achieve a "premium" feel not through heavy shadows or borders, but through **intentional asymmetry, sophisticated tonal layering, and aggressive whitespace.**

The layout should feel like a curated gallery. We move away from rigid, centered grids in favor of offset product imagery and large-scale typography that "breaks" the container, creating a sense of forward motion and energy. Trust is built through precision; energy is built through high-contrast accents.

---

## 2. Colors: Tonal Depth & High-Energy Accents

The palette is rooted in deep, obsidian tones to evoke a sense of professional-grade equipment, punctuated by 'Electric Lime' (`primary`) and 'Performance Orange' (`tertiary`).

### Color Strategy
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate the Hero from the Product Grid, transition from `surface` (#0e0e0e) to `surface_container_low` (#131313). Let the change in value define the edge.
- **Surface Hierarchy & Nesting:** Treat the UI as layers of physical material. 
    - *Base:* `surface_dim`
    - *Sections:* `surface_container`
    - *Floating Elements/Cards:* `surface_container_high` or `highest`.
- **The Glass & Gradient Rule:** For navigation bars or floating "Add to Cart" modals, use a backdrop-blur (20px+) with a 60% opacity of `surface_container`. 
- **Signature Textures:** Apply a linear gradient from `primary` (#f4ffc6) to `primary_container` (#d1fc00) at a 135-degree angle on all primary CTAs. This prevents the "Electric Lime" from feeling flat and gives it a metallic, high-performance sheen.

---

## 3. Typography: Authority in Motion

We use a "Dual-Speed" typography system. **Inter** provides the industrial, bold authority for headlines, while **Manrope** offers a modern, accessible warmth for technical supplement data.

- **Display-LG (Inter, 3.5rem):** Use for hero slogans. Set with `-0.04em` letter spacing to feel "tight" and engineered.
- **Headline-MD (Inter, 1.75rem):** Used for product names. Always Uppercase when paired with `primary` color accents.
- **Title-SM (Manrope, 1rem):** Used for ingredient lists and technical specs. Use `medium` (500) weight to ensure legibility against dark backgrounds.
- **Label-MD (Inter, 0.75rem):** Used for "Performance Metrics" (e.g., 25g Protein). High letter spacing (+0.05em) for an editorial, "spec-sheet" feel.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "software-standard." We use **Ambient Depth.**

- **The Layering Principle:** To lift a product card, do not add a shadow. Place a `surface_container_high` (#20201f) card on a `surface` (#0e0e0e) background. The subtle 4% shift in lightness is enough for the human eye to perceive depth without visual clutter.
- **Ambient Shadows:** Only for floating "Quick Buy" menus. Use a blur of `32px`, 0px offset, and 8% opacity of `#000000`. It should feel like a soft glow of darkness, not a hard shadow.
- **The "Ghost Border" Fallback:** If a container requires definition against a similar tone, use `outline_variant` (#484847) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** Use for "Out of Stock" overlays or sticky headers. Combine `surface_container` at 70% opacity with a `saturate(180%)` backdrop filter to keep the colors beneath vibrant.

---

## 5. Components

### Buttons
- **Primary:** Gradient (`primary` to `primary_container`). Black text (`on_primary_fixed`). Corner radius: `md` (0.375rem). Use for "Checkout."
- **Secondary:** Transparent background with a `Ghost Border`. White text. Use for "View Details."
- **Tertiary:** `tertiary` (#ff734a) background. Use exclusively for "Sale" or "Limited Edition" alerts.

### Input Fields
- **Base:** `surface_container_highest` (#262626). 
- **State:** No border on focus; instead, use a 2px bottom-only stroke of `primary`.
- **Error:** Use `error` (#ff7351) text only. Do not turn the whole box red; it breaks the premium aesthetic.

### Cards & Lists
- **The Anti-Divider Rule:** Never use horizontal lines to separate list items (e.g., in a cart). Use `spacing.8` (2rem) of vertical whitespace or alternating `surface_container_low` and `surface_container_lowest` backgrounds.
- **Product Cards:** Image should overflow the container slightly (asymmetry). Use `surface_container_high` for the card body.

### Performance Chips
- Use `label-sm` typography. Background: `surface_container_highest`. When active, background: `primary`, text: `on_primary_fixed`. 

---

## 6. Do’s and Don’ts

### Do
- **Do** use `spacing.20` or `spacing.24` for section margins. Space is a luxury; use it.
- **Do** use high-quality, "sweat-and-steel" photography with the background removed, placed directly on `surface` tones.
- **Do** use `primary` sparingly. It is a laser-sight, not a paint bucket.

### Don't
- **Don't** use pure white (#ffffff) for large blocks of body text; use `secondary` (#e5e2e1) to reduce eye strain on dark mode.
- **Don't** use standard 12-column grids for everything. Offset your text blocks to the left or right to create a "Z-pattern" editorial flow.
- **Don't** use rounded corners larger than `lg` (0.5rem). We want "precision-cut," not "bubble-wrap."