import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wat kost maatwerk software? | Dynique",
  description:
    "Wat kost maatwerk software echt? Geen verzonnen prijslijst, maar een eerlijke uitleg van wat de prijs bepaalt — met drie illustratieve voorbeelden, van kleine tool tot bedrijfssoftware.",
  keywords: [
    "wat kost maatwerk software",
    "kosten maatwerk software",
    "prijs maatwerk software",
    "software op maat kosten",
    "software laten bouwen kosten",
  ],
  alternates: { canonical: "https://dynique.nl/wat-kost-maatwerk-software" },
  openGraph: {
    title: "Wat kost maatwerk software? | Dynique",
    description: "Een eerlijke uitleg van wat de prijs van maatwerk software bepaalt, met drie illustratieve voorbeelden.",
    url: "https://dynique.nl/wat-kost-maatwerk-software",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Wat kost maatwerk software?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wat kost maatwerk software? | Dynique",
    description: "Een eerlijke uitleg van wat de prijs van maatwerk software bepaalt, met drie illustratieve voorbeelden.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Wat kost maatwerk software?",
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
        { "@type": "ListItem", position: 2, name: "Wat kost maatwerk software?", item: "https://dynique.nl/wat-kost-maatwerk-software" },
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
