/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/viennaXmas' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/viennaXmas' : '',
}

module.exports = nextConfig
