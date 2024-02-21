import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin'
import tsEsLintParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

const compat = new FlatCompat()

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  { ignores: ['node_modules', 'dist'] },
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends(
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: { ...globals.browser },
      parser: tsEsLintParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    plugins: {
      tsEsLintPlugin,
    },
  },
]
