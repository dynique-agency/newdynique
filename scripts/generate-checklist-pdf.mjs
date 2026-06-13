// Dependency-free PDF generator for the Dynique website checklist.
// Produces public/dynique-website-checklist-2026.pdf
// Run: node scripts/generate-checklist-pdf.mjs

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "dynique-website-checklist-2026.pdf");

// ---- Page geometry (A4) -------------------------------------------------
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 64;
const CONTENT_W = PAGE_W - MARGIN * 2;

// Standard-14 Helvetica avg widths are ~0.5em; use a slightly conservative
// estimate so wrapping never overflows the right margin.
const charW = (size) => size * 0.52;
const wrap = (text, size, maxW) => {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (charW(size) * test.length > maxW && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

// ---- Content model ------------------------------------------------------
const sections = [
  {
    n: "01",
    t: "Doel & doelgroep",
    d: "Voordat er ook maar één pixel getekend wordt, moet dit glashelder zijn.",
    items: [
      "Wat is het #1 doel van de site (leads, verkoop, autoriteit)?",
      "Wie is de primaire doelgroep en welk probleem los je voor ze op?",
      "Welke actie moet een bezoeker ondernemen (de gewenste conversie)?",
    ],
  },
  {
    n: "02",
    t: "Content-audit",
    d: "Content is het fundament. Verzamel en beoordeel vóór de bouw start.",
    items: [
      "Welke teksten, foto's en video's heb je al — en wat ontbreekt?",
      "Heb je professionele beelden, of moet daar budget voor komen?",
      "Schrap filler: elke pagina moet een duidelijk doel dienen.",
    ],
  },
  {
    n: "03",
    t: "Tech-stack keuze",
    d: "WordPress, Webflow, Shopify of Next.js — elk past bij een ander scenario.",
    items: [
      "In welk systeem wordt gebouwd en waarom past dat bij jou?",
      "Wie wordt eigenaar van de code en de designs?",
      "Waar wordt gehost en wat zijn de maandelijkse kosten?",
    ],
  },
  {
    n: "04",
    t: "SEO-fundamenten",
    d: "Deze zes technische punten moeten kloppen bij oplevering.",
    items: [
      "Unieke title + meta description per pagina.",
      "Correcte canonical-tags en een geldige sitemap.xml.",
      "Schema markup, logische URL-structuur en alt-teksten.",
    ],
  },
  {
    n: "05",
    t: "Performance budget",
    d: "Snelheid is ranking én conversie. Eis concrete scores.",
    items: [
      "Largest Contentful Paint onder 2,5 seconden.",
      "Cumulative Layout Shift onder 0,1.",
      "Geoptimaliseerde beelden (WebP/AVIF) en lazy loading.",
    ],
  },
  {
    n: "06",
    t: "Conversie-elementen",
    d: "De vijf elementen die op elke homepage horen.",
    items: [
      "Heldere waardepropositie boven de vouw.",
      "Zichtbare call-to-action en social proof (reviews/cases).",
      "Eenvoudige contactmogelijkheid en vertrouwenssignalen.",
    ],
  },
  {
    n: "07",
    t: "Bureau-vragen",
    d: "Tien vragen die elke serieuze offerte moet beantwoorden.",
    items: [
      "Vaste prijs of uurbasis — en is de levertijd gegarandeerd?",
      "Wat gebeurt er na livegang: onderhoud, updates, beheer?",
      "Kunnen ze referenties van vergelijkbare projecten tonen?",
    ],
  },
  {
    n: "08",
    t: "Launch-checklist",
    d: "De laatste controle voordat je live gaat.",
    items: [
      "SSL actief, 404-pagina ingericht, formulieren getest.",
      "Analytics en Search Console gekoppeld, sitemap ingediend.",
      "Backups geregeld en getest op mobiel, tablet en desktop.",
    ],
  },
];

// ---- Layout engine: flow blocks into pages ------------------------------
const GOLD = [0.831, 0.647, 0.455]; // #d4a574
const DARK = [0.06, 0.06, 0.06];
const GREY = [0.38, 0.38, 0.38];

const pages = [];
let ops = [];
let y = 0;

const newPage = () => {
  if (ops.length) pages.push(ops);
  ops = [];
  y = PAGE_H - MARGIN;
  footer();
};

const footer = () => {
  ops.push(
    `q ${GREY.join(" ")} rg BT /F1 8 Tf 1 0 0 1 ${MARGIN} ${MARGIN - 28} Tm (dynique.nl  -  info@dynique.nl  -  +31 6 24572572) Tj ET Q`,
  );
};

const ensure = (need) => {
  if (y - need < MARGIN + 10) newPage();
};

const text = (str, { x = MARGIN, size = 11, font = "F1", color = DARK } = {}) => {
  ops.push(
    `q ${color.join(" ")} rg BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${esc(str)}) Tj ET Q`,
  );
};

const para = (str, size = 11, color = DARK, lead = 5) => {
  const lines = wrap(str, size, CONTENT_W);
  for (const ln of lines) {
    ensure(size + lead);
    text(ln, { size, color });
    y -= size + lead;
  }
};

const checkboxItem = (str, size = 10.5) => {
  const lines = wrap(str, size, CONTENT_W - 22);
  ensure(size + 6);
  // box
  const boxY = y - size + 2;
  ops.push(`q ${GOLD.join(" ")} RG 1 w ${MARGIN} ${boxY} 9 9 re S Q`);
  text(lines[0], { x: MARGIN + 20, size, color: DARK });
  y -= size + 5;
  for (let i = 1; i < lines.length; i++) {
    ensure(size + 5);
    text(lines[i], { x: MARGIN + 20, size, color: DARK });
    y -= size + 5;
  }
};

const rule = (color = GOLD) => {
  ensure(16);
  ops.push(`q ${color.join(" ")} RG 0.8 w ${MARGIN} ${y} m ${MARGIN + CONTENT_W} ${y} l S Q`);
  y -= 16;
};

// ----- Build the document -----
newPage();

// Cover header band
ops.push(`q ${DARK.join(" ")} rg 0 ${PAGE_H - 150} ${PAGE_W} 150 re f Q`);
ops.push(
  `q 1 1 1 rg BT /F2 13 Tf 4 Tc 1 0 0 1 ${MARGIN} ${PAGE_H - 60} Tm (DYNIQUE) Tj ET Q`,
);
ops.push(
  `q ${GOLD.join(" ")} rg BT /F1 9 Tf 1 0 0 1 ${MARGIN} ${PAGE_H - 95} Tm (FULL CREATIVE DEVELOPMENT AGENCY) Tj ET Q`,
);
ops.push(
  `q 1 1 1 rg BT /F1 9 Tf 1 0 0 1 ${MARGIN} ${PAGE_H - 120} Tm (Gratis download - PDF) Tj ET Q`,
);
y = PAGE_H - 150 - 56;

text("De Website Checklist 2026", { size: 30, font: "F2", color: DARK });
y -= 44;
para(
  "Een 23-punts checklist die je voorbereidt op het laten maken van een website. Wat vraag je aan je bureau? Wat krijg je voor je geld? En waar zitten de verborgen kosten? Loop dit door voordat je een offerte tekent.",
  12,
  GREY,
  6,
);
y -= 8;
rule();
y -= 6;

for (const s of sections) {
  ensure(70);
  // number + title
  text(s.n, { size: 12, font: "F2", color: GOLD });
  text(s.t, { x: MARGIN + 34, size: 15, font: "F2", color: DARK });
  y -= 22;
  para(s.d, 10.5, GREY, 5);
  y -= 4;
  for (const it of s.items) checkboxItem(it);
  y -= 14;
}

ensure(60);
rule();
y -= 4;
text("Klaar om te beginnen?", { size: 14, font: "F2", color: DARK });
y -= 22;
para(
  "Plan een vrijblijvend gesprek via dynique.nl of stuur een bericht naar info@dynique.nl. We denken graag met je mee — online of bij ons aan tafel in Zuid-Limburg.",
  11,
  GREY,
  5,
);

pages.push(ops);

// ---- Serialize to PDF ---------------------------------------------------
const objects = [];
const addObj = (body) => {
  objects.push(body);
  return objects.length; // 1-based object number
};

// Reserve: 1=Catalog, 2=Pages, fonts, then page+content pairs.
const fontHelv = addObj(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
);
const fontBold = addObj(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
);

const pageObjNums = [];
const contentObjNums = [];
for (const pageOps of pages) {
  const stream = pageOps.join("\n");
  const contentNum = addObj(
    `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`,
  );
  contentObjNums.push(contentNum);
  // placeholder; page object created after we know /Parent (Pages) number
  pageObjNums.push(null);
}

// Pages tree + Catalog get fixed numbers now.
const pagesNum = addObj("__PAGES__");
const catalogNum = addObj(
  `<< /Type /Catalog /Pages ${pagesNum} 0 R >>`,
);

// Now create page objects referencing pagesNum.
const pageRefs = [];
for (let i = 0; i < pages.length; i++) {
  const num = addObj(
    `<< /Type /Page /Parent ${pagesNum} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
      `/Resources << /Font << /F1 ${fontHelv} 0 R /F2 ${fontBold} 0 R >> >> ` +
      `/Contents ${contentObjNums[i]} 0 R >>`,
  );
  pageRefs.push(`${num} 0 R`);
}

// Fill in the Pages object body.
objects[pagesNum - 1] =
  `<< /Type /Pages /Count ${pages.length} /Kids [${pageRefs.join(" ")}] >>`;

// Assemble bytes with xref offsets.
let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
const offsets = [];
for (let i = 0; i < objects.length; i++) {
  offsets[i] = Buffer.byteLength(pdf, "latin1");
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefStart = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 0; i < objects.length; i++) {
  pdf += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogNum} 0 R >>\n`;
pdf += `startxref\n${xrefStart}\n%%EOF`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, Buffer.from(pdf, "latin1"));
console.log(`Wrote ${OUT} (${pages.length} pages, ${objects.length} objects)`);
