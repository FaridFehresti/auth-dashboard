import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'randomuser.me',
      port: '', // optional
      pathname: '/**',
    },
  ],
}
};

module.exports = nextConfig;

export default nextConfig;
