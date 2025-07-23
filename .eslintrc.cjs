module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // свої правила
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-unused-vars': ['warn'],
  },
};