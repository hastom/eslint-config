const commonRules = require('../rules/common.rules');
const tsRules = require('../rules/typescript.rules');
module.exports = {
  "extends": [
    require.resolve("../base"),
  ],
  "overrides": [
    {
      "files": ["*.tsx", "*.ts"],
      "parser": "@typescript-eslint/parser",
      "plugins": [
        "import",
        "@typescript-eslint",
      ],
      "extends": [
        "plugin:import/typescript",
      ],
      "rules": {
        ...commonRules,
        "indent": "off",
        "no-empty-function": "off",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-unused-vars": "off",
        "quotes": "off",
        "require-await": "error",
        "semi": "off",
        "space-before-function-paren": "off",
        ...tsRules,
      },
    },
  ],
};
