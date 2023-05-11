module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'eslint-plugin-import'],
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',  //automatically determines the version of the React library based on the installed dependencies 
    },                    //in the project, and uses the appropriate linting rules for that version.
  },
  rules: {
    'prettier/prettier': 'error',   //check prettier rules and log error
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', '.tsx'] }], //.js, .ts and .tsx extensions are allowed for files that use JSX
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'react/prop-types': 'off',
    'max-classes-per-file': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'global-require': 'off',
    'no-param-reassign': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-alert': 'error',
    'eol-last': 'error',
    'semi': 'error',
    'no-console': 'error',
  },
  overrides: [],
};
