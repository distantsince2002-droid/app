// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-supabase-project.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
    ],
  },
  // Optional: Improve build performance
  swcMinify: true,
};

module.exports = nextConfig;