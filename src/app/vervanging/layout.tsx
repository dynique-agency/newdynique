import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten vervangen of redesignen | Dynique",
  description:
    "Verouderde of trage website? Wij bouwen hem volledig opnieuw: sneller, moderner en beter converterend. SEO en content blijven behouden tijdens de migratie.",
  alternates: { canonical: "https://dynique.nl/vervanging" },
  openGraph: {
    title: "Website laten vervangen of redesignen",
    description:
      "Verouderde site? Sneller, moderner en beter converterend opnieuw gebouwd, met behoud van SEO.",
    url: "https://dynique.nl/vervanging",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
