/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Only use this for static export, not for dev
  // distDir: "out",   // Remove or comment this out for dev
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  basePath: "",
  experimental: {
    // appDir: true, // This is not needed in Next.js 13+
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
