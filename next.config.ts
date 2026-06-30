import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["@hugeicons/core-free-icons"],
  },
};

export default nextConfig;
