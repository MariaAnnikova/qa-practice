import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      prettier,
    },
    rules: {
      "no-unused-vars": ["error"],           
      "prettier/prettier": "error",
    },
    extends: [
      "js/recommended",                      
      "plugin:prettier/recommended",
    ],
  },
]);