# Northline route-theme design QA

## Evidence

- Source visual truth: `work/midnight-redesign.png` (approved midnight homepage art direction) and `C:/Users/pc/AppData/Local/Temp/codex-clipboard-3e30b78e-b67a-45a3-baf6-9697a6be946c.png` (Services route that the user identified as inconsistent).
- Implementation captures: `work/services-midnight-settled.png` and `work/services-midnight-content-final.png`.
- Combined full-view comparison: `work/route-theme-comparison.png`.
- Review viewport: 1265 × 710 for the live Services route; the homepage reference is normalized beside it in the combined comparison.
- State: Services route loaded with the entrance sequence settled; lower content checked after one Page Down.

## Findings

- P0 — blockers: none.
- P1 — visual-system continuity: resolved. The former pale Services canvas has been replaced by the same midnight navy architectural foundation, luminous grid, glass navigation and high-contrast typography used by the homepage.
- P2 — route differentiation: resolved. Projects uses cyan/blue light, Services uses sapphire/indigo, Studio uses violet/blue and Journal uses teal/blue. The base values, grid density, typography, surface depth and footer treatment stay shared.
- P2 — below-fold continuity: resolved. Services rows, icons, dividers, callout and footer now remain inside the dark system instead of switching back to white.
- P3 — polish: the subpage glows are intentionally quieter than the homepage hero so active-route color does not compete with project content.

## Required fidelity surfaces

- Fonts and typography: Manrope/Cormorant pairing, optical weights, line height, display wrapping and gradient emphasis remain consistent with the approved homepage.
- Spacing and layout rhythm: the existing subpage composition and navigation spacing are preserved; no new outer frame, thick border or cropped text was introduced.
- Colors and visual tokens: a shared midnight base is driven by route-scoped accent tokens, producing related but visibly distinct atmospheres.
- Image quality and asset fidelity: supplied residential photography is unchanged, retains its existing crop and receives no photo-hover transformation.
- Copy and content: all route labels, descriptions and navigation text remain unchanged.

## Interaction and runtime checks

- Navigation routes render with the correct active tab and route-specific theme class.
- Cross-route navigation was reverified after removing the expensive cross-document transition. The premium entrance sequence runs on the initial page only. Clicking any internal route activates `motion-static`, makes every reveal target immediately visible, pauses all remaining keyframe animation and uses client-side navigation with no white intermediate frame.
- The header now lives in the persistent root layout, so it does not unmount or redraw between tabs. Services → Projects → Studio was checked with one header instance, the correct active link, zero hidden motion targets and no console errors.
- The active navigation state is one persistent `72px × 34px` translucent capsule centered behind every label. It now updates its target position synchronously on click rather than waiting for route completion: Studio → Journal was already at transform X `158.325px` after 110ms and settled at `197.5px`, while width and height remained fixed. The blur compositor and bottom line are removed. Each inactive link has a matching low-opacity hover capsule, and `.current` suppresses that hover layer with no transition so it cannot trail behind the active shape. No console errors were observed.
- Services entrance and scroll-triggered content reveals were checked in the in-app browser.
- Navigation overlap check: the selected capsule remains `72px x 34px`; every inactive-tab hover capsule is consistently `52px x 26px` with a `10px` radius. Adjacent selected/hover states retain `5.3px` to `13px` of clear space, so neighboring shapes never overlap.
- Homepage navigation check: `Home` is now the first primary tab, receives the same persistent selected capsule as the four subpages and uses its own blue-cyan route tone. The logo targets this same state instead of temporarily hiding the indicator.
- Homepage hero redesign: the former centered headline and three dashboard cards were replaced by an editorial split layout with a residence-led engineering dossier, integrated project caption, three performance metrics, restrained technical callouts and a simplified collaboration rail. At the 1280 x 720 review viewport the hero is 980px tall, all reveal targets settle visible and the browser console remains clear.
- Hero background simplification: removed the architectural grid, orbit rings, rotating conic halo and both ambient glow circles. The hero now uses one broad directional blue-ink light field over a deep navy gradient; the residence dossier retains only a low-contrast local wash for separation.
- Homepage surface unification: every formerly white content region now belongs to the midnight system. Intro, work, estimator, process, FAQ, callout and footer use alternating ink/navy/indigo depths; estimator and process cards, project badges, status chips and the portfolio notice use dark glass surfaces with cool translucent borders. Computed live styles confirm dark backgrounds and light foreground colors for all nine major homepage regions, with no console errors.
- Service-section differentiation: the coordinated-services band now uses a desaturated graphite-teal to restrained-indigo linear field, with darker tonal tabs and panel surfaces. The moving section glint is removed, and background animation is disabled for the global atmosphere, subpage halo, ambient blobs, metric glow and callout glow while retaining control and button interactions.
- Distinct route redesigns: Projects now uses a cinematic cyan-grid archive with one full-width lead residence and a three-column secondary gallery; Services uses a violet technical ledger with scope metrics and oversized numbered discipline rows; Studio uses a warm graphite/violet split manifesto, captioned image, practice metadata and a four-part values band; Journal uses a centered teal publication masthead and alternating image/text reading rows. Live computed styles confirm four unique route backgrounds and pattern systems, all motion targets visible and no console errors.
- Calmer route heroes: removed the shared ambient glow from every subpage hero. Projects now uses a 128px grid at 0.24 opacity, Services and Studio use single full-field tonal treatments at 0.20 opacity, and Journal uses 108px editorial rules at 0.22 opacity. Route layouts and gradients remain independently recognizable without decorative clutter.
- Distinct closing experiences: replaced the shared centered CTA with five route-aware compositions. Home closes with a split project invitation; Projects uses an image-led brief; Services uses a three-part scope matrix; Studio uses an intimate bordered note; Journal uses an outlined volume index and publication prompt. All five render with unique grid geometry and copy, and the newly added Journal action successfully opens and closes the portfolio privacy notice.
- Mobile Journal redesign: replaced the alternating checkerboard entirely. The index now opens with one 324px cinematic lead story, followed by three text-first rows measuring 106–110px with small right-edge thumbnails. At the 390px breakpoint the full section is approximately 919px tall, retains readable titles and reports no console errors. Added `#journal-index` for direct access and verification.
- Desktop Journal redesign: replaced the 2,553px alternating article stack with a 12-column asymmetric 2x2 magazine grid. The wide cards measure about 648–654px, narrow cards 456–460px, and each row is approximately 487–492px high. Total section height is now approximately 1,309px at 1280x720, with no console errors or photo-hover movement.
- Browser console errors: none.
- `npm test`: passed, including production build and all route-render tests.

## Comparison history

- Earlier P1: Services and the other tabs used the old pale pearl background and visibly diverged from the newly approved homepage. Fixed with a shared dark route shell and route-level accent variables.
- Earlier P2: lower sections still returned to white. Fixed by applying the midnight surface system to archive, service, studio, values, journal and footer regions. Post-fix evidence is in `work/services-midnight-content-final.png`.

## Latest desktop hero verification

- Shared headline anchor: Projects, Services, Studio and Journal now resolve to the same `x=63`, `y=254`, `width=1139` headline geometry at the 1280 x 720 review viewport. Route switching therefore preserves the large-type position while each atmosphere remains distinct.
- Projects now adds archive metrics and an animated completion rail; Services adds three discipline modules; Studio adds an editorial practice note. Each system begins at `x=63`, `y=520`, remains separate from the right-hand copy at `x=852`, and creates no horizontal overflow.
- Home and Journal intentionally received no supporting hero modules, matching the requested first/last exclusions.

final result: passed
