# Reference Selection

## Work Item

- Event: `2026-07-29-1417-UX-001`
- Project: `履职分析工作流`
- Surface: `responsive-web`
- Mode: `lightweight / fast`

## Surface Resolution

- Primary surface: responsive portfolio web page
- Page type: independently addressable project page inside the Yudi AI Lab
  shared shell
- Task type: explain a personal AI workflow project through inspectable
  first-party build and customer-use evidence
- Out of scope: recreating Dify or the customer report system as the portfolio
  interface

## Selected Sources

### Workflow DSL Evidence

| Source | Observable orchestration evidence | Intended use | Boundary |
|---|---|---|---|
| Six data-tool exports: `查询工单数据 (1).yml`, `查询逾期工单数据 (1).yml`, `获取工单列表 (1).yml`, both `获取工单的统计结果` exports, and `查询任务履职分析结果.yml` | Time conversion, query filtering, HTTP retrieval, result normalization, and tool inputs | Establish a five-module data-tool layer | The two statistics exports are byte-identical; count them once logically. Do not expose endpoints, tokens, or payloads |
| Four analysis exports: both Flow 1 versions, `Flow2：任务执行质量.yml`, and `Flow3：时间维度，秒提交工单 (1).yml` | Person/position grouping, iterations, individual/group judgment, evidence retention, strong/weak anomaly rules, and LLM analysis | Establish three evolving duty-analysis modules | Treat the two Flow 1 files as an iteration family. Only short redacted Prompt excerpts may be public |
| Three report-generation exports: `Part1：本期三大类工单完成数据呈现.yml`, `C【0127】Part1：本期三大类工单完成数据呈现 (1).yml`, and `Part2：本期各专业工单完成情况呈现.yml` | Multi-month aggregation, category grouping, trend language, table generation, and professional summaries | Establish two report-generation modules | Treat both Part 1 files as an iteration family. Omit runtime bindings and raw operational values |
| `【存数据库版】Part1+2报告内容整合输出 (1).yml` | Subflow/tool composition, result extraction, code assembly, HTTP integration, time/content formatting, output | Show report composition across multiple analysis flows | Treat database or network integration as architecture evidence only; omit endpoints and credentials |
| `【存数据库版】Part2报告内容整合输出 (1).yml` | Flow1, Part2, and Flow2 composition; code extraction and assembly; HTTP integration; formatting and output | Show orchestration of reusable flows into a customer-facing report pipeline | Do not imply unsupported runtime scale or publish private configuration |

The 15 supplied files contain one exact duplicate and two iteration families.
After reconciliation they support 12 logical modules in four layers:

`5 data tools → 3 duty analyses → 2 report generators → 2 composition/writeback flows`

Together, the exports support a truthful orchestration story:

`查询数据 → 代码清洗与分组 → 迭代分析 → LLM 判断与总结 → 子流程整合 → HTTP/工具衔接 → 格式化输出`

The public page may simplify this chain for readability, but it must not add
steps or impact claims that are absent from the exports.

### Screenshot Evidence

All five supplied screenshots have intrinsic dimensions `1920 × 958`.

| Source | Observable evidence | Intended use | Required treatment |
|---|---|---|---|
| `20260724114127.jpg` | Dify workspace with a family of work-order and report workflows | Establish that the solution was implemented as a multi-workflow Dify system | Crop or obscure workspace/account identity and avoid relying on tiny interface text as the only explanation |
| `20260724114405.jpg` | Customer-side task-quality report with analysis, recommendations, and supporting image evidence | Show that workflow output reached a customer-facing report context | Remove or obscure customer-identifying header/account text and personal names |
| `20260724114442.jpg` | Customer-side rapid-submission and relative-efficiency analysis | Show a second report type produced for operational review | Remove or obscure identifying header/account text and personal names |
| `20260724114514.jpg` | Customer-side professional work-order summary with narrative analysis and charts | Show structured narrative plus visual reporting | Remove or obscure customer identifiers and avoid turning displayed figures into portfolio impact claims |
| `20260724114613.jpg` | Customer-side completion-rate trend analysis with grouped chart evidence | Show that the output includes inspectable trend reporting | Remove or obscure customer identifiers and preserve chart legibility |

The customer screenshots are evidence of successful use as stated by the user;
they are not evidence for a quantified ROI, efficiency gain, adoption count, or
current production status.

## Inherited Project References

| Source | Role | Adopt | Exclude |
|---|---|---|---|
| `docs/design/VISUAL_DESIGN.md` | Current visual authority | Mineral-green canvas, paper surfaces, typography, project switcher, page index, dialogs, responsive evidence framing | No new global palette or Dify-like application shell |
| `docs/design/project-memory/UX_DESIGN.md` | Durable interaction baseline | Independently addressable pages, consistent project switching, stable anchors, native dialog semantics | Do not create a fourth navigation system |
| `docs/design/project-memory/VISUAL_DESIGN.md` | Durable visual baseline | Shared shell, restrained project accents, inspectable first-party evidence | Do not let decorative workflow graphics compete with actual evidence |
| Sealed event `2026-07-28-1408-UX-001` | Authoritative predecessor | Multi-project portfolio and evidence-viewing precedent | Do not modify or reinterpret the sealed state |
| Cancelled event `2026-07-29-1028-UX-001` | Historical related implementation context | Preserve the current workspace after its public page and menu entry were removed | Do not restore it or change its Work Item state |

## Adopted Principles

- Lead with the user's actual contribution: decomposing an operational analysis
  problem into reusable, connected Dify workflows.
- Pair architecture evidence with customer-side output evidence so the page shows
  both construction and use.
- Explain the 12 logical modules as one four-layer system rather than a list of
  disconnected exports.
- Use a small set of redacted Prompt slices to demonstrate evidence boundaries,
  risk calibration, sample strategy, and output contracts.
- Use actual screenshots as the primary proof; any diagram or text summary is
  explanatory support.
- Keep claims narrow: workflow orchestration was completed and successfully used
  by the customer, as explicitly stated by the user.
- Preserve the shared Yudi AI Lab shell and use project-specific accents only
  inside the evidence treatment.

## Explicit Exclusions

- No Dify dashboard imitation as the page shell.
- No complete prompts, runtime variable references, endpoints, credentials,
  request payloads, database configuration, or operational records.
- No readable customer-identifying header or account text in public evidence.
- No invented automation rate, time saved, accuracy, adoption scale, ROI, or
  other impact metric.
- No third-party screenshots or stock imagery.
- No unlicensed Dify or customer brand asset extraction beyond the supplied
  first-party evidence.

## Reference Library and Color Cards

- Project reference library: absent.
- Project Color Card Registry: absent.
- Installation decision: not required because this Fast Profile event inherits
  the confirmed palette and does not schedule palette selection.

## Copyright and Privacy Boundary

- Use only the 15 user-supplied YML exports and five user-supplied screenshots
  as project-specific evidence.
- Derived crops, redactions, and annotations must preserve the meaning of the
  source evidence.
- Do not expose customer identity, account information, private configuration,
  personal names, or sensitive operational content.
- Do not publish or deploy without separate explicit user instruction.

## Parent Design Analysis

### Verified Workflow Topology

| Logical layer | Modules | Current nodes | Current edges | Observable mechanics |
|---|---:|---:|---:|---|
| Data tools | 5 | 27 | 14 | HTTP, time conversion, filtering, result normalization |
| Duty analysis | 3 | 46 | 40 | tool, code, iteration, LLM, HTTP, structured output |
| Report generation | 2 | 32 | 30 | code aggregation, iteration, LLM trend/table generation |
| Composition and writeback | 2 | 32 | 34 | subflow tools, code extraction, formatting, HTTP, output |
| **Total** | **12** | **137** | **118** | one reconciled analysis and report system |

Counts use the later version from each iteration family and count the exact
duplicate once. They are derived from the supplied DSL
`workflow.graph.nodes` and `workflow.graph.edges` arrays and remain internal
evidence rather than public performance metrics.

### Final Public Asset Mapping

| Public asset | Intrinsic dimensions | Portfolio role | Privacy treatment |
|---|---:|---|---|
| `assets/dify-workflow/01-dify-workspace.jpg` | `960 × 410` | Dify build evidence | Account header removed; reduced-resolution overview |
| `assets/dify-workflow/02-task-quality-report.jpg` | `1920 × 700` | Customer-side quality report | Header and personal-name region removed |
| `assets/dify-workflow/03-rapid-submit-analysis.jpg` | `1920 × 700` | Customer-side efficiency report | Header and personal-name region removed |
| `assets/dify-workflow/04-professional-summary.jpg` | `1920 × 842` | Professional work-order summary | Brand, navigation, and account header removed |
| `assets/dify-workflow/05-completion-trend.jpg` | `1920 × 842` | Completion trend report | Brand, navigation, and account header removed |

### Adopted Composition

- The cover pairs a concise personal-work statement with a system map showing
  five data tools, three analysis modules, report generation, composition, and
  customer output.
- A four-layer architecture explains the 12 logical modules.
- Four short Prompt slices demonstrate evidence preservation, risk calibration,
  sample-size handling, and strict output contracts.
- Real screenshots carry the delivery proof; the system map only helps visitors
  understand the relationship between them.
- The project-specific workflow blue stays inside system and evidence details.
- The conclusion states successful customer-side use without quantified impact.

### Explicitly Not Copied

- Dify's application header, workspace navigation, and card system are not used
  as the portfolio shell.
- The customer's application header, navigation, report containers, and chart
  styling are not reconstructed as portfolio components.
- Raw workflow graphs, complete prompts, tool configuration, endpoints, database
  details, runtime variable references, and request payloads are not published.
