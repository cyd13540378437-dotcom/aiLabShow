# UX Design Project Memory

> Durable UX context only. The source Work Item remains authoritative.

## Current Baseline

- Status: confirmed
- Last reviewed event: `2026-07-29-2112-UX-001`

## Durable Context

- The portfolio is a multi-project experience with independently addressable
  project pages and one shared responsive project-navigation system.
- With the current three-project inventory, widths above `1180px` use three
  directly visible, equal `250px` Tabs. At `1180px` and below, navigation uses
  the collapsed project switcher. Re-evaluate this content-fit rule when the
  project inventory grows.
- Every project entry pairs its title with the complete confirmed explanation:
  `以声明式Harness为控制内核的Agent-Native产品设计系统`,
  `以skill和context-engineering为核心的创意管理空间`, and
  `用Dify编排履职分析workflow，成功协助客户完成履职管理`.
- Every project page must identify the current project semantically and
  visually, link directly to sibling projects on wide screens, and close the
  collapsed switcher after a selection, including selection of the current
  project.
- Project pages may use a local numbered section index, but destination offsets
  must remain below the sticky header and stable across header states, lazy
  media loading, and responsive breakpoints.
- Modal-opening controls must expose their dialog relationship and preserve the
  page URL and reading context.

## Constraints

- Preserve keyboard-operable native navigation and dialog semantics.
- Keep project switching consistent across all portfolio implementations.
- New project pages must inherit the shared site shell instead of creating a
  parallel navigation system.

## Source Events

| Event ID | Summary | Status |
|---|---|---|
| `2026-07-28-1408-UX-001` | Confirmed multi-project portfolio navigation and project-page interaction pattern | applied |
| `2026-07-29-2112-UX-001` | Confirmed three equal desktop project Tabs, exact explanatory copy, and the responsive collapsed fallback | applied |
