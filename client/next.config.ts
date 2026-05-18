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
    ],
  },
};

export default nextConfig;
