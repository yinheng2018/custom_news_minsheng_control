module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  plugins: [
    'html'
  ],
  extends: [
    'airbnb'
  ],
  rules: {
    'no-console': 'warn',
    'react/sort-comp': 'off',
    'no-debugger': 'off',
    'no-param-reassign': ['error', { props: false }],
    // maximum line length
    'max-len': [1, {
      code: 160,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'no-return-await': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false
    }],
    'global-require': [0],
    'react/prop-types': [0],
    'func-names': [0],
    'import/no-unresolved': [0],
    'no-undef': [0],
    'class-methods-use-this': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'react/self-closing-comp': 0,
    'react/no-array-index-key': 0,
    'implicit-arrow-linebreak': [0, 'brace-style'],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/prefer-default-export': [0],
    'react/jsx-wrap-multilines': 0,
    'react/no-this-in-sfc': [0],
    'react/no-unused-state': [0],
    'arrow-parens': 0,
    'no-nested-ternary': 0,
    'consistent-return': [0],
    'react/jsx-closing-tag-location': [0],
    'jsx-a11y/no-noninteractive-tabindex': [0],
    'react/jsx-indent-props': [2, 2],
    'linebreak-style': 0,
    'react/jsx-closing-bracket-location': 0,
    'prefer-promise-reject-errors': 0,
    'no-restricted-syntax': 0,
    'import/no-cycle': 0,
    'react/jsx-props-no-spreading': 0
  }
};
