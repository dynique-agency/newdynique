import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis Website Checklist 2026 (PDF) | Dynique",
  description:
    "Download gratis de 23-punts website-checklist. Wat vraag je aan je bureau, wat krijg je voor je geld en waar zitten de verborgen kosten? Direct in je inbox, geen spam.",
  alternates: { canonical: "https://dynique.nl/gratis-checklist" },
  openGraph: {
    title: "Gratis Website Checklist 2026 (PDF)",
    description:
      "De 23-punts checklist die je voorbereidt op het laten maken van een website. Gratis download.",
    url: "https://dynique.nl/gratis-checklist",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
