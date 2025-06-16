module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    "node_modules/", "out/", 
    "public/", "next.config.js"
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "camelcase": "error",
    "react/jsx-pascal-case": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "semi": "warn",
    "no-multiple-empty-lines": "error",
    "no-extra-semi": "error",
    "no-dupe-keys": "error",
    "no-dupe-args": "error",
    "no-console": "warn",
    "no-func-assign": "error",
    "no-self-assign": "error",
    //"arrow-body-style": ["error", "as-needed"], // ()=> вместо ()=>{return}
    "no-var": "error",
    "no-eval": "error",
    "eqeqeq": "error",
    "max-depth": ["error", 3],
    "prefer-destructuring": ["error", { "object": true, "array": false }]
  },
};