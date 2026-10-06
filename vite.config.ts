import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://sihati-seven.vercel.app',
      dynamicRoutes: [
        '/doctors',
        '/nurses',
        '/specialties',
        '/pharmacies',
        '/about',
        '/contact',
      ],
    }),
  ],
})