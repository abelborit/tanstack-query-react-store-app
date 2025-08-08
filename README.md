# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---

# Temas puntuales de la sección

Esta sección tiene por objetivo lo siguiente:

- Aprender sobre mutaciones
- Mutaciones optimistas
- Manejo de errores
- Actualizar e invalidar data
- Establecer data en caché manualmente después de la mutación
- Eliminación en caso de fallo en una actualización optimista

Inicialmente, veremos la forma tradicional y simple de hacer uso del useMutation, pero luego lo expandiremos para tener mutaciones optimistas que darán una experiencia de usuario muy buena y dar la apariencia de que su aplicación literalmente no tiene demora en las peticiones http.

---

## NOTAS:

- React Hook Form vs Formik: https://medium.com/@ignatovich.dm/react-hook-form-vs-formik-44144e6a01d8
