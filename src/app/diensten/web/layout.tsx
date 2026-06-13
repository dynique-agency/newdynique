import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & Web App laten maken | Dynique",
  description:
    "Professionele websites, webshops en web apps op maat. Mobile-first, razendsnel en SEO-ready, gebouwd in Next.js. Van portfolio tot e-commerce — binnen 7 tot 14 dagen live.",
  alternates: { canonical: "https://dynique.nl/diensten/web" },
  openGraph: {
    title: "Website & Web App laten maken",
    description:
      "Professionele websites, webshops en web apps op maat. Mobile-first, snel en SEO-ready.",
    url: "https://dynique.nl/diensten/web",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website & Web App Development",
  provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
  areaServed: ["Limburg", "Nederland"],
  description:
    "Professionele websites, webshops en web apps op maat, gebouwd in Next.js. Mobile-first, snel en SEO-ready.",
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
