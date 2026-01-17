import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',                
  base: '/ui-theme-selection/',

  plugins: [react()],

  server: {
    port: 2005,             
    strictPort: true  
  }
})
