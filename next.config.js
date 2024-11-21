/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/viennaXmas' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/viennaXmas' : '',
  trailingSlash: true,
}

module.exports = nextConfig
