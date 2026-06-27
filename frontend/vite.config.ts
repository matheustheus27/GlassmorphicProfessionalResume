import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // The official v4 plugin handles everything natively
  ],
  resolve: {
    alias: {
      // Creates the @ shortcut to the src folder
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Maintains support for the asset file types you need
  assetsInclude: ['**/*.svg', '**/*.csv'],
})