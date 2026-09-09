import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & Web App laten maken | Dynique",
  description:
    "Professionele websites, webshops en web apps op maat. Mobile-first, razendsnel en SEO-ready, gebouwd in Next.js. Van portfolio tot e-commerce — binnen 7 tot 14 dagen live.",
  keywords: [
    "website laten maken",
    "web app laten maken",
    "maatwerk web app",
    "webapplicatie op maat",
    "app laten maken",
    "webshop laten maken",
    "web development",
    "app development",
  ],
  alternates: { canonical: "https://dynique.nl/diensten/web" },
  openGraph: {
    title: "Website & Web App laten maken | Dynique",
    description:
      "Professionele websites, webshops en web apps op maat. Mobile-first, snel en SEO-ready.",
    url: "https://dynique.nl/diensten/web",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Website & Web App laten maken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & Web App laten maken | Dynique",
    description:
      "Professionele websites, webshops en web apps op maat. Mobile-first, snel en SEO-ready.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Website & Web App laten maken",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Website & Web App Development",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland", "België"],
      description:
        "Professionele websites, webshops en web apps op maat, gebouwd in Next.js. Mobile-first, snel en SEO-ready.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://dynique.nl/diensten" },
        { "@type": "ListItem", position: 3, name: "Website & Web App laten maken", item: "https://dynique.nl/diensten/web" },
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
