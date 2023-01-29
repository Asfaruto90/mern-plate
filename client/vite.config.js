import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  
      injectRegister: 'script',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'mern plate',  
        short_name: 'mern plate',  
        description: 'simple mern template',  
        theme_color: '#f4f4f4',  
        start_url: '/',  
        icons: [  
          {  
              src: 'pwa-192x192.png',  
              sizes: '192x192',  
              type: 'image/png',  
          },  
          {  
              src: 'pwa-512x512.png',  
              sizes: '512x512',  
              type: 'image/png',  
          },  
          {  
              src: 'pwa-512x512.png',  
              sizes: '512x512',  
              type: 'image/png',  
              purpose: 'any maskable',  
          },
        ]
      },
    }),
  ],
})
