const commonRules = require('../rules/common.rules');
const tsRules = require('../rules/typescript.rules');
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "import",
    "@typescript-eslint",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "2018",
  },
  "extends": [
    "plugin:import/typescript",
  ],
  "rules": {
    ...commonRules,
    "import/named": "off",
    "no-empty-function": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    ...tsRules,
  },
};
