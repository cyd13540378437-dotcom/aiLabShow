# Yudi AI Lab Visual Design

## Baseline

Yudi AI Lab is a responsive portfolio for real AI product experiments. The
shared shell should feel like a quiet, inspectable working document rather than
a marketing template: mineral-green paper, a visible grid, fine dark rules,
compact navigation, restrained shadows, and dense but readable evidence.

## Visual Seed

The current baseline combines:

- The existing DesignHarnessAgent `Mineral Light` portfolio language.
- Idea Storm Lab's paper-workbench product identity.
- First-party product screenshots as primary evidence.

## Shared Shell

- Keep `宇迪的AI产品实验室 / Yudi AI Lab` as the first header signal.
- Use the project switcher for project-level navigation. It must name the active
  project and expose every sibling project with a one-line description.
- The project switcher closes after any project selection and when the visitor
  clicks outside it, including when the current-project link only changes the
  page fragment.
- Keep page-level navigation separate from project navigation: right-side page
  index on wide screens and a compact `目录` control on narrow screens.
- Project pages may adapt accents and evidence treatment, but should not create a
  parallel header, typography system, or global navigation pattern.

## Color System

The shared portfolio palette is inherited from DesignHarnessAgent.

| Token | Value | Use |
|---|---|---|
| Background | `#dce3dc` | Site canvas and grid field |
| Paper | `#eef1ec` | Primary shared surface |
| Raised paper | `#f3f5f0` | Menus, evidence frames, dialogs |
| Ink | `#111713` | Primary text and strong rules |
| Muted | `#4e5b53` | Supporting copy |
| Quiet | `#78837a` | Metadata and page indices |
| Accent | `#286b58` | Active state, focus, workflow line |
| Accent deep | `#1e4f43` | High-contrast accent text |

Idea Storm Lab adds two bounded evidence accents:

- Note yellow `#f4dda0` for the `IS` mark and paper-tape cues.
- Blueprint blue `#dbe5e8` for low-priority product-system surfaces.

These accents should not replace the shared mineral-green site canvas.

## Typography

- Display and body stack:
  `"Avenir Next", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`.
- Metadata stack:
  `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`.
- Letter spacing remains `0` for headings, body, controls, and Chinese copy.
- Desktop project-page display sizes use fixed steps between `52px` and `72px`;
  mobile steps use `36px` to `46px`.
- Body text remains at least `15px` on compact evidence copy and `17px` for
  narrative copy. Chinese line height should remain between `1.65` and `1.85`.

## Idea Storm Lab Project Page

### Narrative

The page is organized around one product loop:

`写下想法 -> 形成分析 -> 共享灵感 -> 归纳方向`

The page opens with a full-width, content-led product cover. The cover carries
the product name, `基于 Skill 的小工具`, the product proposition, version, and
compact metadata; it does not use a login screenshot. Real interface evidence
begins with the product workflow and maps screenshots 2-6 to the four stages.

### Evidence Treatment

- Screenshots remain uncropped in workflow sections.
- Every lazy-loaded workflow screenshot declares its first-party intrinsic
  `1920 x 958` dimensions so layout height is reserved before the image arrives.
- Screenshots use thin dark frames, a small paper-tape cue, and restrained offset
  shadows to connect the product's paper-workbench identity to the portfolio.
- Every screenshot can be opened at a larger size in a native dialog.
- Captions describe the product decision shown by the screen, not only the screen
  name.
- Method evidence appears after the product-system explanation and before release
  history, so visitors encounter product meaning before implementation process.
- The analysis Skill and public Work Item state use two side-by-side paper
  documents at wide widths and a single-column stack below `880px`.
- Public process documents may use small filename labels, compact metadata, and
  restrained bordered structures; they must not imitate a code editor or expose
  private operational context.

### Public Method Evidence

- The Skill document exposes only a faithful selection: task, principles, a
  representative analysis chain, quality constraints, and part of the output
  contract.
- The state document is a derived Chinese visitor view. It identifies the Work
  Item, goal, Design Contract, review focus, confirmed decisions, implementation,
  and privacy boundary.
- The internal `STATE.md` remains authoritative. Local filesystem paths,
  temporary attachments, agent identifiers, and runtime logs are excluded from
  the public version.
- Both document actions open a native in-page reading dialog. They must not
  navigate directly to or download the Markdown artifacts.
- The reading dialog uses the same close, backdrop, and native Escape behavior as
  the screenshot viewer, while providing a vertically scrollable document body.

### Responsive Behavior

- At wide widths, narrative text and evidence use a `200px + flexible` stage
  layout; stage copy may remain sticky while its evidence passes.
- Below `880px`, each stage becomes one column and screenshot pairs stack.
- The two method-evidence documents also stack below `880px`; principle grids,
  metadata grids, and analysis steps reduce columns again below `620px`.
- The document dialog becomes a near-full-screen reading sheet below `620px`,
  retaining a visible outer margin, stable close control, natural title wrapping,
  and an independently scrollable body.
- Below `620px`, page anchors use immediate positioning instead of long-distance
  smooth scrolling. This keeps the directory and direct fragment URLs responsive
  on the taller single-column page.
- The project switcher menu becomes a fixed-width-safe sheet with `14px` side
  margins on mobile.
- The hero keeps its typographic hierarchy and low-contrast `IS` watermark
  legible across breakpoints and reveals the start of the next section in the
  first viewport.
- Full-width screenshot frames remain zoomable because product text naturally
  becomes small on phone-width portfolio pages.

## Design Exclusions

- No generic SaaS gradient hero, floating decorative orbs, or stock imagery.
- No rounded-card composition for every section.
- No imitation of the Idea Storm Lab application shell as the portfolio shell.
- No new global palette or typography system per project.
- No invented product claims or interactions that are absent from first-party
  source and screenshots.
- No screenshot crops that remove information required to understand the product.
