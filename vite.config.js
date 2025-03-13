import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  base: './',  // 👈 Asegura rutas relativas para producción
  plugins: [
    vue(),
    vuetify({ autoImport: true }), 
  ],
});
