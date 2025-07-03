import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'galtechstarpi-production.up.railway.app',
        pathname: '/uploads/**', // still valid for old images if needed
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // allow all paths under Cloudinary (required!)
      },
    ],
  },
};

export default nextConfig;
