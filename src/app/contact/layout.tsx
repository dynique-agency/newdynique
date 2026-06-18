import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — plan een vrijblijvend gesprek | Dynique",
  description:
    "Neem contact op met Dynique. Vertel ons over je project — websites, maatwerk software, marketing of beeld. Reactie binnen 2 uur (ma–za). Limburg & nationaal.",
  alternates: { canonical: "https://dynique.nl/contact" },
  openGraph: {
    title: "Contact — laten we kennismaken | Dynique",
    description:
      "Vertel ons over je project. Reactie binnen 2 uur (ma–za). Limburg, Nederland & internationaal.",
    url: "https://dynique.nl/contact",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/og.png",
        width: 1200,
        height: 630,
        alt: "Dynique — neem contact op",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://dynique.nl/contact/#webpage",
      "url": "https://dynique.nl/contact",
      "name": "Contact — plan een vrijblijvend gesprek",
      "description":
        "Neem contact op met Dynique. Reactie binnen 2 uur op werkdagen.",
      "isPartOf": { "@id": "https://dynique.nl/#website" },
      "inLanguage": "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dynique.nl" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://dynique.nl/contact" },
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
