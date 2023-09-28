module.exports = {
  'react/void-dom-elements-no-children': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-access-state-in-setstate': 'error',
  'react/self-closing-comp': 'error',
  'react/jsx-key': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-undef': ['error', { 'allowGlobals': true }],
  'react/jsx-uses-react': 'warn',
  'react/jsx-uses-vars': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-children-prop': 'error',
  'react/no-deprecated': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'warn',
  'react/react-in-jsx-scope': 'error',
  'react/require-render-return': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/prop-types': 'error',
  'react/display-name': 'off',
  'react/jsx-tag-spacing': ['error', {
    'closingSlash': 'never',
    'beforeSelfClosing': 'always',
    'afterOpening': 'never',
    'beforeClosing': 'allow'
  }]
}
