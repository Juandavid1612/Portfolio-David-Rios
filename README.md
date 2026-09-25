# Game Developer Portfolio

Portafolio de game dev construido con **React + Vite + Tailwind CSS**.
Una sola página con scroll (sin router): navegación por anclas a las
secciones Home, Games, About y Contact.

## Estructura

```
src/
├── main.jsx, App.jsx
├── index.css              # fuentes + Tailwind
├── data/games.js          # contenido de los 3 proyectos + skills (edítalo aquí)
└── components/
    ├── Navbar, Hero, SelectedGames, GameSection
    ├── ScreenshotGrid, VideoPlaceholder, PlaceholderArt
    ├── AboutDeveloper, Footer, Icons
```

`PlaceholderArt` genera el arte de relleno (cover art, screenshots, video,
retrato) mientras no tengas capturas reales — reemplázalo por tus propias
imágenes cuando estén listas (ver sección "Reemplazar el arte" abajo).

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en GitHub Pages

### 0. Ajusta el nombre del repo

Antes de desplegar, abre `vite.config.js` y confirma que `base` sea
`'/NOMBRE-DE-TU-REPO/'`. Ahora mismo está puesto en `'/game-dev-portfolio/'`
— si tu repositorio se llama distinto (o si el sitio vive en
`tu-usuario.github.io`, en cuyo caso `base` debe ser `'/'`), cámbialo antes
de desplegar.

### Opción A — GitHub Actions (recomendado)

Ya incluye el workflow `.github/workflows/deploy.yml`. Solo necesitas:

1. Sube el proyecto a un repo de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Source → GitHub Actions**.
3. Cada push a `main` construye y publica el sitio automáticamente.

### Opción B — `gh-pages` manual

```bash
npm run deploy
```

Esto compila el proyecto y publica la carpeta `dist/` en la rama
`gh-pages`. Luego, en **Settings → Pages → Source**, selecciona la rama
`gh-pages`.

## Reemplazar el arte de relleno

Cada proyecto muestra cover art, capturas y video con `PlaceholderArt`.
Para poner tus propias imágenes, la forma más simple es:

1. Coloca tus archivos en `src/assets/` (o `public/`).
2. En `GameSection.jsx` / `ScreenshotGrid.jsx`, cambia el componente
   `<PlaceholderArt .../>` correspondiente por una etiqueta `<img>` normal
   apuntando a tu archivo.

## Editar el contenido

Todo el texto de los tres proyectos (título, descripción, rol, motor,
plataforma, enlaces de Play/Steam) y la lista de skills vive en
`src/data/games.js` — no necesitas tocar los componentes para actualizar
el contenido.
