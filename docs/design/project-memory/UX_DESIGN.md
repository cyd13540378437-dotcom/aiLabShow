# UX Design Project Memory

> Durable UX context only. The source Work Item remains authoritative.

## Current Baseline

- Status: confirmed
- Last reviewed event: `2026-07-28-1408-UX-001`

## Durable Context

- The portfolio is a multi-project experience with a shared project switcher and
  independently addressable project pages.
- Every project page must identify the current project, link to sibling projects,
  and close the switcher after a selection, including selection of the current
  project.
- Project pages may use a local numbered section index, but destination offsets
  must remain stable across lazy media loading and responsive breakpoints.
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
