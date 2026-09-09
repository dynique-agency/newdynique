import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software & digitale bedrijfsprocessen | Dynique",
  description:
    "Software moet vóór jouw bedrijf werken, niet andersom. Wij bouwen maatwerk software op code voor bedrijven die vastlopen in standaardpakketten, gebouwd rondom hoe jullie écht werken. Gratis procesanalyse op locatie.",
  alternates: { canonical: "https://dynique.nl/diensten/processen" },
  openGraph: {
    title: "Maatwerk software & digitale bedrijfsprocessen | Dynique",
    description:
      "Maatwerk software op code voor bedrijven die vastlopen in standaardpakketten. Gratis en vrijblijvende procesanalyse op locatie.",
    url: "https://dynique.nl/diensten/processen",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk Software & Digitale Bedrijfsprocessen",
      },
    ],
  },
};

// Let op: dit is een layout.tsx met een child-route (/diensten/processen/limburg).
// Next.js-layouts wrappen ook alle child-pagina's — JSON-LD hier zou dus ook op
// /limburg verschijnen en botsen met diens eigen Service/BreadcrumbList. Daarom
// staat de Service+BreadcrumbList voor déze pagina zelf in page.tsx, niet hier.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
