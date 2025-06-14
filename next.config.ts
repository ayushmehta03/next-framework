/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ This disables Turbopack and tells Next.js to use Webpack
  future: {
    webpack5: true,
  },
};

export default nextConfig;
