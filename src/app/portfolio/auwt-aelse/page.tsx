"use client";

import CaseStudyTemplate, { CaseStudyData } from "@/components/CaseStudyTemplate";

/* ────────────────────────────────────────────────────────────
   AUWT AELSE — case study
   Design is af. Vul onderstaande velden in met de echte content.
   Laat een veld leeg ("") of verwijder het om dat blok te verbergen.
   ──────────────────────────────────────────────────────────── */

const data: CaseStudyData = {
  title: "AUWT AELSE",
  category: "BISTRO",
  accent: "#eab308",
  year: "2026",
  liveUrl: "auwtaelse.nl",

  intro: "Bourgondisch tafelen, eigentijds geserveerd.",
  subIntro: "", // ← korte ondersteunende zin(nen)
  client: "", // ← bv. "Auwt Aelse · Bistro"

  heroImage: null, // ← pad naar hero-afbeelding zodra beschikbaar

  facts: [
    { label: "JAAR", value: "2026" },
    { label: "TYPE", value: "Website" },
    { label: "STATUS", value: "Live" },
    { label: "ROL", value: "Design & build" },
  ],

  challenge: [
    // "Paragraaf 1 …",
  ],
  approach: [
    // "Paragraaf 1 …",
  ],

  features: [
    // { title: "FEATURE", description: "Uitleg …" },
  ],

  gallery: [
    // { src: "/rsc/auwtaelse/…", alt: "…", caption: "" },
  ],

  results: [
    // "Resultaat-paragraaf …",
  ],
  metrics: [
    // { value: "—", label: "Label", sub: "" },
  ],

  quote: "", // ← klantcitaat
  quoteAuthor: "", // ← naam

  next: { title: "IJSSALON ITALIA", href: "/portfolio/ijssalon-italia" },
};

export default function AuwtAelse() {
  return <CaseStudyTemplate data={data} />;
}
