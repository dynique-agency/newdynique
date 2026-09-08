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
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Gratis Website Checklist 2026 (PDF)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis Website Checklist 2026 (PDF)",
    description:
      "De 23-punts checklist die je voorbereidt op het laten maken van een website. Gratis download.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Gratis Website Checklist 2026 (PDF)",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Gratis Website Checklist 2026 (PDF)", item: "https://dynique.nl/gratis-checklist" },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
