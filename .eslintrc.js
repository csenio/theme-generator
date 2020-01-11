module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['eslint:recommended', `react-app`],
  plugins: ['react-hooks'],
  rules: {
    'no-unused-vars': 'error',
  },
}
