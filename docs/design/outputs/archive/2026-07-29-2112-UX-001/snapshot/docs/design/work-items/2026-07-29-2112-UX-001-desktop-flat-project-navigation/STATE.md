---
schema_version: 2
state_id: "2026-07-29-2112-UX-001"
event_id: "2026-07-29-2112-UX-001"
legacy_ids: []
title: "Desktop flat project navigation"
slug: "desktop-flat-project-navigation"
scope_type: "lifecycle-event"
domain: "UX"
release: ""

status: "completed"
phase: "complete"
gate: "none"
awaiting_user: false
sealed: true

mode: "lightweight"
execution_profile: "fast"
decision_authority: "user-confirmed-structure"
predecessors:
  - "2026-07-29-1417-UX-001"
related_items:
  - "2026-07-28-1408-UX-001"
approved_gates:
  - "completion-approval"

surface_target:
  primary: "responsive-web"
  secondary: []
  explicitly_out_of_scope:
    - "New portfolio projects or project-page content changes"
    - "A new global palette, typography system, or page-navigation model"
    - "Deployment or external publication"

reference_selection: "./REFERENCE_SELECTION.md"
approved_color_card: ""

design_contract:
  must_keep:
    - "The three current portfolio destinations, their labels, URLs, and correct active-project identity"
    - "The confirmed Yudi AI Lab shared shell, mineral-green palette, typography, compact density, and restrained rule-based styling"
    - "Project navigation remains distinct from the right-side or compact page directory"
    - "Narrow screens retain a collapsed project switcher that fits the viewport and closes predictably after selection"
    - "Keyboard-operable links, visible focus, and semantic current-project indication"
  must_change:
    - "On desktop, replace the disclosure-style project switcher with three simultaneously visible flat project entries"
    - "Make the three desktop Tabs equal or visually equal in width and clearly wider than the current approximately 185px per Tab"
    - "Each desktop flat entry must present both the project name and the user's exact confirmed Chinese explanation"
    - "Use the exact DesignHarnessAgent explanation: 以声明式Harness为控制内核的Agent-Native产品设计系统"
    - "Use the exact Idea Storm Lab explanation: 以skill和context-engineering为核心的创意管理空间"
    - "Use the exact 履职分析工作流 explanation: 用Dify编排履职分析workflow，成功协助客户完成履职管理"
    - "Allow long explanations to wrap naturally while remaining complete, clear, and unclipped"
    - "Apply the shared navigation structure consistently across every current portfolio page"
    - "Provide a stable responsive handoff between desktop flat entries and the existing narrow-screen collapsed control"
    - "Re-evaluate the flat-to-collapsed breakpoint against the wider Tabs and longer explanations, then select a collision-free breakpoint using browser evidence"
  must_not_do:
    - "Do not modify sealed predecessor states"
    - "Do not add, remove, rename, or reorder portfolio projects without a separate user decision"
    - "Do not turn the flat entries into oversized cards or a second page-directory rail"
    - "Do not change project-page narratives, evidence, dialogs, palette, or typography"
  constraint_sources:
    - "User-confirmed desktop-flat and narrow-collapsed navigation decision"
    - "docs/design/VISUAL_DESIGN.md"
    - "docs/design/project-memory/UX_DESIGN.md"
    - "Sealed event 2026-07-29-1417-UX-001 and its inherited shared-shell lineage"

review_lens:
  primary_questions:
    - "Can a desktop visitor see and enter all three projects without opening a menu?"
    - "Can a first-time visitor understand each project from the exact user-confirmed Chinese explanation?"
    - "Do the three Tabs read as equal or visually equal and materially roomier than the current approximately 185px width?"
    - "Do long explanations wrap naturally without clipping, truncation, or loss of clarity?"
    - "Is the current project immediately distinguishable without weakening the restrained shared shell?"
    - "Does the narrow layout preserve the familiar collapsed switcher without overflow or collision?"
    - "Is project navigation still clearly separate from page-level navigation?"
    - "Do page-directory anchors land below the taller sticky header in both flat and collapsed states?"
  acceptance_focus:
    - "Three-entry desktop scanability, exact confirmed descriptions, and active state"
    - "Equal or visually equal Tab widths that are clearly wider than approximately 185px"
    - "Complete, readable natural wrapping for long descriptions"
    - "First-visit comprehension without excessive header density"
    - "Consistent shared-shell implementation across current pages"
    - "Evidence-based responsive breakpoint, keyboard access, focus visibility, and no horizontal overflow"
    - "No regression to page directories, sticky header geometry, or project content"
    - "Stable fragment landing below the sticky header in both navigation states"
  excluded_aesthetic_standards:
    - "Do not judge success by generic SaaS tabs, rounded navigation pills, or decorative card density"

created_at: "2026-07-29T21:12:50+08:00"
updated_at: "2026-07-29T22:13:20+08:00"
completed_at: "2026-07-29T22:13:20+08:00"
sealed_at: "2026-07-29T22:13:20+08:00"

outputs:
  current:
    - "docs/design/outputs/current/index.yml"
  archive:
    - "docs/design/outputs/archive/2026-07-29-2112-UX-001/"

project_memory_updates:
  - target: "docs/design/project-memory/UX_DESIGN.md"
    status: "applied"
    summary: "Recorded wider desktop flat project Tabs with user-confirmed Chinese explanations, fragment-offset stability, and a narrow-screen collapsed fallback."
    source_event: "2026-07-29-2112-UX-001"

closure_readiness:
  ready_to_close: true
  checked_at: "2026-07-29T22:05:51+08:00"
  blockers: []
  review_path: "./review.md"
  review_status: "third-round-refreshed-pass-recommends-completion"
  visual_design_status: "refreshed-250px-tabs-1180-breakpoint"
  qa_evidence_status: "third-round-refreshed-pass"

completion_approval:
  first_requested_at: "2026-07-29T21:27:26+08:00"
  first_responded_at: "2026-07-29T21:32:35+08:00"
  first_response: "changes-requested"
  first_response_quote: "目前只有3个作品，所以有很多空间可以发挥，之前每个作品都有中文的副标题解释的，这个解释我认为要加回来，否则第一次看作品集的人理解成本会很高"
  second_requested_at: "2026-07-29T21:40:59+08:00"
  second_responded_at: "2026-07-29T21:53:09+08:00"
  second_response: "changes-requested"
  second_response_quote: "每个 Tab 再宽一些，并把三条中文解释改为：1）以声明式Harness为控制内核的Agent-Native产品设计系统；2）以skill和context-engineering为核心的创意管理空间；3）用Dify编排履职分析workflow，成功协助客户完成履职管理。"
  third_requested_at: "2026-07-29T22:05:51+08:00"
  third_responded_at: "2026-07-29T22:10:11+08:00"
  third_response: "approved"
  third_response_quote: "好的，我认为这次的任务圆满完成"
  current_status: "approved"

completion_execution:
  status: "completed"
  completed_at: "2026-07-29T22:13:20+08:00"
  completed_actions:
    - "Created docs/design/outputs/archive/2026-07-29-2112-UX-001/ with manifest and snapshot"
    - "Updated docs/design/outputs/index.yml and docs/design/outputs/current/index.yml"
    - "Applied the UX Project Memory update"
    - "Sealed the authoritative Work Item state"
---

# Work Item State

## Lifecycle Event

- Resolution: `SUCCESSOR`
- Event ID: `2026-07-29-2112-UX-001`
- Domain: `UX`
- Mode: `lightweight`
- Execution profile: `fast`
- Predecessor: sealed event `2026-07-29-1417-UX-001`
- Related shared-switcher origin: sealed event `2026-07-28-1408-UX-001`

The predecessor and related sealed state remain read-only. This event supersedes
only the shared project-navigation presentation described below.

## Task Summary

Change the current three-project navigation from a desktop disclosure menu to
three flat, directly visible entries. Keep the project switcher collapsed on
narrow screens. The user explicitly confirmed this responsive behavior and
requested the lightweight Design Engineering fast profile.

## Scope

### Included

- Shared project-navigation markup, styling, and behavior on all current pages
- Desktop flat entries, active state, and direct navigation
- Narrow-screen collapsed switcher and responsive handoff
- Accessibility, interaction, responsive, and shared-shell regression QA

### Excluded

- Portfolio project inventory or content changes
- Project-page information architecture or page-directory changes
- New visual direction, palette, typography, or prototype exploration
- Deployment or publication

## Design Object and Surface

- Design object: shared portfolio project navigation in the sticky header
- Primary surface: `responsive-web`
- Desktop target: three simultaneous flat project entries
- Narrow target: the existing collapsed project switcher pattern
- Exact implementation breakpoint may follow verified content fit and existing
  shell constraints; it must not create an overflow interval.

## Reference Resources

- Reference Selection: [REFERENCE_SELECTION.md](REFERENCE_SELECTION.md)
- Visual baseline: `docs/design/VISUAL_DESIGN.md`
- UX memory: `docs/design/project-memory/UX_DESIGN.md`
- Outputs baseline: `docs/design/outputs/index.yml`
- Project reference library: absent
- Color Card Registry: absent and not required because no palette selection is
  scheduled

## Acceptance Criteria

- At desktop widths, all three current project destinations are visible and
  directly actionable without opening a disclosure menu.
- The three desktop Tabs are equal or visually equal in width and each is
  clearly wider than the current approximately `185px`.
- Each desktop entry presents the project name plus its exact confirmed copy:
  `以声明式Harness为控制内核的Agent-Native产品设计系统`,
  `以skill和context-engineering为核心的创意管理空间`, and
  `用Dify编排履职分析workflow，成功协助客户完成履职管理`.
- Long descriptions may wrap naturally, but every character remains complete,
  clear, readable, and unclipped.
- The current project has an unmistakable visible and semantic active state.
- Every current portfolio page uses the same project labels, order, destinations,
  exact Chinese explanations, responsive behavior, and active-state rules.
- At narrow widths, project navigation remains collapsed, keyboard operable,
  viewport-safe, and closes after a project selection.
- The transition between flat and collapsed navigation introduces no overlap,
  clipped controls, duplicate visible navigation, or horizontal overflow.
- The flat-to-collapsed breakpoint may change again when necessary, but the
  selected breakpoint must be supported by browser evidence with the wider Tabs
  and full confirmed explanations present.
- Project navigation remains visually and semantically distinct from page-level
  navigation.
- Existing palette, typography, page content, dialogs, section links, and page
  directories do not regress.
- Page-directory and direct-fragment targets land below the sticky header in
  both flat-navigation and collapsed-navigation states.
- Browser QA covers representative desktop, transition, and narrow widths plus
  keyboard interaction and console errors.
- No deployment or external publication occurs without explicit instruction.

## Current Checkpoint

- Phase: `complete`
- Gate: `none`
- Awaiting user: `false`
- Visual-direction approval: not applicable; inherit the confirmed baseline
- Prototype approval: not applicable; the structure and responsive behavior are
  already user-confirmed
- Interaction decision: resolved by the user's explicit desktop-flat and
  narrow-collapsed decision
- First and second completion-approval responses: `changes-requested`
- Both completion-approval responses are preserved as historical context.
- Third completion-approval response: `approved`
- Closure readiness: `ready_to_close: true`
- Completion execution: `completed`
- Status: `completed`; sealed: `true`
- This Work Item is now read-only.

## Visual Design Context

- Visual Seed: “桌面端将当前包含 3 个作品的 project switcher 改为平铺入口，窄屏继续收起。”
- Reference images and analysis: none supplied or analyzed for this lightweight
  event; the existing shared shell is the visual source of truth.
- Surface Target: `responsive-web`.
- Adopted reference principles: compact shared-header geometry, restrained
  rules, clear active state, and separation of project and page navigation.
- Confirmed palette: inherit the Yudi AI Lab mineral-green baseline unchanged.
- Candidate palette comparison: not applicable; no palette change is in scope.
- User original color input: none.
- Final palette source: `custom` — inherited project baseline, not selected in
  this event.
- Confirmed design exclusions: no generic SaaS pills, oversized navigation
  cards, parallel header, new palette, or new typography system.
- Visual prototype: skipped as not applicable under the inherited lightweight
  baseline; production behavior requires browser verification.
- `VISUAL_DESIGN.md` status: refreshed with three `250px` equal-width Tabs, the
  three exact descriptions, natural two-line wrapping, `11px / 14.3px`
  description type, and a flat `>1180px` / collapsed `≤1180px` handoff.

## Approved Decisions

- User approved desktop flat project entries for the three current works.
- The first completion response required restoring descriptive Chinese copy for
  first-visit comprehension; the second response supersedes the three strings
  with the exact copy recorded in this state.
- User requires three equal or visually equal desktop Tabs that are clearly
  wider than the current approximately `185px`.
- User permits long explanations to wrap naturally, but not to truncate, clip,
  or lose clarity.
- User approved retaining a collapsed project switcher on narrow screens.
- User permits the responsive switch breakpoint to be reselected when content fit
  requires it, subject to browser verification.
- User requested `lightweight` mode with the `fast` execution profile.
- User explicitly approved completion with “好的，我认为这次的任务圆满完成”.

## Open Questions

- None blocking implementation.

## Working Assumptions

- “平铺入口” means three direct text-based project links in the shared header,
  not three large project cards.
- The current three-project inventory and ordering remain unchanged.
- The responsive breakpoint must be chosen from actual fit evidence with the
  wider Tabs and exact descriptions present while preserving the narrow-screen
  switcher.

## Artifacts

- `STATE.md`: authoritative event state
- `REFERENCE_SELECTION.md`: inherited reference and exclusion summary
- `review.md`: third-round refreshed Context-bound Final Review; required fixes
  none and recommends completion approval
- Current outputs index: `docs/design/outputs/current/index.yml`
- Outputs map: `docs/design/outputs/index.yml`
- Sealed archive: `docs/design/outputs/archive/2026-07-29-2112-UX-001/`
- Archive manifest and snapshot include the four public HTML files,
  `VISUAL_DESIGN.md`, `REFERENCE_SELECTION.md`, `STATE.md`, and `review.md`.

## First-round Implementation Summary

- Added one desktop `.project-nav` to each of the four public HTML files, with
  the same three direct links in the same order and exactly one current item.
- The desktop navigation inherits the shared `44px` control geometry; the
  disclosure `.project-switcher` is hidden above `880px` and shown at `880px`
  and below.
- Corrected the two DesignHarnessAgent phone menus to use fixed positioning
  below the header with `14px` left and right viewport margins.
- Preserved the established palette, typography, page navigation, dialogs,
  project content, and sealed predecessor history.

This implementation remains useful historical context but does not satisfy the
restored-explanation requirement.

## Second-round Implementation Summary

- Added `.project-nav-title` and `.project-nav-description` to all three desktop
  links on each of the four public HTML files.
- Restored the original dropdown descriptions exactly:
  `AI 产品设计与设计工程工作协议`,
  `邀请制创业脑暴与方向归纳空间`, and
  `用 Dify 编排并上线客户履职分析`.
- Applied `13px` titles and `11px / 13.2px` descriptions in an approximately
  `53.3px` high, `562.2px` wide desktop navigation.
- Moved the content-fit handoff to `1080px`: flat navigation above `1080px`,
  collapsed switcher at `1080px` and below.
- Preserved the three-project order, active semantics, narrow-menu descriptions,
  shared visual system, page navigation, and project content across all pages.

## Third-round Implementation Summary

- Set all three desktop project Tabs to equal `250px` widths across the four
  public HTML files.
- Applied the three exact user-confirmed descriptions in both desktop navigation
  and the collapsed menu.
- Allowed each desktop explanation to wrap to two complete lines at
  `11px / 14.3px` without clipping.
- Moved the content-fit handoff to `1180px`: flat navigation above `1180px`,
  collapsed switcher at `1180px` and below.
- Corrected the taller-header fragment offset on the two identical
  DesignHarnessAgent pages with `112px` flat-state and `88px` collapsed-state
  scroll margins.
- Preserved project names, order, destinations, active semantics, shared palette,
  typography, page directory, narrow-screen switcher, and project content.

## First-round Verification Evidence

Status: invalidated by the completion-approval response; responsive and content
evidence must be refreshed after rework.

- State resolution inputs read: Work Items index, both relevant sealed states,
  project visual baseline, UX and visual Project Memory, and outputs index.
- Static checks across all four public HTML files: one desktop nav, three links,
  one `aria-current="page"` item, and one narrow switcher per file.
- The two DesignHarnessAgent implementations remain hash-identical; repository
  `git diff --check` passed.
- At `1440 × 900`, three representative pages share navigation geometry
  `x=292`, `y=16.17`, `w≈412.60`, `h=44`; flat nav is visible, switcher hidden,
  and `scrollWidth=clientWidth`.
- At `881px`, flat navigation remains visible without directory overlap or
  horizontal overflow. At `880px`, flat navigation is hidden and the switcher
  is visible without collision.
- At `390 × 844`, flat navigation is hidden, the switcher is visible,
  `scrollWidth=clientWidth`, and opened menus keep `14px` viewport margins.
- Current-project close behavior passed on Idea Storm Lab and Dify; a desktop
  Dify sibling link navigated directly.
- Native anchors, valid `href` values, one semantic current item, visible `2px`
  accent focus outlines, and an empty browser console were verified.
- Automated Enter navigation did not fire in the browser-control environment.
  Because controls are native anchors with valid destinations and keyboard
  focus was verified, this remains a non-blocking tooling limitation.

## Second-round Verification Evidence

Status: invalidated by the second completion-approval response; Tab width, copy,
wrapping, breakpoint, responsive, interaction, and regression evidence must be
refreshed after rework.

- Static checks on all four public HTML files passed with three links, three
  titles, three descriptions, one active item, and one collapsed switcher each.
- The two DesignHarnessAgent implementations remain hash-identical; repository
  `git diff --check` passed.
- At `1440 × 900`, three representative pages share navigation geometry
  `x=292`, `y=14`, `w≈562.21`, `h≈53.33`; all three descriptions are complete
  and unclipped, with `scrollWidth=clientWidth`.
- At `1081 × 900`, flat navigation and all descriptions remain visible. Its
  right edge is approximately `854.21`, while the directory starts around
  `988.67 / 990.67`; no collision or horizontal overflow occurs.
- At `1080 × 900`, flat navigation is hidden and the switcher is visible. The
  summary ends at `598`, the directory begins around `987.33 / 989.33`, and no
  collision or overflow occurs.
- At `390 × 844`, flat navigation is hidden, the switcher retains all three
  original explanations, and `scrollWidth=clientWidth`. The opened Dify menu
  keeps `14px` margins on both sides.
- Desktop Dify direct navigation passed. The Idea Storm Lab link exposes a
  visible `2px` accent keyboard-focus outline, and its accessible text includes
  both the project name and description.
- Browser console inspection returned no warnings or errors.

## Third-round Verification Evidence

- Static checks on all four public HTML files passed with three equal desktop
  Tabs and the three exact descriptions present in both navigation modes.
- At `1440 × 900`, three representative pages show `250px` per Tab and total
  navigation geometry around `x=292`, `w≈757.3`, `h≈69.3`. Each description is
  `11px / 14.3px`, occupies two complete lines, and is unclipped.
- At `1181 × 900`, flat navigation remains visible on all three representative
  pages without page-directory collision or horizontal overflow.
- At `1180 × 900`, all three pages hide the flat navigation and show the
  collapsed switcher without collision or overflow.
- At `390 × 844`, flat navigation remains hidden, opened menus keep `14px`
  margins, all three exact descriptions are visible, and
  `scrollWidth=clientWidth`.
- Desktop direct navigation passed. Keyboard focus uses a visible `2px` accent
  outline, and the accessible name includes title plus description.
- The homepage `#summary` target lands at approximately `111.7px` below the
  `98px` header at `1440px`, and at `88px` below the `77px` header at `1180px`.
- The two DesignHarnessAgent HTML files remain SHA256-identical; repository
  `git diff --check` passed apart from line-ending notices.
- Browser console inspection returned no warnings or errors.

## Closure Readiness

- Design Contract and acceptance criteria: `pass`
- Responsive, interaction, accessibility, regression, and console QA:
  `third-round-refreshed-pass`
- Context-bound Final Review: `third-round-refreshed-pass`; path `review.md`
- Required fixes before completion: none
- `VISUAL_DESIGN.md`: refreshed with `250px` equal Tabs, confirmed descriptions,
  and the `1180px` responsive handoff
- Outputs archive/current/index: applied
- Project Memory update: `applied`
- Ready to close: `true`
- Completion approval: `approved`
- Completion execution: `completed`
- Final state: `completed / complete / sealed`

## First Completion Approval Response

- Result: `changes-requested`
- User response: “目前只有3个作品，所以有很多空间可以发挥，之前每个作品都有中文的副标题解释的，这个解释我认为要加回来，否则第一次看作品集的人理解成本会很高”
- Decision effect: return to implementation in the same active, unsealed Work
  Item; preserve the three-project order, original content, narrow collapsed
  behavior, and shared visual baseline.

## Second Completion Approval Response

- Result: `changes-requested`
- User response: “每个 Tab 再宽一些，并把三条中文解释改为：1）以声明式Harness为控制内核的Agent-Native产品设计系统；2）以skill和context-engineering为核心的创意管理空间；3）用Dify编排履职分析workflow，成功协助客户完成履职管理。”
- Decision effect: return to implementation in the same active, unsealed Work
  Item; widen the Tabs, apply the three exact descriptions, allow complete
  natural wrapping, and re-evaluate the breakpoint from browser evidence.

## Third Completion Approval Response

- Result: `approved`
- User response: “好的，我认为这次的任务圆满完成”
- Decision effect: approved Outputs and Project Memory actions were applied, and
  the Work Item was sealed.

## Next Action

- Treat this Work Item as read-only.
- Any future implementation or independently accepted navigation change must
  resolve to a successor event that lists `2026-07-29-2112-UX-001` as a
  predecessor.

## Key State Changes

- `2026-07-29T21:12:50+08:00`: resolved as `SUCCESSOR`; created an active UX
  event in `implementation` with no pending Gate.
- `2026-07-29T21:27:26+08:00`: implementation, QA, visual-baseline update, and
  Context-bound Final Review verified; closure readiness passed and the event
  entered `completion-review / completion-approval`.
- `2026-07-29T21:32:35+08:00`: user requested restored Chinese explanations for
  first-visit comprehension; closure readiness, first-round QA, and review were
  invalidated, and the event returned to `implementation`.
- `2026-07-29T21:40:59+08:00`: restored descriptions, evidence-based `1080px`
  handoff, refreshed QA, visual baseline, and Context-bound Final Review passed;
  the event re-entered `completion-review / completion-approval`.
- `2026-07-29T21:53:09+08:00`: user requested wider Tabs and three exact new
  descriptions; closure readiness, second-round QA, and review were invalidated,
  and the event returned to `implementation`.
- `2026-07-29T22:05:51+08:00`: `250px` equal Tabs, exact descriptions,
  evidence-based `1180px` handoff, fragment-offset correction, refreshed QA,
  visual baseline, and Context-bound Final Review passed; the event re-entered
  `completion-review / completion-approval`.
- `2026-07-29T22:10:11+08:00`: user explicitly approved completion; the Gate
  closed, and the event remains active and unsealed with completion execution
  pending approved Outputs and Project Memory application.
- `2026-07-29T22:13:20+08:00`: approved Outputs and Project Memory actions were
  verified as applied; the event transitioned to `completed / complete` and was
  sealed.
