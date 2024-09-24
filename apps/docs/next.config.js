const withContentlayer = require("next-contentlayer").withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@nextui-org/react", "@nextui-org/theme"],
  swcMinify: true,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  redirects: require("./next-redirect.js"),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "opencollective-production.s3.us-west-1.amazonaws.com",
      "avatars.githubusercontent.com",
      "logo.clearbit.com",
      "i.pravatar.cc",
      "nextui.org",
      "via.placeholder.com", // Add the domain here
      "upload.wikimedia.org", // You might also want to add other domains you're using
      "other-image-domain.com", // Add any other image domains you're using
      "rydercup.brightspotcdn.com",

    ],
  },
};

module.exports = withContentlayer(nextConfig);
