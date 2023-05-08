const { withContentlayer } = require("next-contentlayer");
const withTwin = require("./withTwin");
const nextTranslate = require("next-translate-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
});

module.exports = withContentlayer(withTwin(nextConfig));
