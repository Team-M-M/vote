/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  // webpackDevMiddleware: null,
  swcMinify: true,
  experimental: {
    appDir: true,
    // serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  cleanDistDir: true,
  pageExtensions: ['jsx', 'tsx', 'mdx', 'js', 'ts'],
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
