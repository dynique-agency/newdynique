import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dynique.nl'
  const now = new Date()

  return [
    // ── Kern (hoogste prioriteit — dit worden de sitelinks) ──
    { url: `${base}/`,                 lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/portfolio`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/diensten`,         lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/contact`,          lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${base}/over-ons`,         lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/blog`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },

    // ── Diensten ──
    { url: `${base}/diensten/web`,        lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/diensten/processen`,  lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/diensten/marketing`,  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/diensten/drone`,      lastModified: now, changeFrequency: 'monthly', priority: 0.82 },

    // ── Portfolio cases ──
    { url: `${base}/portfolio/chefs-connect`,      lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/portfolio/auwt-aelse`,         lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/portfolio/ijssalon-italia`,    lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/portfolio/stacy-kohnen`,       lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/portfolio/creemers-exclusive`, lastModified: now, changeFrequency: 'monthly', priority: 0.78 },

    // ── Blog ──
    { url: `${base}/blog/wat-kost-een-website`,          lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/website-laten-maken-limburg`,   lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/n8n-make-zapier`,               lastModified: now, changeFrequency: 'monthly', priority: 0.70 },

    // ── SEO clusters — maatwerk software ──
    { url: `${base}/diensten/processen/limburg`,           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/maatwerk-software/bouw`,               lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/maatwerk-software/installatiebedrijf`, lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/maatwerk-software/zorg`,               lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/maatwerk-software/logistiek`,          lastModified: now, changeFrequency: 'monthly', priority: 0.80 },

    // ── Locatie landingspagina's ──
    { url: `${base}/locaties/maastricht`, lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${base}/locaties/heerlen`,    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/locaties/sittard`,    lastModified: now, changeFrequency: 'monthly', priority: 0.72 },
    { url: `${base}/locaties/aken`,       lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${base}/locaties/eindhoven`,  lastModified: now, changeFrequency: 'monthly', priority: 0.70 },

    // ── Overige landingspagina's ──
    { url: `${base}/eerste-website`,  lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${base}/vervanging`,      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/gratis-checklist`,lastModified: now, changeFrequency: 'monthly', priority: 0.72 },

    // ── Juridisch ──
    { url: `${base}/privacyverklaring`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
