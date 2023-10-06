/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // loader: 'akamai',
    domains: ['bible25-data.s3.ap-northeast-2.amazonaws.com', '*'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  reactStrictMode: false,
  trailingSlash: true,
  webpack: config => {
    return {
      ...config,
      devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'inline-source-map',
    };
  },
  productionBrowserSourceMaps: false,
  cleanDistDir: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  pageExtensions: ['tsx', 'ts'],
};

module.exports = nextConfig;
