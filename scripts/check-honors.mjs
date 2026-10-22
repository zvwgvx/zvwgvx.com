import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { honors } from "../src/data/updates.ts";

function readRendered(path) {
  return readFileSync(path, "utf8")
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"');
}

const cv = readRendered("dist/cv/index.html");
const updates = readRendered("dist/updates/index.html");

let lastCvIndex = -1;
let lastUpdatesIndex = -1;

for (const honor of honors) {
  const cvIndex = cv.indexOf(honor.title);
  const updateIndex = updates.indexOf(honor.title);

  assert.ok(cvIndex !== -1, `Missing from CV: ${honor.title}`);
  assert.ok(updateIndex !== -1, `Missing from Updates: ${honor.title}`);
  assert.ok(cvIndex > lastCvIndex, `CV order mismatch: ${honor.title}`);
  assert.ok(updateIndex > lastUpdatesIndex, `Updates order mismatch: ${honor.title}`);

  lastCvIndex = cvIndex;
  lastUpdatesIndex = updateIndex;
}

assert.ok(cv.includes("Mar 2022") && updates.includes("Mar 2022"));
assert.ok(cv.includes("Codeforces Expert") && updates.includes("Codeforces Expert"));

process.stdout.write(`Verified ${honors.length} matching honors and distinctions in CV and Updates.\n`);
