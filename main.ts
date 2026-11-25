import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Bot Fixed Wi-Fi; House Went Dark";

if (STORY.length !== 32) {
  throw new Error("Story must be exactly 32 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, STORY, "utf8");
chmodSync(outFile, 0o644);
