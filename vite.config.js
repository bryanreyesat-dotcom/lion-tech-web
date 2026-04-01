import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://lionchshop.com.co',
      // Aquí pones las rutas que tienes en tu App.jsx (React Router)
      dynamicRoutes: [
        '/',
        '/productos',
        '/contacto',
        '/carrito'
      ]
    }),
  ],
})