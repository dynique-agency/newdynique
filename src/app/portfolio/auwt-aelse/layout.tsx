import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auwt Aelse — case study | Dynique",
  description:
    "Een sfeervolle digitale kaart voor een eigentijdse bistro: warme beeldtaal, heldere menustructuur en moeiteloos reserveren. Zo bouwden we Auwt Aelse.",
  alternates: { canonical: "https://dynique.nl/portfolio/auwt-aelse" },
  openGraph: {
    title: "Auwt Aelse — case study",
    description:
      "Bourgondisch tafelen, eigentijds geserveerd. Een bistrosite met menu en reserveren.",
    url: "https://dynique.nl/portfolio/auwt-aelse",
    type: "article",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique portfolio — Auwt Aelse bistro website case study",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique portfolio — Auwt Aelse bistro website case study",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://dynique.nl/portfolio" },
    { "@type": "ListItem", position: 3, name: "Auwt Aelse", item: "https://dynique.nl/portfolio/auwt-aelse" },
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
