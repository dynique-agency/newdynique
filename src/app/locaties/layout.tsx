import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locaties — Maatwerk software & webdesign in Zuid-Limburg en België | Dynique",
  description: "Dynique bouwt maatwerk software en websites voor bedrijven in Zuid-Limburg, Aken en Belgisch Limburg. Bekijk alle regio's die we vanuit Vaals bedienen.",
  alternates: { canonical: "https://dynique.nl/locaties" },
  openGraph: {
    title: "Locaties — Maatwerk software & webdesign in Zuid-Limburg en België | Dynique",
    description: "Alle regio's die Dynique vanuit Vaals bedient: Zuid-Limburg, Aken en Belgisch Limburg.",
    url: "https://dynique.nl/locaties",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Locaties" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locaties — Maatwerk software & webdesign in Zuid-Limburg en België | Dynique",
    description: "Alle regio's die Dynique vanuit Vaals bedient: Zuid-Limburg, Aken en Belgisch Limburg.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Locaties" }],
  },
};

// Let op: dit is een layout.tsx met 10 child-routes (/locaties/{stad}). Next.js-
// layouts wrappen ook alle child-pagina's — JSON-LD hier zou dus op elke stads-
// pagina verschijnen en botsen met CityPage.tsx's eigen BreadcrumbList. Daarom
// staat de breadcrumb voor déze hub-pagina zelf in page.tsx, niet hier.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
