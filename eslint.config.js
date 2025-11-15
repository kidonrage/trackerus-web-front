import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
      { ignores: ['dist', 'coverage'] },
      {
            files: ['**/*.{ts,tsx}'],
            languageOptions: { ecmaVersion: 2022, globals: globals.browser },
            plugins: { import: importPlugin },
            settings: { 'import/resolver': { typescript: true } },
            extends: [
                  js.configs.recommended,
                  ...tseslint.configs.recommended,
                  reactHooks.configs.flat.recommended,
                  reactRefresh.configs.vite,
                  prettier, // отключает форматерные правила ESLint в пользу Prettier
            ],
            rules: {
                  'import/order': ['error', { 'newlines-between': 'always' }],
            },
      },
])

