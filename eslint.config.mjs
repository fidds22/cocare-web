import nextPlugin from "eslint-config-next";

const eslintConfig = [
  // Extend Next.js ESLint config (handles TypeScript parsing)
  ...nextPlugin,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      "next-env.d.ts",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  // Security-focused rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Prevent code injection
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",

      // Prevent console.log in production (but allow in scripts and debug components)
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Enforce strict equality
      "eqeqeq": ["error", "always"],
    },
  },
  // Allow console.log in CLI scripts and debug components
  {
    files: ["scripts/**/*.{js,ts}", "components/mobile-debug.tsx"],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
