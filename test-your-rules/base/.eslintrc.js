module.exports = {
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  extends: [
    require.resolve('../../base'),
  ],
}
