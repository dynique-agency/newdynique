"use client";

import CaseStudyTemplate, { CaseStudyData } from "@/components/CaseStudyTemplate";

/* ────────────────────────────────────────────────────────────
   CHEFS CONNECT — case study
   Design is af. Vul onderstaande velden in met de echte content.
   Laat een veld leeg ("") of verwijder het om dat blok te verbergen.
   ──────────────────────────────────────────────────────────── */

const data: CaseStudyData = {
  title: "CHEFS CONNECT",
  category: "CULINAIR PLATFORM",
  accent: "#ef4444",
  year: "2026",
  liveUrl: "chefs-connect.nl",

  intro: "Waar topchefs en premium keukens elkaar vinden.",
  subIntro: "", // ← korte ondersteunende zin(nen)
  client: "", // ← bv. "Chefs Connect · Culinair platform"

  heroVideo: "/rsc/chefsconnect/preview.mp4",

  facts: [
    { label: "JAAR", value: "2026" },
    { label: "TYPE", value: "Platform" },
    { label: "STATUS", value: "Live" },
    { label: "ROL", value: "Design & build" },
  ],

  challenge: [
    // "Paragraaf 1 …",
    // "Paragraaf 2 …",
  ],
  approach: [
    // "Paragraaf 1 …",
  ],

  features: [
    // { title: "FEATURE", description: "Uitleg …" },
  ],

  gallery: [
    // { src: "/rsc/chefsconnect/…", alt: "…", caption: "" },
  ],

  results: [
    // "Resultaat-paragraaf …",
  ],
  metrics: [
    // { value: "—", label: "Label", sub: "" },
  ],

  quote: "", // ← klantcitaat
  quoteAuthor: "", // ← naam

  next: { title: "AUWT AELSE", href: "/portfolio/auwt-aelse" },
};

export default function ChefsConnect() {
  return <CaseStudyTemplate data={data} />;
}
