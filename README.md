# Esling configuration

### Install
```
npm i -D eslint @hastom/eslint-config
```

### Use
```
// .eslintrc.js

// react + typescript + javascript
module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    babelOptions: {
      configFile: './babel.config.js'
    }
  },
  extends: [
    '@hastom/eslint-config/typescript-mixed',
    '@hastom/eslint-config/react',
  ]
};

// pure typescript
module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    '@hastom/eslint-config/typescript-pure',
  ]
};

// pure javascript
module.exports = {
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js'
    }
  },
  extends: [
    '@hastom/eslint-config/base',
  ]
};

```

Extend `@hastom/eslint-config/typescript-mixed` if your project uses typescript AND javascript

Extend `@hastom/eslint-config/typescript-pure` if your project uses ONLY typescript

Extend `@hastom/eslint-config/base` if your project uses ONLY javascript

Extend `@hastom/eslint-config/react` if your project uses React

If `typescript-mixed` or `base` configs are extended you MUST install `@babel/core` package 
to support `@babel/eslint-parser` plugin. 
Also, path to babel config file should be set at `parserOptions.babelOptions.configFile`

If `typescript-mixed` or `typescript-pure` configs are extended `parserOptions.project` MUST be set 
to match `tsconfig.json` file. All linted files MUST be included or listed in `tsconfig.json`.
