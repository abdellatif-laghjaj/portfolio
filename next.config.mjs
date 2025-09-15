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
  // Add webpack config to handle CSS processing issues
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Disable CSS optimization in webpack for production builds
      const cssOptimizer = config.optimization.minimizer.find(
        (minimizer) => minimizer.constructor.name === "CssMinimizerPlugin",
      );
      if (cssOptimizer) {
        cssOptimizer.options.minify = false;
      }
    }
    return config;
  },
};
export default nextConfig;
