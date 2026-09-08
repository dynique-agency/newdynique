import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chefs Connect — case study | Dynique",
  description:
    "Een platform met drie trajecten — horecapersoneel zoeken, als freelancer aan de slag, of fine dining catering boeken — plus 48 regiopagina's door Nederland en België. Zo bouwden we Chefs Connect.",
  alternates: { canonical: "https://dynique.nl/portfolio/chefs-connect" },
  openGraph: {
    title: "Chefs Connect — case study",
    description:
      "Een culinair platform dat horecazaken, freelance chefs en evenementenorganisatoren elk hun eigen traject geeft.",
    url: "https://dynique.nl/portfolio/chefs-connect",
    type: "article",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique portfolio — Chefs Connect culinair matchingplatform website case study",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique portfolio — Chefs Connect culinair matchingplatform website case study",
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
    { "@type": "ListItem", position: 3, name: "Chefs Connect", item: "https://dynique.nl/portfolio/chefs-connect" },
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
