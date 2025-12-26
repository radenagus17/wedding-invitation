/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig
