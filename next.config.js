/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimizaciones de producción
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig
