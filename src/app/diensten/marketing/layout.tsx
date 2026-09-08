import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing & SEO | Dynique",
  description:
    "AI-gedreven content, social media automatisering, SEO en e-mailmarketing, altijd met een mens die meekijkt. Voor bedrijven in Nederland en België.",
  alternates: { canonical: "https://dynique.nl/diensten/marketing" },
  openGraph: {
    title: "AI Marketing & SEO | Dynique",
    description:
      "AI-content, social media automatisering, SEO en e-mailmarketing voor meer bereik en vindbaarheid.",
    url: "https://dynique.nl/diensten/marketing",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — AI Marketing & SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing & SEO | Dynique",
    description:
      "AI-content, social media automatisering, SEO en e-mailmarketing voor meer bereik en vindbaarheid.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — AI Marketing & SEO",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "AI Marketing, Content & SEO",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland"],
      description:
        "AI-gedreven contentcreatie, social media automatisering, SEO en e-mailmarketing, altijd met menselijke controle.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://dynique.nl/diensten" },
        { "@type": "ListItem", position: 3, name: "AI Marketing & SEO", item: "https://dynique.nl/diensten/marketing" },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
