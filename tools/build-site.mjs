// Builds the deployable site into dist/: compiles Tailwind, then copies the pages, assets and docs.
// Vercel runs this (see vercel.json); locally: npm run build:site
import { execSync } from "node:child_process";
import { cpSync, rmSync, mkdirSync, existsSync } from "node:fs";

execSync("npx tailwindcss -i src/input.css -o assets/app.css --minify", { stdio: "inherit" });
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
for (const item of ["index.html", "project.html", "docs.html", "assets", "docs"]) {
  if (existsSync(item)) cpSync(item, `dist/${item}`, { recursive: true });
}
console.log("Site built into dist/");
