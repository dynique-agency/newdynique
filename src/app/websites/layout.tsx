import type { Metadata } from "next";

// Bewust noindex: dit is een persoonlijke showcase-pagina om rechtstreeks naar leads te sturen
// (na een chatbericht), geen SEO-landingspagina — dat is al /diensten/web. Geen concurrentie
// tussen de twee, geen dubbele content in de zoekresultaten.
export const metadata: Metadata = {
  title: "Websites & web apps door Dynique | Tom Creemers",
  description: "Zo bouwt Dynique jouw website. Bekijk het werk, het proces en de prijs — en start rechtstreeks een gesprek met Tom.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://dynique.nl/websites" },
  openGraph: {
    title: "Websites & web apps door Dynique",
    description: "Zo bouwt Dynique jouw website. Bekijk het werk, het proces en de prijs.",
    url: "https://dynique.nl/websites",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Websites & web apps" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & web apps door Dynique",
    description: "Zo bouwt Dynique jouw website. Bekijk het werk, het proces en de prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Websites & web apps" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
