module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'always'],
  },
};
