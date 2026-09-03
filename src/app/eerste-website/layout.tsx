import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jouw eerste website laten maken | Dynique",
  description:
    "Nog geen website voor je bedrijf? We bouwen een online fundament dat past bij hoe je werkt: van gesprek tot livegang, technisch onderbouwd en projectmatig opgeleverd. Vaste prijs, geen verrassingen.",
  alternates: { canonical: "https://dynique.nl/eerste-website" },
  openGraph: {
    title: "Jouw eerste website laten maken",
    description:
      "Een online fundament dat past bij hoe je bedrijf werkt: van gesprek tot livegang, technisch onderbouwd en projectmatig opgeleverd.",
    url: "https://dynique.nl/eerste-website",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
