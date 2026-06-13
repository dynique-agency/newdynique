import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Output for Cloudflare Pages
  output: 'export',
  
  // Optimize images - use unoptimized for static export
  images: {
    unoptimized: true,
  },

  // SEO-friendly URLs
  trailingSlash: false,

  // Compression
  compress: true,

  // Performance
  poweredByHeader: false,
};

export default nextConfig;




