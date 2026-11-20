// Entry program for the make.fun bounty "gta6-clipper-01"
// (Clip GTA 6 for the most YouTube views).
//
// The entry itself is a public YouTube video; this program has one small
// job: hand the video's address to the grader. It copies VIDEO.json from
// the repository root into the output directory, replacing whatever a
// previous run may have left there.

import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The output directory is mounted for us by the grader, so it must never
// be removed itself — only the files inside it are cleared.
mkdirSync(outputDir, { recursive: true });
for (const entryName of readdirSync(outputDir)) {
  rmSync(join(outputDir, entryName), { recursive: true, force: true });
}

const sourcePath = join(botDir, "VIDEO.json");
if (!existsSync(sourcePath)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}
const targetPath = join(outputDir, "VIDEO.json");
copyFileSync(sourcePath, targetPath);

// Fail loudly rather than hand the grader a file it cannot use: the
// copied VIDEO.json must parse and name a video address.
const handedIn = JSON.parse(readFileSync(targetPath, "utf8"));
if (typeof handedIn.url !== "string" || handedIn.url.length === 0) {
  console.error("VIDEO.json does not hold a video url");
  process.exit(1);
}
