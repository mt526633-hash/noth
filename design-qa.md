# Design QA — Northline

- Source visual truth: `C:\Users\pc\Downloads\b5ecdb58cdc591756c64b8d3e21ee106.webp` plus the two related user-supplied references.
- Implementation screenshot: `C:\Users\pc\Documents\Codex\2026-07-16\i\work\home-desktop.png`
- Combined comparison: `C:\Users\pc\Documents\Codex\2026-07-16\i\work\design-comparison.png`
- Viewport: 1024 × 768 desktop; 390 × 844 responsive check.
- State: Home route, default state.

**Full-view comparison evidence**

The implementation preserves the reference language rather than cloning its content: restrained warm-gray frame, high-contrast editorial headline, split copy/image composition, rounded photographic stage, floating translucent metric cards, pill CTAs, compact centered navigation, and strong black/orange accent hierarchy. The architecture-specific content, imagery, data and identity are intentionally original.

**Focused region comparison evidence**

The above-the-fold hero was compared at matching 1024 × 768 scale. The display headline, main image crop, floating cards, CTA grouping, client proof and navigation all remain legible with no clipping. A separate 390 × 844 browser capture confirms the breakpoint stacks cleanly with zero horizontal overflow.

**Required fidelity surfaces**

- Fonts and typography: Instrument Serif and DM Sans recreate the reference's editorial display/sans contrast; weights, line height and wraps remain controlled at desktop and mobile.
- Spacing and layout rhythm: hero proportions, inset frame, card radii, gutters and sectional cadence match the supplied visual language. The long-page layout maintains consistent vertical rhythm.
- Colors and visual tokens: warm white, concrete gray, black, safety orange and acid-lime tokens are consistent and accessible.
- Image quality and asset fidelity: local, high-resolution architectural photography is correctly cropped and never stretched; no visible placeholder or approximate drawn asset remains.
- Copy and content: all copy is specific to the fictional Northline residential-engineering studio. Portfolio/demo status is disclosed clearly in the contact modal and footer.

**Interaction evidence**

- Projects navigation successfully reached `/projects`.
- Enquiry CTA opened the portfolio-demonstration notice.
- Mobile menu opened and exposed its navigation links.
- Browser console checked with no errors.

**Findings**

- No actionable P0, P1 or P2 issues remain.

**Comparison history**

- Initial desktop pass: no blocking mismatch; implementation intentionally adapts the source from sales-software content to residential engineering.
- Mobile pass: first capture contained a transient browser compositing artifact; reload confirmed the actual DOM had one header and the final capture rendered correctly. No source change was required.

**Follow-up polish**

- P3: additional project-detail routes could deepen the fictional case studies in a later iteration.

final result: passed
