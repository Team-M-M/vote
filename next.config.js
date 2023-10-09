/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // loader: 'akamai',
    domains: ['studiobaka-bucket.s3.ap-northeast-1.amazonaws.com', '*'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  reactStrictMode: false,
  trailingSlash: true,
  webpack: config => {
    return {
      ...config,
      devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
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
