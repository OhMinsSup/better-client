/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["velog.velcdn.com"],
  },
  experimental: {
    appDir: true,
    serverActions: true,
    legacyBrowsers: true,
  },
};

module.exports = nextConfig;
