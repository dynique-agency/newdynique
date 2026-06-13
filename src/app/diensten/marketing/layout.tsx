import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing & SEO | Dynique",
  description:
    "AI-gedreven content, social media automatisering, SEO en e-mailmarketing. Meer bereik en betere vindbaarheid zonder dat het je dagen kost. Voor ZZP en MKB in Limburg.",
  alternates: { canonical: "https://dynique.nl/diensten/marketing" },
  openGraph: {
    title: "AI Marketing & SEO",
    description:
      "AI-content, social media automatisering, SEO en e-mailmarketing voor meer bereik en vindbaarheid.",
    url: "https://dynique.nl/diensten/marketing",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Marketing, Content & SEO",
  provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
  areaServed: ["Limburg", "Nederland"],
  description:
    "AI-gedreven contentcreatie, social media automatisering, SEO en e-mailmarketing voor ZZP en MKB.",
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
