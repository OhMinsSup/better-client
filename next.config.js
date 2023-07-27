/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true,
    legacyBrowsers: true,
  },
};

module.exports = nextConfig;
