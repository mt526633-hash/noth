# Northline Projects hero redesign QA

## Evidence

- Source visual truth: `C:/Users/pc/AppData/Local/Temp/codex-clipboard-f2a9e079-0cae-4448-b29e-e984c23c9377.png`, the dashboard-style Projects hero the user asked to redesign; `C:/Users/pc/AppData/Local/Temp/codex-clipboard-eca942ab-0302-4ff3-8e23-c45e7145c0f5.png`, the circular seal the user asked to remove.
- Implementation screenshot: `work/projects-hero-redesign.png`.
- Focused implementation screenshot: `work/projects-showcase-detail.png`.
- Combined comparison evidence: `work/projects-hero-comparison.png`.
- Desktop comparison viewport: 1646 × 662. Focused review viewport: 1646 × 900. Mobile review viewport: 390 × 844.
- State: Projects route loaded with its opening sequence settled; Pine Court House selected. A second interaction check selected Folded Stone Villa.

## Findings

- P0 blockers: none.
- P1 dashboard-like composition: resolved. The analytics panel, bar chart, large numerical status, feature strip, archive utility rail and circular N/04 seal are no longer rendered.
- P1 hierarchy and architectural relevance: resolved. The replacement uses supplied residence photography as the primary visual, paired with an editorial project summary, two concise project facts and a restrained action row.
- P2 density and empty-space balance: resolved. The showcase spans the same content grid as the title and uses a deliberate 1.08/0.92 image-copy split. The four project selectors form one quiet baseline rather than multiple floating shapes.
- P2 interaction clarity: resolved. Four semantic project tabs expose selected state, work with mouse, keyboard focus and click, and update the image, project title, place, year, scope and typology.
- P3 polish: the selected-project underline is intentionally thin and cyan so it remains visible without turning the selector row into another dashboard.

## Required fidelity surfaces

- Fonts and typography: the existing Manrope/Cormorant pairing, shared hero anchor, display wrapping and gradient serif emphasis remain unchanged. Showcase labels use larger, crisp optical sizes with no blur filters.
- Spacing and layout rhythm: the headline stays in the shared tab position. The showcase starts below it with an 86px breathing interval at the desktop review viewport and introduces no horizontal overflow.
- Colors and visual tokens: the navy/cyan Projects palette is preserved. The showcase uses two low-contrast navy surfaces, one hairline border and a restrained selected state.
- Image quality and asset fidelity: existing high-resolution residence assets are reused directly with an architectural crop. Images do not transform on hover; the selected image uses only a short entrance crossfade/scale.
- Copy and content: project names, places, years, types and scopes come from the existing project data. New editorial summaries are fictional portfolio copy consistent with the brief.

## Interaction and runtime checks

- Circular seal present: no.
- Old archive context rail present: no.
- Featured project tabs: four.
- Selecting `02 Folded Stone Villa Amman` updates the title to `Folded Stone Villa` and image to `/images/concrete-house.jpg`.
- Opening sequence: image uses `projectHeroLeft`; title and copy use independent up/right motions; project tabs use staggered up motions. All are compositor-only and use no blur.
- Horizontal overflow: 0px at 1646px desktop and 390px mobile.
- Primary actions remain functional: `View residence` targets the archive and `Project brief` opens the portfolio notice.
- Browser console errors: none.
- `npm test`: passed, including production build and all route-render tests.
- `git diff --check`: passed.

## Comparison history

- Earlier P1: the hero resembled a software metrics dashboard and visually competed with the architecture. Fixed by replacing the entire console with an image-led editorial showcase.
- Earlier P1: the floating N/04 seal and archive markers made the composition feel disconnected. Fixed by removing them from the rendered Projects hero.
- Earlier P2: the lower feature rail introduced too many bordered compartments. Fixed by consolidating project selection into a single four-column strip attached to the image/copy frame.
- Post-fix visual evidence: `work/projects-hero-comparison.png` and `work/projects-showcase-detail.png`.

final result: passed
