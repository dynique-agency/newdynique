import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — ons werk | Dynique",
  description:
    "Een selectie van websites, web apps en merkidentiteiten die we bouwden voor restaurants, artiesten en MKB. Van Creemers Exclusive tot Stacy Kohnen en IJssalon Italia.",
  alternates: { canonical: "https://dynique.nl/portfolio" },
  openGraph: {
    title: "Portfolio — ons werk",
    description:
      "Websites, web apps en merkidentiteiten voor restaurants, artiesten en MKB.",
    url: "https://dynique.nl/portfolio",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
