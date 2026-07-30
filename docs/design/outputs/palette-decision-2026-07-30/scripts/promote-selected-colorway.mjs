import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(".");
const selectedId = "twilight-archive";
const selectedTitle = "暮色档案";

const pages = [
  {
    candidate: `DesignHarnessAgent-${selectedId}.html`,
    canonical: "index.html",
  },
  {
    candidate: `IdeaStormLab-${selectedId}.html`,
    canonical: "idea-storm-lab.html",
  },
  {
    candidate: `DutyAnalysisWorkflow-${selectedId}.html`,
    canonical: "dify-workflow.html",
  },
];

const canonicalLinks = new Map([
  [`DesignHarnessAgent-${selectedId}.html`, "index.html"],
  [`IdeaStormLab-${selectedId}.html`, "idea-storm-lab.html"],
  [`DutyAnalysisWorkflow-${selectedId}.html`, "dify-workflow.html"],
]);

for (const page of pages) {
  const candidatePath = path.join(projectRoot, page.candidate);
  const canonicalPath = path.join(projectRoot, page.canonical);
  let html = await fs.readFile(candidatePath, "utf8");

  for (const [candidate, canonical] of canonicalLinks) {
    html = html.replaceAll(`href="${candidate}"`, `href="${canonical}"`);
  }

  html = html.replace(
    "<!-- Standalone colorway generated from",
    `<!-- Selected production colorway: ${selectedTitle}. Promoted from`,
  );

  await fs.writeFile(canonicalPath, html);
  console.log(`Promoted ${page.candidate} -> ${page.canonical}`);
}
