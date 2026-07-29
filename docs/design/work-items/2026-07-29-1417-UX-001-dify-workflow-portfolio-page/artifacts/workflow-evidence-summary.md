# Workflow Evidence Summary

## Source boundary

The second review uses all 15 user-supplied Dify DSL exports. No DSL file is
copied into the public site. Public Prompt slices are short, manually redacted
excerpts that omit node IDs, variable references, endpoints, credentials,
payloads, customer data, and internal operational records.

## Export reconciliation

- Supplied exports: **15**
- Byte-distinct exports: **14**
- Logical Workflow modules after version reconciliation: **12**
- Exact duplicate: the two `获取工单的统计结果` exports share the same SHA-256
  digest.
- Iteration family 1: the original overdue-analysis Flow and the later
  personal/group version represent one evolving logical module.
- Iteration family 2: the original Part 1 report Flow and the later `C【0127】`
  version represent one evolving logical module.

The current logical topology contains 137 nodes and 118 edges when the later
version from each iteration family is used and the exact duplicate is counted
once. These counts remain internal evidence; the public statistics strip was
removed at the user's request.

## Logical architecture

| Layer | Logical modules | Modules |
|---|---:|---|
| Data tools | 5 | 查询工单数据、查询逾期工单数据、获取工单列表、获取工单的统计结果、查询任务履职分析结果 |
| Duty analysis | 3 | 个人与群体逾期、任务执行质量、秒提交与相对效率 |
| Report generation | 2 | 三大类工单完成趋势、各专业工单完成情况 |
| Composition and writeback | 2 | Part 2 内容整合、Part 1 + 2 完整输出 |
| **Total** | **12** | |

## Public mechanics supported by the DSL

- HTTP and tool-based data retrieval
- Timestamp conversion, extraction, simplification, grouping, aggregation, and
  output formatting in code nodes
- Iteration over people, positions, professional categories, and time ranges
- Evidence-bound LLM analysis and recommendation
- Separation of strong anomaly rules from weaker relative-efficiency signals
- Sample-size-aware trend language
- Strict JSON and Markdown output contracts for downstream rendering
- Subflow/tool composition and HTTP writeback

## Selected Prompt slices

The public page includes four short, redacted Prompt ideas:

1. Preserve task and image evidence; do not infer beyond the supplied input.
2. Separate strong anomaly rules from weak relative signals; downgrade
   conclusions when sample size is low.
3. Use different trend language for one, two, or three-plus months of data.
4. Preserve JSON field names and hierarchy so downstream extraction and
   presentation remain stable.

These excerpts demonstrate constraint design. They do not expose complete
prompts or private runtime bindings.
