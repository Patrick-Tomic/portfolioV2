import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vitePluginString from 'vite-plugin-string'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),
    vitePluginString()
  ]
})
