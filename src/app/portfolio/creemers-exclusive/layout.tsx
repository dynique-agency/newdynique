import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creemers Exclusive — case study | Dynique",
  description:
    "Een premium single-page website met AI-gegenereerde visuals en een interactieve boekingstool. Zo bouwden we de digitale etalage voor Creemers Exclusive.",
  alternates: { canonical: "https://dynique.nl/portfolio/creemers-exclusive" },
  openGraph: {
    title: "Creemers Exclusive — case study",
    description:
      "Premium single-page website met AI-visuals en interactieve boekingstool.",
    url: "https://dynique.nl/portfolio/creemers-exclusive",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://dynique.nl/portfolio" },
    { "@type": "ListItem", position: 3, name: "Creemers Exclusive", item: "https://dynique.nl/portfolio/creemers-exclusive" },
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
