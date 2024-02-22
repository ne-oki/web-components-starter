import js from '@eslint/js'
import ts from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  { ignores: ['node_modules', 'dist', 'storybook-static'] },
  js.configs.recommended,
  eslintConfigPrettier,
  ...ts.config(...ts.configs.recommended, {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: {
        project: './tsconfig.quality.json',
      },
    },
  }),
]
