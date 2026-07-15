# Design QA — Northline premium redesign

- Source visual truth: `C:\Users\pc\AppData\Local\Temp\codex-clipboard-3e424d07-37b7-4b15-8314-c8880b6576ab.png`, `C:\Users\pc\AppData\Local\Temp\codex-clipboard-ee426f70-0fff-417a-9957-bb50ce993b08.png`, and the user's written art direction.
- Implementation screenshot: `C:\Users\pc\Documents\Codex\2026-07-16\i\work\premium-desktop.png`
- Combined comparison: `C:\Users\pc\Documents\Codex\2026-07-16\i\work\premium-design-comparison.png`
- Viewport: 1265 × 710 desktop.
- State: Home route, default state.

**Findings**

- No P0/P1/P2 findings remain. The inset gray browser canvas, white outer gutters, max-width frame and drop shadow are removed. Computed layout evidence showed a 1265px site width at a 1265px viewport, zero site margin, no site shadow and no horizontal overflow.
- The orange and acid-lime palette was removed. The rendered page uses warm ivory, limestone, graphite and muted bronze.
- CTA pills and button arrows were removed. Controls now use 1px borders, 2px corners, restrained tracking and quiet inverse hover states.
- Hero photography now reaches the top, right and bottom edges of the hero without a boxed frame. Metric cards are smaller, square, lightly bordered and shadowless.
- Display emphasis is upright rather than script-like. Final source self-hosts Northline Serif (Cormorant Garamond) and Northline Sans (Manrope) so production does not depend on third-party font loading.

**Required fidelity surfaces**

- Fonts and typography: self-hosted high-contrast serif plus compact grotesk; upright emphasis, refined line-height and uppercase navigation tracking.
- Spacing and layout rhythm: edge-to-edge shell, 1px navigation divider, increased section spacing and full-bleed imagery.
- Colors and visual tokens: four restrained tokens only—ivory, limestone, graphite and bronze.
- Image quality and asset fidelity: existing high-resolution architecture imagery retained with lower saturation and slower, shallower zoom behavior.
- Copy and content: all Northline content and the enquiry-free portfolio notice remain intact.

**Interaction evidence**

- Existing multi-page navigation and enquiry modal logic were preserved.
- Project images use slow 1.4s scale/color transitions; metadata and action affordances reveal with restrained motion.
- Scroll sections use a 1.25s intersection-driven fade/translate reveal and respect reduced-motion preferences.
- Browser console showed no errors during the redesign capture.

**Comparison history**

- Initial redesign capture confirmed edge-to-edge composition and removal of the orange/acid system.
- Final implementation then replaced network-dependent type with identical self-hosted font files; the deployment build completed successfully.

**Follow-up polish**

- No blocking follow-up. Additional project-detail pages remain an optional portfolio expansion.

final result: passed
