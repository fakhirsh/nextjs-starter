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

html, body {
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

