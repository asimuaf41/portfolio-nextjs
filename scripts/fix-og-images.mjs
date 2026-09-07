import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const publicDir = join(process.cwd(), "public");

function copyAsPng(sourcePath) {
  if (!existsSync(sourcePath)) return;
  const stats = statSync(sourcePath);
  if (!stats.isFile()) return;
  copyFileSync(sourcePath, `${sourcePath}.png`);
  console.log(`SEO: copied ${sourcePath} → ${sourcePath}.png`);
}

const rootOg = join(outDir, "opengraph-image");
copyAsPng(rootOg);
copyAsPng(join(outDir, "twitter-image"));

if (existsSync(rootOg)) {
  copyFileSync(rootOg, join(publicDir, "og-share.png"));
  console.log("SEO: refreshed public/og-share.png");
}

const blogDir = join(outDir, "blog");
if (existsSync(blogDir)) {
  for (const entry of readdirSync(blogDir)) {
    copyAsPng(join(blogDir, entry, "opengraph-image"));
  }
}
