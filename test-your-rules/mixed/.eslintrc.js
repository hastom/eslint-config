module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  extends: [
    require.resolve('../../typescript-mixed'),
  ],
}
