# Prueba técnica para Juniors y Trainees de React en Live Coding.

### Parte I de la prueba

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

  - Endpoint `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.
- No se puede utilizar React Query, SWR, axios, apollo

---

### Parte II de la prueba

- Centrar los elementos
- Agregar un boton que permita actualizar el fact botenido de la API
- Reutilizar el Codigo
- Que mas harias? aplicar Testing E2E

---

## Inicializar proyecto de React desde 0 (sin la plantilla preconfigurada)

Pasos a seguir:

1. Crear plantilla vite con `npm create vite@latest`.
2. instalar plugin de react para vite con `npm i @vitejs/plugin-react`
3. Crear archivo `vite.config.js`.
4. Agregar Configuracion para utilizar plugin de react

```
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
      plugins: [react()],
  });

```

5. Agregar react y react-dom como dependencias del proyecto
   `npm i react react-dom`
6. Crear el punto de entrada de react, en `main.js` agregar:

```
  import { createRoot } from "react-dom/client";

  const app = document.getElementById("app");
  const root = createRoot(app);

  root.render(<h1>Hola mundo</h1>);
```

7. Cambiar la extension de `main.js` a `main.jsx`, el plugin de vite para react no hace la transpilacion directamente a menos que se indique que es jsx.
8. Cambiar en el `index.html` el `src="/main.js"` a `src="/main.jsx"`.
9. Instalar el linter, en el caso de standarjs `npm install standard -D`.
10. Configurar el eslinter, en `package.json`

```
"eslintConfig": {
    "extends": [
      "./node_modules/standard/eslintrc.json"
    ]
  }
```
