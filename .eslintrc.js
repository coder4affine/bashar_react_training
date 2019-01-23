module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/forbid-prop-types': [0],
    'react/no-array-index-key': [0],
    'react/require-default-props': [0],
    'react/destructuring-assignment': [0],
    'global-require': [0],
    'no-underscore-dangle': [0],
    'no-plusplus': 'off',
    // 'linebreak-style': 'off', // Don't play nicely with Windows.

    // 'arrow-parens': 'off', // Incompatible with prettier
    // 'object-curly-newline': 'off', // Incompatible with prettier
    // 'no-mixed-operators': 'off', // Incompatible with prettier
    // 'function-paren-newline': 'off', // Incompatible with prettier
    // 'no-plusplus': 'off',
    // 'space-before-function-paren': 0, // Incompatible with prettier

    // 'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    // 'no-console': 'off',// airbnb is using warn
    // 'no-alert': 'off',// airbnb is using warn

    // 'no-param-reassign': 'off', // Not our taste?
    // radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.

    // 'react/require-default-props': 'off', // airbnb use error
    // 'react/forbid-prop-types': 'off', // airbnb use error
    // 'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx

    // 'prefer-destructuring': 'off',

    // 'react/no-unused-prop-types': 'off', // Is still buggy
    // 'react/jsx-one-expression-per-line': 'off',

    // 'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    // 'jsx-a11y/label-has-for': [
    //   2,
    //   {
    //     required: {
    //       every: ['id'],
    //     },
    //   },
    // ], // for nested label htmlFor error

    'prettier/prettier': ['error'],
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
