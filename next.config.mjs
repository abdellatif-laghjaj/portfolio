/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
    // Add this to disable CSS optimization temporarily
    optimizeCss: false,
  },
  bundlePagesRouterDependencies: true,
  outputFileTracingRoot: process.cwd(),
};
export default nextConfig;
