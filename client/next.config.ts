import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Use 'https' if your local server uses SSL
        hostname: 'localhost',
        port: '4000',
        pathname: '/**', // Matches all image paths on this host
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '4000',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '15mb', // Set your desired limit here
    },
  },
};

export default nextConfig;
