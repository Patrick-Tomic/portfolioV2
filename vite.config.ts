import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vitePluginString from 'vite-plugin-string'

export default defineConfig({
  plugins: [vue(), tailwindcss(), vitePluginString()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        battleship: resolve(__dirname, 'battleship/index.html'),
      },
    },
  },
})
