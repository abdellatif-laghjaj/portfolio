/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuration ready for bundle analyzer
  // To analyze bundle: ANALYZE=true npm run build
  ...(process.env.ANALYZE === "true" && {
    experimental: {
      bundlePagesExternals: false,
    },
  }),
};

export default nextConfig;
