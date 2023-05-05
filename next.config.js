const { withContentlayer } = require("next-contentlayer")
const withTwin = require("./withTwin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};


module.exports = withContentlayer(withTwin(nextConfig));
