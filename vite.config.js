import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE para GitHub Pages:
// `base` debe ser "/NOMBRE-DE-TU-REPO/" (con las diagonales), no "/".
// Ejemplo: si tu repo es https://github.com/usuario/game-dev-portfolio,
// entonces base debe ser '/game-dev-portfolio/'.
// Si vas a publicar en <usuario>.github.io (repo raíz), usa base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/game-dev-portfolio/',
})
