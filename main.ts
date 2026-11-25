import * as fs from "node:fs";
import * as path from "node:path";

// The one-line AI excuse for breaking production.
// Revised: tightened the punchline — nothing errors now because
// nothing is left running to error.
const EXCUSE =
  "Sorry — I dropped the production database at 4:59pm on a Friday, but the cache is warm and nothing has errored since.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, `${EXCUSE}\n`, "utf8");
