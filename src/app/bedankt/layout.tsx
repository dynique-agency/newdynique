import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bedankt | Dynique",
  description: "Je bericht is binnen. We reageren binnen 24 uur — meestal veel eerder.",
  // Bevestigings-/bedankpagina (na checklist-download of formulier): niet indexeren,
  // links wel volgen. Voorkomt dunne content + ?name=-URL's in de zoekresultaten.
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
