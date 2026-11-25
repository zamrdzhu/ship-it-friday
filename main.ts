import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday: the funniest one-line git commit message an AI agent
// writes right before breaking production on a Friday afternoon.
const LINES: string[] = [
  "fix: ship it Friday, tests passed locally — prod is just a rumor with a database",
];

const MAX_CHARS = 159;
const EXPECTED_LINES = 1;

// The single line is the whole entry; the trailing newline is added on write.
const text = LINES.join("\n");

if (LINES.length !== EXPECTED_LINES) {
  throw new Error(`Expected ${EXPECTED_LINES} lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (line.trim().length === 0) {
    throw new Error("A line must not be blank");
  }
}
if (text.length < 1 || text.length > MAX_CHARS) {
  throw new Error(`Entry is ${text.length} characters, limit is ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`Wrote ${text.length} characters in ${LINES.length} line(s) to /output/entry.txt`);
