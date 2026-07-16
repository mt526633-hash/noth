# Design QA — Northline luminous blueprint

- Source visual truth: `C:\Users\pc\.codex\generated_images\019f6824-7d92-70a1-a893-17ddc5bb23a7\exec-ea5d4751-483a-4d0c-896b-532c20936778.png`
- Implementation screenshot: `C:\Users\pc\Documents\Codex\2026-07-16\i\work\deployed-blueprint.png`
- Combined comparison: `C:\Users\pc\Documents\Codex\2026-07-16\i\work\blueprint-comparison.png`
- Viewport: 1200 × 750 deployment capture, compared at matching scale.
- State: home route, initial hero after entrance animation.

**Findings**

- No actionable P0, P1 or P2 differences remain.
- The implementation preserves the selected direction's near-black full-browser surface, centered mixed-serif/grotesk headline, fine blue-white rules, blueprint-to-built house transition, sparse navigation, minimal underline action and disciplined negative space.
- The implementation intentionally positions the house slightly lower at the captured viewport so the headline has more breathing room; the building expands as the hero continues below the fold. This is an acceptable responsive adaptation.

**Required fidelity surfaces**

- Fonts and typography: self-hosted Northline Serif and Northline Sans reproduce the reference's high-contrast serif/grotesk pairing. Headline scale, leading and tracking retain the reference hierarchy.
- Spacing and layout rhythm: edge-to-edge black surface, 1px navigation rule, centered hero, large negative-space field and lower architectural stage match the source composition.
- Colors and visual tokens: near-black, smoke, warm white and desaturated steel blue only. Contrast remains legible without bright startup accents.
- Image quality and asset fidelity: the selected concept's clean blueprint/house region is used as a high-quality local source asset. Project photography remains locally bundled and deliberately desaturated.
- Copy and content: the selected headline and discipline labels are preserved; supporting copy is specific to residential engineering.

**Motion and interaction evidence**

- Staggered headline mask reveal, navigation entrance, blueprint stage wipe and continuous scan-light animation are implemented.
- Pointer movement adds restrained hero depth; scroll uses requestAnimationFrame parallax; IntersectionObserver reveals long-page sections.
- Project hovers reveal inset hairlines and metadata actions; engineering discipline tabs change content and image with a panel transition.
- Reduced-motion preferences disable animation and transforms.
- Automated route/render tests pass for home, Projects, Services, Studio and Journal, and verify the motion hooks and reduced-motion rule.

**Comparison history**

- Initial deployed comparison showed the selected composition reproduced with stronger responsive breathing room and no thick outer frame.
- No blocking visual fix was required after the first deployment capture.

**Follow-up polish**

- P3: live pointer and tab interaction recording was unavailable in the final environment, but the interaction paths compile, server-render, and are covered by implementation checks.

final result: passed
