import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/clock/',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true
  },
});
