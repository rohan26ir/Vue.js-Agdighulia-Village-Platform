# Agdighulia Village

A responsive Vue 3 website for the Agdighulia village community, built with Vite,
TypeScript, and Vue Router.

## Project structure

- `src/pages/` contains route-level page components.
- `src/router/` defines the client-side routes and scroll behavior.
- `src/App.vue` provides the shared navigation, page outlet, and footer.
- `src/assets/` contains the global styles and design tokens.

## Routes

- `/` — Community landing page
- `/about` — About the village
- Any unmatched path — Not-found page

## Setup

Requires Node.js `^22.18.0` or `>=24.12.0`.

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The build runs Vue/TypeScript checks before generating the production bundle in
`dist/`.

## IDE support

Use [VS Code](https://code.visualstudio.com/) with the
[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
extension.
