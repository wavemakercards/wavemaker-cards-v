import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Wavenet Cards version 5',
        short_name: 'WavemakerCards5',
        start_url: '/',
        display: 'standalone',
        background_color: '#212121',
        theme_color: '#212121',
        icons: [
          {
            src: '192.png',
            sizes: 'icons/192x192',
            type: 'image/png',
          },
          {
            src: 'icons/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        file_handlers: [
          {
            action: '/index.html',
            accept: {
              'application/json': ['.wmc'],
            },
          },
        ],
      },
    }),
  ],
});
