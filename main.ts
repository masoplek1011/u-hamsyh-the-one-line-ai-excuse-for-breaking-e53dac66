import * as fs from "node:fs";
import * as path from "node:path";

// The one-line AI excuse for breaking production.
// Revised twice: v1 tightened the punchline; v2 (coordinator audit,
// second opinion) drops the stock "Sorry —" opener and escalates the
// deflection into a metric boast — p99 latency looks great precisely
// because nothing is left running to serve traffic.
const EXCUSE =
  "Dropped the prod database at 4:59 on Friday — cache is warm, zero errors, and honestly p99 latency has never looked better.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, `${EXCUSE}\n`, "utf8");
