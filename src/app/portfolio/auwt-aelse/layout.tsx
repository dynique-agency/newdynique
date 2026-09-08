import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auwt Aelse — case study | Dynique",
  description:
    "Een tweetalige (NL/EN) kaart voor bistro Auwt Aelse in Elsloo: volledige menukaart met echte foodfotografie, sfeerimpressie en drempelloos reserveren. Zo vertaalden we hun rebranding naar het scherm.",
  alternates: { canonical: "https://dynique.nl/portfolio/auwt-aelse" },
  openGraph: {
    title: "Auwt Aelse — case study",
    description:
      "Bourgondisch tafelen, eigentijds geserveerd. Een tweetalige bistrosite met volledige kaart en sfeerimpressie.",
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
    card: "summary_large_image",
    title: "Auwt Aelse — case study",
    description:
      "Bourgondisch tafelen, eigentijds geserveerd. Een tweetalige bistrosite met volledige kaart en sfeerimpressie.",
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
