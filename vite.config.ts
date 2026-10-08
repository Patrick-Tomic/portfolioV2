import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vitePluginString from 'vite-plugin-string'

export default defineConfig({
  plugins: [vue(), tailwindcss(), vitePluginString()],
  server: {
    // Run the chat backend locally with: php -S localhost:8000 -t public
    proxy: { '/api': 'http://localhost:8000' },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        battleship: resolve(__dirname, 'battleship/index.html'),
      },
    },
  },
})
