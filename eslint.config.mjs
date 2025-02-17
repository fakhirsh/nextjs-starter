import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        plugins: ['simple-import-sort', 'import'],
        rules: {
            'max-len': ['error', { code: 80 }], // Max 80 characters per line
            'semi': ['error', 'always'],       // Require semicolons
            'quotes': ['error', 'single'],     // Enforce double quotes
            'no-console': ['warn'],            // Warn on console usage
        }
    }
];

export default eslintConfig;
