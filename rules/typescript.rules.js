module.exports = {
  '@typescript-eslint/adjacent-overload-signatures': 'off',
  '@typescript-eslint/array-type': [
    'error',
    {
      'default': 'array-simple',
    },
  ],
  '@typescript-eslint/no-restricted-types': [
    'error',
    {
      'types': {
        'Object': {
          'message': 'Avoid using the `Object` type. Did you mean `object`?',
        },
        'Function': {
          'message': 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
        },
        'Boolean': {
          'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?',
        },
        'Number': {
          'message': 'Avoid using the `Number` type. Did you mean `number`?',
        },
        'String': {
          'message': 'Avoid using the `String` type. Did you mean `string`?',
        },
        'Symbol': {
          'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?',
        },
      },
    },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      'assertionStyle': 'as',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      'accessibility': 'no-public',
    },
  ],
  '@typescript-eslint/indent': [
    'error',
    2,
    {
      'ObjectExpression': 1,
      'FunctionDeclaration': {
        'parameters': 1,
      },
      'FunctionExpression': {
        'parameters': 1,
      },
      'CallExpression': {
        'arguments': 1,
      },
      'SwitchCase': 1,
      'ignoredNodes': [
        'PropertyDefinition[decorators]',
        'TSUnionType',
        'FunctionExpression[params]:has(Identifier[decorators])',
        'TSTypeParameterInstantiation'
      ],
    },
  ],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false,
      },
    },
  ],
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': [
    'error',
    {
      'fixToUnknown': true,
      'ignoreRestArgs': true,
    },
  ],
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unused-expressions': 'warn',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/no-unused-vars': ['error', {
    'ignoreRestSiblings': true,
    'argsIgnorePattern': '^_',
  }],
  '@typescript-eslint/quotes': [
    'error',
    'single',
  ],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/semi': [
    'error',
    'never',
  ],
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      'path': 'always',
      'types': 'prefer-import',
      'lib': 'always',
    },
  ],
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/space-before-function-paren': ['error', {
    'anonymous': 'always',
    'named': 'never',
    'asyncArrow': 'always',
  }],
  '@typescript-eslint/no-shadow': ['warn', { allow: ['e', 'err', 'error', 'exception', 'v', 'val', 'value', 'res', 'response', '_', '_1', '_2', '_3', '_4', '_5'] }],
  '@typescript-eslint/no-unsafe-return': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'error',
}
