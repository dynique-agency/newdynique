import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Dynique — het bureau achter je project | Dynique",
  description:
    "Het verhaal, de werkwijze en de waarden achter Dynique — maatwerk software voor bedrijven in Nederland en België die vastlopen in standaardpakketten, met websites en digitale processen als fundament.",
  alternates: { canonical: "https://dynique.nl/over-ons" },
  openGraph: {
    title: "Over Dynique — de mens achter het werk",
    description:
      "Verhaal, werkwijze en waarden achter Dynique. Eén partner die je verhaal van binnen kent.",
    url: "https://dynique.nl/over-ons",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/rsc/founder2.jpeg",
        width: 1573,
        height: 2157,
        alt: "De oprichter van Dynique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Dynique — de mens achter het werk",
    description:
      "Verhaal, werkwijze en waarden achter Dynique. Eén partner die je verhaal van binnen kent.",
    images: [
      {
        url: "https://dynique.nl/rsc/founder2.jpeg",
        width: 1573,
        height: 2157,
        alt: "De oprichter van Dynique",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://dynique.nl/over-ons/#webpage",
      "url": "https://dynique.nl/over-ons",
      "name": "Over Dynique — het bureau achter je project",
      "description":
        "Het verhaal, de werkwijze en de waarden achter Dynique — maatwerk software voor bedrijven in Nederland en België die vastlopen in standaardpakketten, met websites en digitale processen als fundament.",
      "isPartOf": { "@id": "https://dynique.nl/#website" },
      "about": { "@id": "https://dynique.nl/#organization" },
      "inLanguage": "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dynique.nl" },
        { "@type": "ListItem", "position": 2, "name": "Over ons", "item": "https://dynique.nl/over-ons" },
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
