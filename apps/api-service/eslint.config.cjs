// const eslint = require("@eslint/js");
// const globals = require("globals");
// const tseslint = require("typescript-eslint");
// const eslintConfigPrettier = require("eslint-config-prettier");
// const serviceConfig = require("@sophist/eslint-config")
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

import eslint from "@eslint/js";

module.exports = [
  {
    ignores: ["**/eslint.config.js"],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    // Rules
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
