import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

import eslint from "@eslint/js";

export const serviceConfig = [
  {
    ignores: ["**/eslint.config.js"],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
];
