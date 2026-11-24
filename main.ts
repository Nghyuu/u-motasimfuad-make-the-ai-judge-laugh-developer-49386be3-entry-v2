// Entry: one-line developer excuse for production breaking.
// The joke: skipping staging because it was down — only to learn it was
// the one place the code ever worked. Writes the line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt).
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I skipped the staging deploy because staging was down — turns out staging was the only environment where it worked.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
