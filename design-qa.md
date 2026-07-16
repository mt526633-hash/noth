# Northline design QA

## Evidence

- Reference set: `cc4a52f3fc5df6e55f429a8d8ceeefc9.jpg`, `aba6a5eb45ce6507e58a13f7902383d2.jpg`, and `Modern Tennis Landing Page.jpg`.
- Implementation capture: `work/local-light.png` at 1440 × 1000.

## Review

- P0 — blockers: none.
- P1 — layout/function: none. The page uses the full browser canvas with no outer presentation frame; navigation, routes, tabs, filters, estimator, accordion and modal are operational.
- P2 — fidelity: none. The implementation carries the requested white foundation, cyan/blue ambient glow, glass navigation, gradient CTA, soft elevated cards, restrained photography and dense premium spacing.
- P3 — polish: production screenshot generation can lag behind the deployed version; local production-equivalent capture confirms the new visual state.

Photography remains static on hover. Every major section, heading, paragraph, card, control group, metric, list and footer element participates in a long staggered appearance sequence. A server-rendered hidden state plus double-frame initialization guarantees that disappearance is painted before each reveal begins. Viewport-ratio gates prevent below-fold motion from firing early: hero cards require 92% visibility, large surfaces 48%, and text or controls 30%. Distinct variants include vertical headline masks, blur-resolving copy, horizontal button sweeps, folding tabs, scaling stats, alternating 3D project cards, directional process cards, accordion reveals, chart construction and cascading card content. Motion is explicitly forced for this portfolio demo, matching the user's request even when the operating system asks sites to reduce animation.

final result: passed
