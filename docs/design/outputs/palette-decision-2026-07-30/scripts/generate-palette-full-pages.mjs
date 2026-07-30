import fs from "node:fs/promises";
import path from "node:path";

const experimentPath =
  process.argv[2] ||
  "/Users/caoyudi/Downloads/Yudi_AI_Lab_配色渐变升级实验_原布局不变.html";
const projectRoot = path.resolve(".");
const sourcePagePath = path.join(projectRoot, "index.html");
const ideaStormPagePath = path.join(projectRoot, "idea-storm-lab.html");
const dutyWorkflowPagePath = path.join(projectRoot, "dify-workflow.html");

function extract(source, pattern, label) {
  const match = source.match(pattern);
  if (!match) throw new Error(`Could not extract ${label}`);
  return match[1];
}

function extractPaletteCss(experiment, id) {
  return extract(
    experiment,
    new RegExp(`<template id="palette-css-${id}"><style>([\\s\\S]*?)</style></template>`),
    `palette-css-${id}`,
  );
}

function replaceAllCaseInsensitive(source, from, to) {
  return source.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), to);
}

function createNightAuroraCss(currentCss) {
  const replacements = new Map([
    ["#dce3dc", "#07100C"],
    ["#eef1ec", "#0C1511"],
    ["#e5ebe5", "#111B16"],
    ["#f3f5f0", "#16211B"],
    ["#111713", "#F3F0E8"],
    ["#4e5b53", "#A1A099"],
    ["#78837a", "#869E93"],
    ["#286b58", "#8ED8B8"],
    ["#1e4f43", "#5FB998"],
    ["#946247", "#2E7C8A"],
    ["#315f73", "#B79574"],
    ["#102e27", "#081612"],
    ["#19483b", "#103326"],
    ["#2a5747", "#1B4938"],
    ["#edf3ed", "#F3F0E8"],
    ["#e0c797", "#B79574"],
    ["#d9c491", "#B79574"],
    ["#a96043", "#B79574"],
    ["#f4dda0", "#273126"],
    ["#dbe5e8", "#102326"],
    ["#3568e5", "#8ED8B8"],
    ["#2448a6", "#5FB998"],
    ["#e5e9f8", "#142720"],
    ["#c8d4ff", "#4E8E7B"],
    ["#e9edf4", "#111B16"],
    ["rgba(17, 23, 19", "rgba(243, 240, 232"],
    ["rgba(40, 107, 88", "rgba(142, 216, 184"],
    ["rgba(148, 98, 71", "rgba(46, 124, 138"],
    ["rgba(49, 95, 115", "rgba(183, 149, 116"],
    ["rgba(189, 148, 63", "rgba(183, 149, 116"],
    ["rgba(220, 227, 220", "rgba(7, 16, 12"],
    ["rgba(238, 241, 236", "rgba(12, 21, 17"],
    ["rgba(229, 235, 229", "rgba(17, 27, 22"],
    ["rgba(243, 245, 240", "rgba(22, 33, 27"],
    ["rgba(246, 248, 244", "rgba(243, 240, 232"],
    ["rgba(244, 221, 160", "rgba(183, 149, 116"],
    ["rgba(219, 229, 232", "rgba(16, 35, 38"],
    ["rgba(53, 104, 229", "rgba(142, 216, 184"],
    ["rgba(229, 233, 248", "rgba(20, 39, 32"],
  ]);

  let css = currentCss;
  for (const [from, to] of replacements) css = replaceAllCaseInsensitive(css, from, to);
  return css;
}

const sharedPaletteReplacements = {
  "twilight-archive": new Map([
    ["#dce3dc", "#DDD9D0"],
    ["#eef1ec", "#F5F1E9"],
    ["#e5ebe5", "#EAE6DE"],
    ["#f3f5f0", "#FCF8F0"],
    ["#111713", "#171D23"],
    ["#4e5b53", "#525A60"],
    ["#78837a", "#7D807E"],
    ["#286b58", "#244E6B"],
    ["#1e4f43", "#143247"],
    ["#946247", "#A94D3A"],
    ["#315f73", "#9A7B3F"],
    ["#a96043", "#A94D3A"],
    ["#f4dda0", "#DAB765"],
    ["#dbe5e8", "#DAE2E7"],
    ["#3568e5", "#244E6B"],
    ["#2448a6", "#143247"],
    ["#e5e9f8", "#E5EAEE"],
    ["#c8d4ff", "#B3C6D1"],
    ["#e9edf4", "#E7EBED"],
    ["rgba(17, 23, 19", "rgba(23, 29, 35"],
    ["rgba(40, 107, 88", "rgba(36, 78, 107"],
    ["rgba(148, 98, 71", "rgba(169, 77, 58"],
    ["rgba(49, 95, 115", "rgba(154, 123, 63"],
    ["rgba(189, 148, 63", "rgba(205, 168, 87"],
    ["rgba(220, 227, 220", "rgba(221, 217, 208"],
    ["rgba(238, 241, 236", "rgba(245, 241, 233"],
    ["rgba(229, 235, 229", "rgba(234, 230, 222"],
    ["rgba(243, 245, 240", "rgba(252, 248, 240"],
    ["rgba(246, 248, 244", "rgba(254, 251, 244"],
    ["rgba(244, 221, 160", "rgba(218, 183, 101"],
    ["rgba(219, 229, 232", "rgba(218, 226, 231"],
    ["rgba(53, 104, 229", "rgba(36, 78, 107"],
    ["rgba(229, 233, 248", "rgba(229, 234, 238"],
  ]),
  "vermilion-dusk": new Map([
    ["#dce3dc", "#E1DAD0"],
    ["#eef1ec", "#F7F1E7"],
    ["#e5ebe5", "#EEE5D9"],
    ["#f3f5f0", "#FFF9F0"],
    ["#111713", "#1B1815"],
    ["#4e5b53", "#5B514A"],
    ["#78837a", "#887D73"],
    ["#286b58", "#A74735"],
    ["#1e4f43", "#762D25"],
    ["#946247", "#B18A4A"],
    ["#315f73", "#36556A"],
    ["#a96043", "#A74735"],
    ["#f4dda0", "#E2B75E"],
    ["#dbe5e8", "#E4DED8"],
    ["#3568e5", "#A74735"],
    ["#2448a6", "#762D25"],
    ["#e5e9f8", "#F0DDD5"],
    ["#c8d4ff", "#DDB791"],
    ["#e9edf4", "#EFE6DD"],
    ["rgba(17, 23, 19", "rgba(27, 24, 21"],
    ["rgba(40, 107, 88", "rgba(167, 71, 53"],
    ["rgba(148, 98, 71", "rgba(177, 138, 74"],
    ["rgba(49, 95, 115", "rgba(54, 85, 106"],
    ["rgba(189, 148, 63", "rgba(222, 182, 102"],
    ["rgba(220, 227, 220", "rgba(225, 218, 208"],
    ["rgba(238, 241, 236", "rgba(247, 241, 231"],
    ["rgba(229, 235, 229", "rgba(238, 229, 217"],
    ["rgba(243, 245, 240", "rgba(255, 249, 240"],
    ["rgba(246, 248, 244", "rgba(255, 251, 243"],
    ["rgba(244, 221, 160", "rgba(226, 183, 94"],
    ["rgba(219, 229, 232", "rgba(228, 222, 216"],
    ["rgba(53, 104, 229", "rgba(167, 71, 53"],
    ["rgba(229, 233, 248", "rgba(240, 221, 213"],
  ]),
};

function transformMineralCss(css, paletteId) {
  if (paletteId === "night-aurora") return createNightAuroraCss(css);
  const replacements = sharedPaletteReplacements[paletteId];
  if (!replacements) throw new Error(`Missing replacements for ${paletteId}`);
  let transformed = css;
  for (const [from, to] of replacements) {
    transformed = replaceAllCaseInsensitive(transformed, from, to);
  }
  return transformed;
}

function removePaletteLabRules(css) {
  return css
    .replace(/#palette-lab\s*\{[^}]*\}\s*/g, "")
    .replace(/#palette-lab\s+\.palette-lab__tab\[aria-selected="true"\]\s*\{[^}]*\}\s*/g, "")
    .trim();
}

const nightAuroraEnhancement = `
/* Night Aurora: stable dark reading planes with low-frequency edge light. */
:root {
  color-scheme: dark;
  --bg: #07100C;
  --paper: #0C1511;
  --paper-soft: #111B16;
  --paper-raised: #16211B;
  --ink: #F3F0E8;
  --muted: #A1A099;
  --quiet: #869E93;
  --line: rgba(243, 240, 232, 0.11);
  --line-strong: rgba(243, 240, 232, 0.2);
  --accent: #8ED8B8;
  --accent-deep: #5FB998;
  --accent-2: #2E7C8A;
  --accent-3: #B79574;
  --wash-green: rgba(142, 216, 184, 0.12);
  --wash-clay: rgba(46, 124, 138, 0.12);
  --wash-blue: rgba(74, 127, 139, 0.12);
  --wash-cream: rgba(183, 149, 116, 0.12);
}
body {
  background:
    linear-gradient(rgba(142, 216, 184, 0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(142, 216, 184, 0.019) 1px, transparent 1px),
    radial-gradient(ellipse 64% 44% at 6% -4%, rgba(92, 214, 159, 0.2), transparent 68%),
    radial-gradient(ellipse 52% 38% at 94% 14%, rgba(46, 124, 138, 0.17), transparent 70%),
    radial-gradient(ellipse 44% 34% at 68% 94%, rgba(183, 149, 116, 0.07), transparent 72%),
    linear-gradient(145deg, #07100C 0%, #0B1511 50%, #080D0B 100%);
  background-size: 44px 44px, 44px 44px, auto, auto, auto, auto;
}
.site-header {
  background: linear-gradient(106deg, rgba(7, 16, 12, 0.94), rgba(12, 23, 18, 0.9) 58%, rgba(10, 22, 21, 0.91));
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.26), inset 0 -1px 0 rgba(142, 216, 184, 0.035);
}
.opening-prelude {
  background:
    radial-gradient(ellipse 48% 62% at 84% 40%, rgba(46, 124, 138, 0.2), transparent 68%),
    radial-gradient(ellipse 48% 62% at 3% 76%, rgba(92, 214, 159, 0.17), transparent 70%),
    radial-gradient(circle at 70% 76%, rgba(183, 149, 116, 0.08), transparent 30%),
    linear-gradient(118deg, #08120E 0%, #0D1B16 56%, #0A1514 100%);
}
.opening-prelude::after {
  background:
    radial-gradient(circle at 56% 43%, rgba(142, 216, 184, 0.07), transparent 35%),
    radial-gradient(circle at 62% 52%, rgba(46, 124, 138, 0.18), transparent 49%),
    radial-gradient(circle at 26% 68%, rgba(183, 149, 116, 0.055), transparent 38%);
}
.opening-core {
  background: linear-gradient(145deg, #081612 0%, #103326 58%, #1B4938 100%);
  box-shadow: 0 0 0 16px rgba(142, 216, 184, 0.035), 0 36px 92px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
main > section:not(.hero) {
  background:
    radial-gradient(ellipse 50% 24% at 92% 0%, rgba(46, 124, 138, 0.075), transparent 72%),
    linear-gradient(180deg, rgba(17, 27, 22, 0.72), rgba(12, 21, 17, 0.16) 190px, transparent 430px),
    linear-gradient(104deg, rgba(142, 216, 184, 0.035), transparent 38%, rgba(46, 124, 138, 0.028) 75%, transparent);
}
main > section:nth-of-type(2n + 1):not(.hero) {
  background:
    radial-gradient(ellipse 46% 22% at 10% 0%, rgba(142, 216, 184, 0.055), transparent 72%),
    linear-gradient(180deg, rgba(7, 16, 12, 0.6), rgba(7, 16, 12, 0.08) 190px, transparent 430px),
    linear-gradient(100deg, rgba(183, 149, 116, 0.025), transparent 44%, rgba(46, 124, 138, 0.025) 76%, transparent);
}
.foundation-layer,
.capability-stage,
.ux-stage,
.fracture-card,
.evolution-card,
.case-file,
.case-step,
.case-decision,
.case-evidence-board,
.case-proof,
.case-output-item,
.model-achievement-card,
.model-slice-card,
.model-collab-card,
.model-inherit-card,
.ux-process-card,
.ux-decision-panel,
.ux-output-panel {
  background: linear-gradient(145deg, rgba(22, 33, 27, 0.76), rgba(12, 21, 17, 0.48));
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(142, 216, 184, 0.035);
}
.closing,
.closing-wash {
  background:
    radial-gradient(circle at 76% 34%, rgba(183, 149, 116, 0.14), transparent 13%),
    radial-gradient(ellipse 42% 68% at 84% 44%, rgba(46, 124, 138, 0.25), transparent 68%),
    radial-gradient(ellipse 48% 72% at 18% 62%, rgba(92, 214, 159, 0.17), transparent 72%),
    linear-gradient(118deg, #050B08 0%, #0B2119 48%, #102B29 100%);
}
`;

const experiment = await fs.readFile(experimentPath, "utf8");
const sourcePage = await fs.readFile(sourcePagePath, "utf8");
const ideaStormPage = await fs.readFile(ideaStormPagePath, "utf8");
const dutyWorkflowPage = await fs.readFile(dutyWorkflowPagePath, "utf8");
const currentCss = extractPaletteCss(experiment, "current");
const blueprintCss = extractPaletteCss(experiment, "blueprint");
const vermilionCss = extractPaletteCss(experiment, "vermilion");
const sourceStyle = extract(sourcePage, /<style>([\s\S]*?)<\/style>/, "index page style");
const ideaStormStyle = extract(
  ideaStormPage,
  /<style>([\s\S]*?)<\/style>/,
  "Idea Storm Lab page style",
);
const dutyWorkflowStyle = extract(
  dutyWorkflowPage,
  /<style>([\s\S]*?)<\/style>/,
  "duty workflow page style",
);

if (sourceStyle !== currentCss) {
  throw new Error("The experiment palette templates no longer match index.html; aborting.");
}

const enhancementsText = extract(
  experiment,
  /const enhancements = (\{[\s\S]*?\});\s*const encodedAssets =/,
  "palette enhancements",
);
const enhancements = JSON.parse(enhancementsText);

const variants = [
  {
    id: "night-aurora",
    title: "夜幕极光",
    description: "近黑绿正文面配青绿与深海蓝边缘光，测试暗色方案在叙事页、创意工具和高密度工作流中的一致性。",
    colors: ["#07100C", "#0C1511", "#8ED8B8", "#2E7C8A", "#F3F0E8"],
    ink: "#F3F0E8",
    paper: "#0C1511",
    background: "#07100C",
    accent: "#8ED8B8",
    secondary: "#2E7C8A",
    designHarnessCss: createNightAuroraCss(currentCss),
    enhancement: nightAuroraEnhancement,
  },
  {
    id: "twilight-archive",
    title: "暮色档案",
    description: "暖纸白、普鲁士蓝、朱砂与黄铜形成冷暖秩序，测试复杂内容里既专业又有作者感的上限。",
    colors: ["#DDD9D0", "#F6F2E9", "#171D23", "#244E6B", "#A94D3A"],
    ink: "#171D23",
    paper: "#F6F2E9",
    background: "#DDD9D0",
    accent: "#244E6B",
    secondary: "#A94D3A",
    designHarnessCss: blueprintCss,
    enhancement: removePaletteLabRules(enhancements["twilight-archive"]),
  },
  {
    id: "vermilion-dusk",
    title: "朱砂暮金",
    description: "朱砂负责判断和行动，暮金负责稀缺高光，测试暖调方案能否覆盖专业工具而不滑向营销感。",
    colors: ["#E1DAD0", "#F8F2E8", "#1B1815", "#A74735", "#B18A4A"],
    ink: "#1B1815",
    paper: "#F8F2E8",
    background: "#E1DAD0",
    accent: "#A74735",
    secondary: "#B18A4A",
    designHarnessCss: vermilionCss,
    enhancement: removePaletteLabRules(enhancements["vermilion-dusk"]),
  },
];

const pages = [
  {
    id: "design-harness",
    title: "DesignHarnessAgent",
    source: sourcePage,
    filePrefix: "DesignHarnessAgent",
    style: (variant) => variant.designHarnessCss,
    summary: "长篇产品叙事与系统架构",
  },
  {
    id: "idea-storm",
    title: "Idea Storm Lab",
    source: ideaStormPage,
    filePrefix: "IdeaStormLab",
    style: (variant) => transformMineralCss(ideaStormStyle, variant.id),
    summary: "创意工作台、便签与视觉证据",
  },
  {
    id: "duty-workflow",
    title: "履职分析工作流",
    source: dutyWorkflowPage,
    filePrefix: "DutyAnalysisWorkflow",
    style: (variant) => transformMineralCss(dutyWorkflowStyle, variant.id),
    summary: "高密度流程、节点与分析结果",
  },
];

function variantFilename(page, variant) {
  return `${page.filePrefix}-${variant.id}.html`;
}

function rewriteProjectNavigation(html, variant) {
  const filenameBySource = new Map([
    ["index.html", variantFilename(pages[0], variant)],
    ["idea-storm-lab.html", variantFilename(pages[1], variant)],
    ["dify-workflow.html", variantFilename(pages[2], variant)],
  ]);
  let rewritten = html;
  for (const [source, target] of filenameBySource) {
    rewritten = rewritten.replaceAll(`href="${source}"`, `href="${target}"`);
  }
  return rewritten;
}

for (const variant of variants) {
  for (const page of pages) {
    let html = page.source;
    const outputFile = variantFilename(page, variant);
    const pageStyle = page.style(variant);
    html = rewriteProjectNavigation(html, variant);
    html = html.replace(
      /<html lang="zh-CN"([^>]*)>/,
      `<html lang="zh-CN"$1 data-palette="${variant.id}">`,
    );
    html = html.replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${page.title} · ${variant.title}</title>`,
    );
    html = html.replace(
      /<style>[\s\S]*?<\/style>/,
      `<style id="page-palette-style">${pageStyle}</style>\n  <style id="palette-enhancement-style">${variant.enhancement || ""}</style>`,
    );
    html = html.replace(
      "</head>",
      `  <meta name="colorway" content="${variant.title}">\n  <!-- Standalone colorway generated from ${path.basename(page.id)}; layout, content and interaction remain unchanged. -->\n</head>`,
    );
    await fs.writeFile(path.join(projectRoot, outputFile), html);
    console.log(`Generated ${outputFile}`);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function comparisonHub() {
  const sections = variants
    .map((variant, variantIndex) => {
      const previews = pages
        .map((page) => {
          const filename = variantFilename(page, variant);
          const screenshot = `assets/palette-full-pages/${page.id}-${variant.id}-hero.png`;
          return `<article class="page-card">
            <a class="preview" href="${filename}" aria-label="打开 ${page.title} · ${variant.title}">
              <img src="${screenshot}" alt="${page.title} · ${variant.title} 首屏预览" loading="lazy">
            </a>
            <div class="page-meta">
              <div><strong>${page.title}</strong><span>${page.summary}</span></div>
              <a class="open-link" href="${filename}">打开完整页 <span aria-hidden="true">↗</span></a>
            </div>
          </article>`;
        })
        .join("");
      const swatches = variant.colors
        .map((color) => `<i style="--swatch:${color}" title="${color}"></i>`)
        .join("");
      return `<section class="scheme" style="--scheme-bg:${variant.background};--scheme-paper:${variant.paper};--scheme-ink:${variant.ink};--scheme-accent:${variant.accent};--scheme-secondary:${variant.secondary}">
        <header class="scheme-header">
          <div class="scheme-number">0${variantIndex + 1}</div>
          <div class="scheme-copy">
            <p>COLOR SYSTEM</p>
            <h2>${variant.title}</h2>
            <span>${variant.description}</span>
          </div>
          <div class="swatches" aria-label="${variant.title}色板">${swatches}</div>
        </header>
        <div class="page-grid">${previews}</div>
      </section>`;
    })
    .join("");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Yudi AI Lab · 三套配色全站决策板</title>
  <style>
    * { box-sizing: border-box; }
    :root { color-scheme: dark; font-family: "Avenir Next","PingFang SC","Microsoft YaHei",sans-serif; }
    body { margin:0; background:#0c0e0d; color:#f3f0e8; }
    a { color:inherit; text-decoration:none; }
    .masthead { width:min(1480px,calc(100% - 48px)); margin:auto; padding:72px 0 48px; }
    .eyebrow { color:#8ed8b8; font:700 12px/1.2 ui-monospace,monospace; letter-spacing:.16em; }
    h1 { max-width:920px; margin:20px 0 18px; font-size:clamp(42px,6vw,84px); line-height:.94; letter-spacing:-.055em; }
    .intro { max-width:760px; color:#a9ada8; font-size:17px; line-height:1.75; }
    .legend { display:flex; gap:18px; margin-top:32px; color:#7e8580; font:600 12px/1.4 ui-monospace,monospace; }
    .legend b { color:#f3f0e8; }
    .scheme { padding:52px max(24px,calc((100vw - 1480px)/2)); background:
      radial-gradient(circle at 8% 0%, color-mix(in srgb,var(--scheme-accent) 18%,transparent),transparent 32%),
      radial-gradient(circle at 94% 12%, color-mix(in srgb,var(--scheme-secondary) 14%,transparent),transparent 28%),
      var(--scheme-bg); color:var(--scheme-ink); border-top:1px solid color-mix(in srgb,var(--scheme-ink) 16%,transparent); }
    .scheme-header { display:grid; grid-template-columns:72px minmax(0,1fr) auto; gap:22px; align-items:start; margin-bottom:28px; }
    .scheme-number { color:var(--scheme-accent); font:700 16px/1 ui-monospace,monospace; padding-top:9px; }
    .scheme-copy p { margin:0 0 8px; color:var(--scheme-accent); font:700 11px/1 ui-monospace,monospace; letter-spacing:.14em; }
    .scheme-copy h2 { margin:0; font-size:clamp(34px,4vw,58px); letter-spacing:-.045em; }
    .scheme-copy span { display:block; max-width:760px; margin-top:10px; color:color-mix(in srgb,var(--scheme-ink) 68%,transparent); line-height:1.65; }
    .swatches { display:flex; gap:7px; padding-top:8px; }
    .swatches i { width:34px; height:34px; border-radius:50%; background:var(--swatch); border:1px solid color-mix(in srgb,var(--scheme-ink) 22%,transparent); box-shadow:0 0 0 4px color-mix(in srgb,var(--scheme-paper) 68%,transparent); }
    .page-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
    .page-card { overflow:hidden; border:1px solid color-mix(in srgb,var(--scheme-ink) 17%,transparent); border-radius:12px; background:color-mix(in srgb,var(--scheme-paper) 88%,transparent); box-shadow:0 22px 54px color-mix(in srgb,#000 18%,transparent); }
    .preview { display:block; overflow:hidden; aspect-ratio:16/10; background:var(--scheme-paper); }
    .preview img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform .24s ease; }
    .preview:hover img { transform:scale(1.018); }
    .page-meta { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 17px 18px; }
    .page-meta strong,.page-meta span { display:block; }
    .page-meta strong { font-size:16px; }
    .page-meta span { margin-top:4px; color:color-mix(in srgb,var(--scheme-ink) 58%,transparent); font-size:12px; }
    .open-link { flex:none; border:1px solid color-mix(in srgb,var(--scheme-accent) 35%,transparent); border-radius:999px; padding:9px 12px; color:var(--scheme-accent); font-size:12px; font-weight:700; }
    footer { padding:30px 24px 42px; text-align:center; color:#727874; font-size:12px; }
    @media (max-width:900px) {
      .masthead { width:min(100% - 30px,1480px); padding:48px 0 34px; }
      .scheme { padding:38px 15px; }
      .scheme-header { grid-template-columns:44px 1fr; }
      .swatches { grid-column:2; }
      .page-grid { grid-template-columns:1fr; }
    }
  </style>
</head>
<body>
  <header class="masthead">
    <p class="eyebrow">YUDI AI LAB / COLORWAY DECISION SUITE</p>
    <h1>三套配色，<br>九个真实页面。</h1>
    <p class="intro">不再只看 DesignHarnessAgent。横向比较同一配色能否稳定覆盖长篇叙事、创意工作台和高密度工作流；纵向比较同一作品在三套色彩系统下的气质变化。</p>
    <div class="legend"><span><b>横向</b> 同一方案 × 三个作品</span><span><b>纵向</b> 同一作品 × 三套方案</span></div>
  </header>
  <main>${sections}</main>
  <footer>所有预览均链接到完整、可交互的独立页面 · 原始正式页面保持不变</footer>
</body>
</html>`;
}

const hubFile = "palette-decision-suite.html";
await fs.writeFile(path.join(projectRoot, hubFile), comparisonHub());
console.log(`Generated ${hubFile}`);
