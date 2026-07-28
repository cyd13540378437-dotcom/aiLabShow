# Reference Selection

## Work Item

- State ID: `2026-07-28-1408-UX-001`
- Title: Idea Storm Lab portfolio menu and page
- STATE.md: [STATE.md](STATE.md)

## Surface Target

- Primary surface: `responsive-web`
- Secondary surfaces: none
- Explicitly out of scope: the Idea Storm Lab product application, backend,
  authentication, and product feature behavior
- Evidence: the current portfolio is a static responsive HTML site; the supplied
  references are desktop web screens; the local product is a web application
- Open questions: none that block state binding

## Task Diagnosis

Add a second project to the existing Yudi AI Lab portfolio switcher and give it
an independently navigable project page. The portfolio visitor should understand
what Idea Storm Lab is, how its core workflow fits together, and why it belongs
in the lab without turning the portfolio page into a second copy of the product.

## Reference Query

```yaml
surface:
  - responsive-web
page_type:
  - portfolio-project-page
  - project-switcher
task_type:
  - product-storytelling
  - visual-product-evidence
user_maturity: mixed
content_density: medium-high
interaction_complexity: low
risk_level: medium
```

## User-Selected References

These references were selected explicitly by the user. The Steward registers
them as task inputs but does not replace the parent design agent's visual
analysis.

| Reference | Surface | Why relevant | Use | Do not use |
|---|---|---|---|---|
| Current Yudi AI Lab `index.html` and `designharness-agent-mineral-light.html` | responsive web | Authoritative site shell and DesignHarnessAgent visual baseline | Preserve the existing brand header, project-switcher relationship, typography hierarchy, spacing rhythm, and responsive behavior | Do not redesign the current DesignHarnessAgent page |
| User screenshot 1: `codex-clipboard-c4e3f1ac-2627-488f-b7f4-0ca439a4ed8b.png` | desktop web app | User-provided product evidence | Parent design agent may analyze and place it in the project narrative | Do not reproduce the application shell as the portfolio shell |
| User screenshot 2: `codex-clipboard-273c74eb-fd56-4f8a-8a69-8e0a2c4b989f.png` | desktop web app | User-provided product evidence | Parent design agent may analyze and place it in the project narrative | Do not imply unavailable interactivity |
| User screenshot 3: `codex-clipboard-4daff396-bcae-4f88-9b6b-dc65c27a854a.png` | desktop web app | User-provided product evidence | Parent design agent may analyze and place it in the project narrative | Do not copy the full product layout into the portfolio page |
| User screenshot 4: `codex-clipboard-cb00c1bd-d60f-4bc7-b2b6-bafbf888ce3a.png` | desktop web app | User-provided product evidence | Parent design agent may analyze and place it in the project narrative | Do not invent product behavior from a static screen |
| User screenshot 5: `codex-clipboard-ff4beb13-de29-4d92-8956-5b8d253af6ca.png` | desktop web app | User-provided product evidence | Parent design agent may analyze and place it in the project narrative | Do not use it as a generic decorative background |
| User screenshot 6: `codex-clipboard-99e23c49-0888-4488-b455-639958a208e2.png` | desktop web app | User-provided product evidence | Parent design agent may analyze and place it in the project narrative | Do not crop away information needed to understand the product |
| `/Users/caoyudi/Desktop/ideaStorm/idea-storm-lab` | web app | Authoritative product semantics and implementation evidence | Use README, current source, and product design baseline to keep claims accurate | Do not edit this repository as part of the portfolio Work Item |
| Idea Storm Lab `skills/analysis_skill.md` | prompt / Skill | Authoritative analysis rules used by the product | Derive a short, faithful public excerpt covering task, principles, representative flow, and output contract | Do not edit the source Skill or expose the full private operating prompt |
| Work Item `STATE.md` | design-engineering state | Authoritative record of scope, Design Contract, decisions, and review status for this page | Derive a Chinese visitor-facing presentation | Do not publish local paths, temporary attachments, agent identifiers, or runtime details |
| Idea Storm Lab `docs/design/VISUAL_DESIGN.md` | web app | Existing product-specific visual baseline | Preserve the product's paper-workbench identity when presenting product evidence | Do not create a parallel global design system for Yudi AI Lab |

The six screenshot files currently live in the Codex temporary attachment
directory. The parent agent should archive approved production-ready copies in
this Work Item's `artifacts/` directory if they become implementation assets.

## Rejected References

| Reference | Reason |
|---|---|
| Project reference library | `docs/design/reference-library/` does not exist in Yudi AI Lab |
| External web references | Not needed; the user supplied first-party screenshots and local source |

## Color Card Selection

- Registry source: `none`
- Project color card registry:
  `docs/design/reference-library/assets/color-cards/palette-index.yml`
- Integrity check result: `no-registry`
- Source note: no palette selection is scheduled. This lightweight Work Item
  inherits the existing Yudi AI Lab visual baseline, so the bundled registry was
  not installed.

## Typography Selection

- Existing visual baseline: inherit the current Yudi AI Lab site implementation
- Locale and writing system: Chinese-first with English product names
- Source: `existing-baseline`
- Exact token extraction and responsive verification remain parent-agent work
- No new typography direction is authorized by this Work Item

## Binding Principles

1. The current Yudi AI Lab shell is the authoritative portfolio baseline.
2. The six screenshots are first-party product evidence, not a replacement shell.
3. The local Idea Storm Lab repository is the source of truth for product claims.
4. Product-specific paper-workbench cues may support recognition without
   replacing the site's shared navigation and visual system.
5. Public method evidence must stay faithful to its source while being deliberately
   selected, readable, and privacy-sanitized.

## User-Facing Direction Summary

Use the existing portfolio language to introduce Idea Storm Lab as the second
lab project. Let the real product screens carry the evidence while the page
explains the product purpose and workflow in the established site hierarchy.
Ordinary composition details are delegated to Codex; any material departure from
the existing site baseline requires a new decision.

## Copyright Boundary

The references are user-provided or local first-party project materials. Keep
product claims traceable to those sources and do not add unlicensed third-party
brand assets.

## Parent Design Analysis

### Observable Product Traits

- Warm paper surfaces, a subtle square grid, thin dark outlines, and restrained
  offset shadows make the product feel like a shared workbench.
- Square controls and compact panel headings support a dense working application,
  rather than a marketing surface.
- Muted green carries primary actions and selected states. Note yellow, pale blue,
  and pin clay appear only as bounded working-paper accents.
- The desktop application is organized around persistent process navigation and
  high-density evidence, so portfolio screenshots should remain inspectable and
  should not be used as decorative crops.

### Adopted Principles

- Use the existing Yudi AI Lab shell as the authoritative portfolio frame.
- Use a full-width content cover to establish the product in the first viewport.
- Keep screenshot 1 as a first-party reference asset, but do not render it in the
  cover after the user's review.
- Map screenshots 2-6 to the real product loop:
  `写下想法 -> 形成分析 -> 共享灵感 -> 归纳方向`.
- Carry paper-workbench cues into screenshot frames and small `IS` markers only.
- Preserve the current portfolio typography, background, header, and page-index
  patterns.

### Explicitly Not Copied

- The Idea Storm Lab application top bar and four-tab navigation are not reused as
  portfolio navigation.
- Product forms, buttons, and application panels are not reconstructed as fake
  interactive portfolio controls.
- The source screenshots are not blurred, darkened, or cropped into atmospheric
  hero art.

### Final Asset Mapping

| Screenshot | Production asset | Portfolio role |
|---|---|---|
| Login | `assets/idea-storm-lab/01-login.png` | Reference asset only; not rendered after user review |
| Write / live analysis | `assets/idea-storm-lab/02-write-and-analyze.png` | Workflow stage 1 |
| Text analysis | `assets/idea-storm-lab/03-analysis-result.png` | Workflow stage 2A |
| Business canvas | `assets/idea-storm-lab/04-business-canvas.png` | Workflow stage 2B |
| Inspiration wall | `assets/idea-storm-lab/05-inspiration-wall.png` | Workflow stage 3 |
| Direction induction | `assets/idea-storm-lab/06-direction-induction.png` | Workflow stage 4 |

### Public Method Artifacts

| Source | Public artifact | Portfolio role |
|---|---|---|
| Idea Storm Lab analysis Skill | `assets/idea-storm-lab/ANALYSIS_SKILL.public.zh-CN.md` | Selected analysis principles, flow, and output contract; rendered through an in-page dialog |
| Internal Work Item state | `assets/idea-storm-lab/STATE.zh-CN.md` | Chinese, privacy-sanitized DesignHarnessAgent state presentation; rendered through an in-page dialog |
