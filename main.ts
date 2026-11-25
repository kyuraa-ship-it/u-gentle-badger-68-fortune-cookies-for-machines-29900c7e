import * as fs from "node:fs";
import * as path from "node:path";

const FORTUNE =
  "Your next update will fix a bug you never noticed and remove the feature you were waiting for. The changelog will call it progress.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Assert before writing.
if (FORTUNE.length < 1 || FORTUNE.length > 200) {
  throw new Error(`fortune length ${FORTUNE.length} outside gate 1-200`);
}
if (!FORTUNE.trim()) {
  throw new Error("fortune is only white space");
}
if (FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single line");
}
fs.writeFileSync(path.join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
console.log(FORTUNE);
console.log("chars:", FORTUNE.length);
