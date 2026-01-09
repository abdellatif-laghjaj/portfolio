import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Load Next.js and TypeScript configurations properly for ESLint 9
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [".next/**", "node_modules/**", "out/**", ".turbo/**"],
  },

  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Disable standard unused vars rules to avoid conflicts
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Enable the auto-fixable unused imports rule
      "unused-imports/no-unused-imports": "error",

      // Configure unused vars to warn but ignore variables starting with "_"
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
