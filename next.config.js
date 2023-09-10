/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // loader: 'akamai',
    domains: ['bible25-data.s3.ap-northeast-2.amazonaws.com', '*'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  reactStrictMode: false,
  cleanDistDir: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // modularizelmports: {
    //   lodash: {
    //       transform: 'lodash/{{member}}',
    //     },
    //   },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  cleanDistDir: true,
  pageExtensions: ['jsx', 'tsx', 'mdx', 'js', 'ts'],
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
