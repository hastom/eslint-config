const commonRules = require('../rules/common.rules')
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': '2018',
  },
  'plugins': [
    'import',
  ],
  'rules': {
    ...commonRules,
  },
}
