const reactRules = require('../rules/react.rules');
module.exports = {
  "parserOptions": {
    ecmaFeatures: {
      jsx: true
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "settings": {
    react: {
      version: "detect"
    }
  },
  "rules": {
    ...reactRules,
  },
  "overrides": [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
      }
    }
  ]
}
