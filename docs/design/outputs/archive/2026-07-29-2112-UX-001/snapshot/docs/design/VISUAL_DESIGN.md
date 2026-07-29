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
- Above `1180px`, use one flat project-navigation strip that exposes all three
  current portfolio destinations without a disclosure step. The three entries
  are equal-width `250px` tabs, with each explanation allowed to wrap naturally
  to two lines. Keep the project order consistent across pages and identify the
  current project through `aria-current="page"`, a quiet raised surface, and
  the shared accent rule.
- At `1180px` and below, replace the flat strip with the existing collapsed
  project switcher. It must name the active project, expose every sibling
  project with its complete description, remain viewport-safe, and close after
  any project selection or outside click.
- Use the confirmed project explanations verbatim in both navigation modes:
  `以声明式Harness为控制内核的Agent-Native产品设计系统`,
  `以skill和context-engineering为核心的创意管理空间`, and
  `用Dify编排履职分析workflow，成功协助客户完成履职管理`.
- Keep page-level navigation separate from project navigation: right-side page
  index on wide screens and a compact `目录` control on narrow screens.
- Treat the shared shell as fixed geometry, not as a page-specific
  reinterpretation. At desktop widths the header uses `24px` horizontal
  padding, a `246px` brand block, a `22px` gap, and an approximately `69px`
  high project-navigation control. Project names use `13px` type; their
  explanations use `11px` type with `14.3px` line height. The right-side page
  index uses `top: clamp(116px, 30vh, 260px)`, `right: 34px`, and
  `width: 146px`; from `1540px` down it uses `right: 18px` and `width: 132px`.
- Keep the permanent page index visible through `1181px`. At `1180px` and
  below, hide it and expose the compact header `目录` control. Page-specific
  cover layouts must not introduce their own navigation breakpoint.
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

## 履职分析工作流 Project Page

### Narrative

The fourth project page presents one applied delivery chain:

`业务拆解 -> Workflow 编排 -> 构建证据 -> 客户侧结果 -> 上线交付`

The page leads with the user's contribution rather than a generic introduction
to Dify. It reconciles 15 supplied exports into 12 logical modules: five data
tools, three duty-analysis modules, two report generators, and two
composition/writeback modules. The public result is limited to the evidenced
claim that the workflow was integrated into and used through the customer's
work-order performance-report surface.

### Evidence Treatment

- Workflow structure is derived from 15 first-party Dify DSL exports. Duplicate
  and version-family reconciliation remains in the internal evidence record;
  public copy describes the delivered data-to-analysis-to-report-to-writeback
  chain and presents the 12-module architecture without exposing file-audit
  process as project output.
- Four short Prompt slices may demonstrate evidence preservation, risk
  calibration, sample-size handling, and output contracts. They must omit
  complete prompts, variable references, endpoints, credentials, payloads, and
  operational records.
- The Dify workspace screenshot is cropped above the account area and reduced to
  a bounded build-evidence image. It does not become the portfolio shell.
- Four customer-side report screenshots are cropped below customer-brand,
  navigation, account, and personal-name regions.
- The `产品切片` section keeps Workflow-workspace and customer-product slices
  separate so visitors can distinguish orchestration from delivered output.
- A bounded workflow blue (`#3568e5`) identifies nodes, links, evidence labels,
  and local active states. It does not replace the shared mineral-green canvas,
  paper surfaces, site accent, typography, or navigation.
- Screenshot dialogs use the shared native-dialog pattern. On compact screens,
  full-resolution evidence remains horizontally and vertically scrollable
  rather than being reduced to unreadable text.
- Screenshot figures and public copy do not convert customer report numbers into
  portfolio impact, efficiency, adoption, ROI, or performance claims.

### Responsive Behavior

- The two-column cover becomes a single column below `1100px`; its system map
  becomes a vertical data-to-analysis-to-output chain below `820px`.
- The four-layer orchestration map uses three module columns on wide screens,
  two below `820px`, and one below `560px`. Prompt slices use two columns on
  wide screens and one below `820px`.
- The wide `PAGE INDEX` inherits the shared fixed geometry and remains visible
  above `1180px`, including at `1440px`. At `1180px` and below it is replaced by
  the shared compact header directory.
- Direct fragment URLs and directory clicks land sections below the sticky
  header and synchronize the current navigation state.
- Below `560px`, project and page menus keep `14px` viewport margins, evidence
  cards stack, and native dialogs keep an outer margin while exposing
  full-resolution scrollable evidence.

## Design Exclusions

- No generic SaaS gradient hero, floating decorative orbs, or stock imagery.
- No rounded-card composition for every section.
- No imitation of the Idea Storm Lab application shell as the portfolio shell.
- No imitation of the Dify workspace or customer report application as the
  portfolio shell.
- No new global palette or typography system per project.
- No invented product claims or interactions that are absent from first-party
  source and screenshots.
- No screenshot crops that remove information required to understand the product.
