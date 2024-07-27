module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', 'import', 'simple-import-sort', 'react-refresh', 'jsx-a11y'],
    rules: {
        'no-console': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'no-eval': 'error',
        'import/first': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^react'],
                    ['^@mui'],
                    ['^@redux'],
                    ['^@react-redux'],
                    ['^@?\\w'],
                    ['@/(.*)'],
                    ['^[./]'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'react-refresh/only-export-components': 'warn',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
    },
};
