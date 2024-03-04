const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
};
module.exports = {
    basePath: process.env.PR_NUMBER ? `/pr-${process.env.PR_NUMBER}` : '',
    assetPrefix: process.env.PR_NUMBER ? `/pr-${process.env.PR_NUMBER}` : '',
    images: {
        unoptimized: true,
    },
    output: "export",
    // Your existing configuration and new conditional paths
    reactStrictMode: true
    ...withNextra(),
    ...nextConfig,
};
