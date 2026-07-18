# Northline Projects hero viewport-fit QA

## Evidence

- Source visual truth: `C:/Users/pc/AppData/Local/Temp/codex-clipboard-8c9a5570-1e75-4ca3-b999-83385d4f024a.png` and `C:/Users/pc/AppData/Local/Temp/codex-clipboard-b86ad6b1-8e91-4c60-a19c-37efc9a11605.png`, plus the user's explicit requirement that the headline must not overlap the showcase and the circular selectors must be visible without scrolling.
- Implementation screenshot: `C:/Users/pc/Documents/Codex/2026-07-16/i/outputs/projects-hero-fixed-1648x834.png`.
- Full-view comparison evidence: `C:/Users/pc/Documents/Codex/2026-07-16/i/outputs/projects-hero-before-after.png`.
- Focused comparison evidence: `C:/Users/pc/Documents/Codex/2026-07-16/i/outputs/projects-hero-focused-before-after.png`.
- Viewport: 1648 x 834 requested in the in-app browser. The captured page surface is 1633 x 826 after browser scrollbar/chrome exclusion.
- State: Projects route at the top of the page with the opening animation settled. Pine Court House is shown in the implementation evidence; Garden Threshold was selected separately to verify interaction behavior.

## Findings

- P0 blockers: none.
- P1 headline/showcase collision: resolved. The headline ends at 330px and the showcase begins at 350px, leaving a visible 20px separation.
- P1 above-the-fold project navigation: resolved. The showcase was reduced from 430px to 300px and moved upward; all four circular selectors now appear in the initial desktop viewport.
- P2 card density after resizing: resolved. The details panel uses a 288px fixed height with tightened type and spacing, with no clipping or overflow.
- P2 hierarchy preservation: resolved. The same headline, image-led layout, glass details panel, circular markers, colors, and content remain intact.

## Required fidelity surfaces

- Fonts and typography: the existing Manrope/Cormorant pairing, weights, gradient italic treatment, and copy hierarchy are preserved. Display sizing was reduced only enough to create the required separation.
- Spacing and layout rhythm: the headline/showcase boundary now has a measurable 20px gap. The 300px showcase and 108px selector row fit within the 800px Projects hero.
- Colors and visual tokens: the existing navy, cyan, blue, glass border, and active-marker treatments are unchanged.
- Image quality and asset fidelity: the original high-resolution project images and crops remain in use; no placeholder or replacement asset was introduced.
- Copy and content: all project names, descriptions, locations, dates, scopes, typologies, and actions remain unchanged.

## Interaction and runtime checks

- Selected `03 Garden Threshold Alexandria`; `aria-selected` changed to `true` and the featured project content updated.
- All four circular selectors remain present and readable after interaction.
- Browser console errors: none.
- `npm run build`: passed.
- `npm run lint`: passed with 0 errors and 8 pre-existing warnings about image optimization and one ARIA usage.

## Comparison history

- Earlier P1: the italic headline touched and visually overlaid the image edge. Fixed by moving the headline upward, reducing its desktop scale, and positioning the showcase at 350px.
- Earlier P1: the 430px showcase pushed the circular selectors below the 834px viewport. Fixed by reducing the showcase to 300px, the details panel to 288px, the marker row to 108px, and the hero to 800px.
- Post-fix evidence: the full and focused before/after comparisons show the clear headline gap and all four visible markers.

final result: passed
