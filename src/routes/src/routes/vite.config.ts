import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  base: '/carlsonpalletliquidationunusa/',   // Make sure this matches your repo name exactly!
  plugins: [
    tanstackRouter({ target: 'react' }),
    react(),
  ],
  build: {
    outDir: 'dist',
  },
})
