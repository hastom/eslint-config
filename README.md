# Waves Enterprise Esling configuration

### Install
```
npm i -D eslint @wavesenterprise/eslint-config
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
    '@wavesenterprise/eslint-config/typescript-mixed',
    '@wavesenterprise/eslint-config/react',
  ]
};

// pure typescript
module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    '@wavesenterprise/eslint-config/typescript-pure',
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
    '@wavesenterprise/eslint-config/base',
  ]
};

```

Extend `@wavesenterprise/eslint-config/typescript-mixed` if your project uses typescript AND javascript

Extend `@wavesenterprise/eslint-config/typescript-pure` if your project uses ONLY typescript

Extend `@wavesenterprise/eslint-config/base` if your project uses ONLY javascript

Extend `@wavesenterprise/eslint-config/react` if your project uses React

If `typescript-mixed` or `base` configs are extended you MUST install `@babel/core` package 
to support `@babel/eslint-parser` plugin. 
Also, path to babel config file should be set at `parserOptions.babelOptions.configFile`

If `typescript-mixed` or `typescript-pure` configs are extended `parserOptions.project` MUST be set 
to match `tsconfig.json` file. All linted files MUST be included or listed in `tsconfig.json`.
