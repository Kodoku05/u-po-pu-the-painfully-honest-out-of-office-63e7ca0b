const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const entry = "I am away until Monday and not reading email, because the last time I just checked, I came back to work three days early; I will reply then, properly rested and actually useful.";

if (!entry.trim() || entry.length > 200 || /[^\x20-\x7E]/.test(entry)) {
  throw new Error("Entry must be 1-200 nonblank printable ASCII characters on one line.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
