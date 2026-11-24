import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, at most 200 characters, a single sentence.
// The twist lands at the end: the tool meant to save you from passwords
// is the reason you reset yours every single time.
const LINE =
  "My password manager generated a password so strong that even I can't log in anymore, so now I just reset it every single time.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n")) throw new Error("line must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
