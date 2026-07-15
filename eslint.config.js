import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { react, node } from '@poolofdeath20/eslint-config';

const withTypeScript = (config) => ({
  ...config,
  languageOptions: {
    ...config.languageOptions,
    parser: tsParser,
  },
  plugins: {
    ...config.plugins,
    '@typescript-eslint': tsPlugin,
  },
});

export default [
  {
    ...withTypeScript(node),
    files: ['**/*.ts', '**/*.tsx'],
  },
  withTypeScript(react),
];