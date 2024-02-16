/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  output: "export"
}

module.exports = nextConfig