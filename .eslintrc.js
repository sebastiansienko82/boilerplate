module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended'
    ],
    env: {
        browser: true,
        amd: true,
        node: true,
        jasmine: true
    },
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        'max-len': [
            'error',
            { 'code': 180 }
        ],
        indent: [
            'error',
            4,
            { 'SwitchCase': 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
    }
};
