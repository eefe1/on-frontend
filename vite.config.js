import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suppress deprecation warnings from dependencies
        silenceDeprecations: ['import', 'color-functions', 'global-builtin', 'mixed-decls']
      }
    }
  }
})
