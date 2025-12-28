/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio-2.0' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig



