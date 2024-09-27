import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      ViteImageOptimizer({
        include: ['src/images/*.jpg', 'src/images/*.png'],
        jpeg: {
          quality: 10,
          progressive: true,
          mozjpeg: true,
        },
      }),
    ],
  };
});
