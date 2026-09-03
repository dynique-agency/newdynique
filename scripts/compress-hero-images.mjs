import sharp from "sharp";
import { statSync } from "fs";
import path from "path";

const ROOT = process.cwd();

// [source PNG, target WebP, max width, quality, size budget in KB (informational)]
const HEROES = [
  ["public/rsc/ijssalon/hero.png", "public/rsc/ijssalon/hero.webp", 1920, 80, 200],
  ["public/rsc/stacykohnen/hero.png", "public/rsc/stacykohnen/hero.webp", 1920, 80, 200],
  ["public/rsc/creemers/hero.png", "public/rsc/creemers/hero.webp", 1920, 80, 200],
];

const GALLERY = [
  ["public/rsc/ijssalon/ijssmaken.png", "public/rsc/ijssalon/ijssmaken.webp", 1600, 78, 450],
  ["public/rsc/ijssalon/infotossfeerenimpressie.png", "public/rsc/ijssalon/infotossfeerenimpressie.webp", 1200, 78, 450],
  ["public/rsc/ijssalon/geschiedenis.png", "public/rsc/ijssalon/geschiedenis.webp", 1400, 78, 450],
  ["public/rsc/creemers/calendertool.png", "public/rsc/creemers/calendertool.webp", 1600, 78, 450],
  ["public/rsc/creemers/galery2.png", "public/rsc/creemers/galery2.webp", 1400, 78, 450],
  ["public/rsc/creemers/galery3.png", "public/rsc/creemers/galery3.webp", 1400, 78, 450],
  ["public/rsc/creemers/galery4.png", "public/rsc/creemers/galery4.webp", 1400, 78, 450],
];

async function convert(src, dest, maxWidth, quality, budgetKB) {
  const srcPath = path.join(ROOT, src);
  const destPath = path.join(ROOT, dest);
  const before = statSync(srcPath).size;

  await sharp(srcPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destPath);

  const after = statSync(destPath).size;
  const beforeKB = (before / 1024).toFixed(0);
  const afterKB = (after / 1024).toFixed(0);
  const pct = (100 - (after / before) * 100).toFixed(1);
  const flag = after / 1024 > budgetKB ? "  ⚠ over budget" : "";
  console.log(`${src} -> ${dest}: ${beforeKB}KB -> ${afterKB}KB (-${pct}%)${flag}`);
}

const all = [...HEROES, ...GALLERY];
for (const [src, dest, w, q, budget] of all) {
  await convert(src, dest, w, q, budget);
}
