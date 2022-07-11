module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:all',
    'plugin:react/all',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    semi: ['error', 'always'],
    'import/no-unresolved': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: '*' },
    ],
  },
  globals: {
    JSX: true,
  },
};
