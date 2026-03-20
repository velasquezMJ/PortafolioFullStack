import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://velasquezmj.github.io', // Tu URL de GitHub Pages
  base: '/PortafolioFullStack', // El nombre de tu repositorio en GitHub
  vite: {
    plugins: [tailwindcss()],
  },
});