/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Add explicit configuration for better compatibility
      optimize: false,
    },
  },
};

export default config;
