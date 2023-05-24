const srcTsFiles = ["src/**/*.ts", "src/**/*.tsx"];

// https://nextjs.org/docs/app/api-reference/file-conventions
const nextConventionFiles = [
  "src/app/**/default.tsx",
  "src/app/**/error.tsx",
  "src/app/**/layout.tsx",
  "src/app/**/loading.tsx",
  "src/app/**/not-found.tsx",
  "src/app/**/page.tsx",
  "src/app/**/route.tsx",
  "src/app/**/template.tsx",
];

const orderedKeys = ["children", "className", "id", "type", "href", "segment", "name", "title"];

module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["sort-keys-custom-order", "unused-imports"],
  rules: {
    curly: ["error"],
    "prefer-const": ["error"],
    "prefer-arrow-callback": ["error"],
    "arrow-body-style": ["error", "always"],
    "func-style": ["error", "declaration"],
    "@typescript-eslint/no-var-requires": ["off"],
    "unused-imports/no-unused-imports": ["error"],
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
  },
  settings: {
    tailwindcss: { callees: ["cn"], config: "tailwind.config.js" },
    next: { rootDir: true },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
    {
      files: srcTsFiles,
      rules: {
        "@typescript-eslint/no-var-requires": ["error"],
        "react/destructuring-assignment": ["error", "always"],
        "@next/next/no-img-element": "off",
        "sort-keys-custom-order/type-keys": ["error", { orderedKeys }],
        "sort-keys-custom-order/object-keys": ["error", { orderedKeys }],
      },
    },
    {
      files: srcTsFiles,
      rules: { "import/no-default-export": "error" },
      excludedFiles: nextConventionFiles,
    },
  ],
};
