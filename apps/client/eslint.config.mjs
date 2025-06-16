import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/public/**',
      '**/*.test.*',
      '**/*.spec.*'
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        React: true,
        JSX: true,
        navigator: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'react/jsx-pascal-case': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': ['warn', { allow: ['error'] }],
      'no-multiple-empty-lines': 'error',
      'no-extra-semi': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-func-assign': 'error',
      'no-self-assign': 'error',
      'eqeqeq': 'error',
      'no-var': 'error',
      'no-eval': 'error',
      'no-undef': 'off',
      'max-depth': ['error', 3],
      'prefer-destructuring': ['error', { object: true, array: false }]
    },
    settings: {
      react: { version: 'detect' }
    }
  },
  {
    files: ['*.config.mjs', 'next.config.mjs'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-console': 'off'
    }
  }
];
