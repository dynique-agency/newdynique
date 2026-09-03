import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chefs Connect — case study | Dynique",
  description:
    "Een digitaal ontmoetingsplatform waar topchefs en premium keukens elkaar vinden. Zo bouwden we Chefs Connect.",
  alternates: { canonical: "https://dynique.nl/portfolio/chefs-connect" },
  openGraph: {
    title: "Chefs Connect — case study",
    description:
      "Een culinair platform dat de juiste match maakt tussen chefs, restaurants en events.",
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
