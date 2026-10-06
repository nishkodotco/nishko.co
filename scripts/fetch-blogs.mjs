// Pulls the published posts (index.json + HTML) from github.com/nishkodotco/blogs
// into content/blogs so they can be rendered at build time.
// Runs automatically before `npm run dev` and `npm run build`.
//
// BLOGS_DIR=../blogs npm run dev   → use a local checkout instead of cloning.

import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const DEST = "content/blogs";
const REPO = "https://github.com/nishkodotco/blogs.git";

rmSync(DEST, { recursive: true, force: true });

try {
  if (process.env.BLOGS_DIR) {
    cpSync(process.env.BLOGS_DIR, DEST, {
      recursive: true,
      filter: (src) => path.basename(src) !== ".git",
    });
    console.log(`Copied blogs from ${process.env.BLOGS_DIR}`);
  } else {
    execFileSync("git", ["clone", "--depth", "1", "--quiet", REPO, DEST], { stdio: "inherit" });
    console.log(`Fetched blogs from ${REPO}`);
  }
} catch (err) {
  if (process.env.CI) throw err;
  console.warn(`Could not fetch blogs (${err.message}); continuing with no posts.`);
  mkdirSync(DEST, { recursive: true });
}
