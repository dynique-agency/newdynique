import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dynique - Websites Die Werken | Website Development Agency",
  description: "Razendsnel geleverd. Betaalbaar. Geen gedoe. Jouw perfecte website online in 7-14 dagen. Website development, e-commerce, branding en meer.",
  keywords: ["website laten maken", "webdesign", "website development", "website ontwikkeling", "webshop laten maken", "website bouwer", "web development agency", "portfolio website", "e-commerce website", "branding", "AI website design", "snel website laten maken"],
  authors: [{ name: "Dynique" }],
  creator: "Dynique",
  publisher: "Dynique",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://dynique.nl',
    siteName: 'Dynique',
    title: 'Dynique - Websites Die Werken',
    description: 'Razendsnel geleverd. Betaalbaar. Geen gedoe. Jouw perfecte website online in 7-14 dagen.',
    images: [
      {
        url: '/rsc/hero.mp4',
        width: 1200,
        height: 630,
        alt: 'Dynique - Premium Website Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynique - Websites Die Werken',
    description: 'Razendsnel geleverd. Betaalbaar. Geen gedoe. Jouw perfecte website online in 7-14 dagen.',
    creator: '@dynique',
  },
  alternates: {
    canonical: 'https://dynique.nl',
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="canonical" href="https://dynique.nl" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDesignAgency",
              "name": "Dynique",
              "description": "Premium website development agency gespecialiseerd in snelle, betaalbare websites met AI-integratie",
              "url": "https://dynique.nl",
              "telephone": "+31624572572",
              "email": "info@dynique.nl",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL",
                "addressLocality": "Amsterdam"
              },
              "sameAs": [],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "€€",
              "areaServed": {
                "@type": "Country",
                "name": "Nederland"
              },
              "serviceType": [
                "Website Development",
                "E-commerce Development",
                "Web Application Development",
                "Branding & Design",
                "AI Integration"
              ],
              "knowsAbout": [
                "Web Development",
                "Next.js",
                "React",
                "Tailwind CSS",
                "E-commerce",
                "AI Image Generation",
                "Responsive Design"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Hoe lang duurt het voordat mijn website live staat?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gemiddeld 7-14 dagen van eerste gesprek tot live website. Simpele portfolio sites kunnen binnen 3-5 dagen, complexere projecten met webshops of custom functionaliteiten nemen 10-14 dagen. We werken razendsnel zonder in te boeten op kwaliteit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Krijg ik ook branding en design?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, absoluut. We verzorgen het volledige pakket: logo design, kleurenschema, typography, AI-gegenereerde visuals en video's. Zoals bij House of Chocolate en Stacy Kohnen - van nul tot complete merkidentiteit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat als ik aanpassingen wil na oplevering?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wij passen alles razendsnel voor jou aan. Dit valt binnen onze onderhoudsservice. Stuur gewoon een berichtje via WhatsApp en we regelen het direct. Van teksten tot foto's, nieuwe features tot updates - wij doen het voor je."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Zijn de websites geschikt voor mobiel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "100%. Alle websites zijn volledig responsive en geoptimaliseerd voor mobiel, tablet en desktop. We testen op alle devices en browsers. Mobile-first design is onze standaard - de meeste bezoekers komen immers vanaf hun telefoon."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Doen jullie ook SEO en Google ranking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, alle websites worden SEO-ready opgeleverd: snelle laadtijd, schema markup, sitemap, goede structuur. Voor actieve SEO-campagnes (linkbuilding, content marketing, local SEO) bieden we losse pakketten aan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Hoe zit het met hosting en onderhoud?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wij regelen alles voor je. Hosting, updates, security patches en dagelijkse back-ups zitten allemaal binnen de maandelijkse onderhoudsservice. Jij hoeft nergens aan te denken - wij houden alles draaiend."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Werken jullie ook met bestaande websites?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, we doen ook redesigns en migraties. We kunnen je bestaande site moderniseren, sneller maken, of volledig opnieuw bouwen. SEO en content blijven behouden tijdens de migratie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat gebeurt er als ik niet tevreden ben?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We werken met maximaal 3 revisierondes om je website perfect te krijgen. Tijdens het proces stemmen we regelmatig af. 98% van onze klanten is na de eerste revisie al tevreden. Mocht het echt niet klikken: geld terug garantie binnen de eerste week."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}




