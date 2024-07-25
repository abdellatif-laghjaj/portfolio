/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {protocol: "https", hostname: "**.githubusercontent.com"},
            {protocol: "https", hostname: "**.github.com"},
        ],
    },
};

module.exports = nextConfig;