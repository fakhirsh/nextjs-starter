# Nextjs Setup

## 1. Install Nextjs

First switch to the directory where you want to create the project. Then:

```bash
npx create-next-app@latest .
```

Select the following options:

```
✔ What is your project named? … (???)
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? … Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No
```

This will install a few recommended packages that we will use.

## 2. Cleanup project structure

### 1. Cleanup `globals.css`

Remove any boiler plate code from `src/globals.css` and add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
    padding: 0;
    margin: 0;
}

* {
    box-sizing: border-box;
}
```

### 2. Delete unwanted assets

We can safely delete all `svg` files from `public` directory.

### 3. Cleanup `page.tsx`

Delete all the boiler plate code from `src/pages/index.tsx` and add the following:

```tsx
export default function Home() {
    return <h1>Hello World</h1>;
}
```

### 4. Enable React Strict Mode

Add the following in `next.config.ts`:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true // Enable React Strict Mode
};

export default nextConfig;
```

# 3. Installing Plugins

## 1. EditorConfig

Create a `.editorconfig` file in the root of the project and add the following:

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

## 2. Prettier

Please see the latest installation instruction from the [official website](https://prettier.io/docs/en/install).

1. Install prettier:

```bash
npm install --save-dev --save-exact prettier
```

Create a basic configuration file `.prettierrc` in the root of the project:

```json
{
    "singleQuote": true,
    "trailingComma": "none"
}
```

Add the following in `package.json`:

```json
"scripts": {
    ...
    "prettier": "prettier --write ."
}
```

Also create a `.prettierignore` file in the root of the project. Copy everything from `.gitignore` and paste it in `.prettierignore`.

_Note: check if you can use `.gitignore` instead of `.prettierignore`_

## 3. StyleLint ??

Since we're using Tailwind CSS, we don't need to use StyleLint.

## 4. ESLint Rules

Let's start adding following rules to the starter `eslint.config.mjs` file:

```json
const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            'max-len': ['error', { code: 80 }], // Enforce max 80 characters per line
            'semi': ['error', 'always'],       // Require semicolons
            'quotes': ['error', 'single'],     // Enforce double quotes
            'no-console': ['warn'],            // Warn on console usage
        }
    }
];
```

## 5. ESLint Plugin: Simple Import Sort

First install the plugin:

```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

Then add the following to the `eslint.config.mjs`:

````json



# Repository Maintenance

Check for outdated packages:

```bash
npm outdated
````

Update all packages (specially the ones in _red_):

```bash
npm update
```
