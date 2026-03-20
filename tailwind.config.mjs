// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // IMPORTANTE: Esto habilita el modo oscuro mediante clases, no media queries
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}