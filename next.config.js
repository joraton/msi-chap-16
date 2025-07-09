/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  transpilePackages: ['framer-motion'],
};

module.exports = nextConfig;