/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["hands-of-friends-backend.onrender.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
