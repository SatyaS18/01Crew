/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensures compatibility with Vercel
  reactStrictMode: true, // Enables strict mode
  images: {
    unoptimized: true, // Fixes potential Vercel image optimization issues
  },
};

export default nextConfig;
