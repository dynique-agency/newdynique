import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jouw eerste website laten maken | Dynique",
  description:
    "Voor het eerst een website nodig? We begeleiden je van eerste gesprek tot live site: branding, design, bouw en ondersteuning. Helder traject, vaste prijs, geen verrassingen.",
  alternates: { canonical: "https://dynique.nl/eerste-website" },
  openGraph: {
    title: "Jouw eerste website laten maken",
    description:
      "Van eerste gesprek tot live site: branding, design, bouw en ondersteuning. Vaste prijs.",
    url: "https://dynique.nl/eerste-website",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
