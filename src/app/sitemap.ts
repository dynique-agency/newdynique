import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dynique.nl'
  const currentDate = new Date()

  const staticPages = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/diensten', priority: 0.95, freq: 'monthly' as const },
    { path: '/over-ons', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.8, freq: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, freq: 'weekly' as const },
    { path: '/vervanging', priority: 0.9, freq: 'monthly' as const },
    { path: '/eerste-website', priority: 0.9, freq: 'monthly' as const },
    { path: '/gratis-checklist', priority: 0.85, freq: 'monthly' as const },
    { path: '/blog', priority: 0.85, freq: 'weekly' as const },
    { path: '/diensten/processen/limburg', priority: 0.9, freq: 'monthly' as const },
  ]

  const portfolioCases = [
    'chefs-connect',
    'auwt-aelse',
    'creemers-exclusive',
    'ijssalon-italia',
    'stacy-kohnen',
  ]

  const diensten = ['web', 'processen', 'marketing', 'drone']

  const sectoren = ['bouw', 'installatiebedrijf', 'zorg', 'logistiek']

  const locaties = ['maastricht', 'heerlen', 'sittard', 'aken', 'eindhoven']

  const blogPosts = [
    'wat-kost-een-website',
    'n8n-make-zapier',
    'website-laten-maken-limburg',
  ]

  return [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: currentDate,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...portfolioCases.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...diensten.map((slug) => ({
      url: `${baseUrl}/diensten/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...sectoren.map((slug) => ({
      url: `${baseUrl}/maatwerk-software/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...locaties.map((slug) => ({
      url: `${baseUrl}/locaties/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
