/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "lexica-serve-encoded-images.sharif.workers.dev",
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
