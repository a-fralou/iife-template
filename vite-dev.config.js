import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    hmr: true,
  },
  build: {
    target: "esnext"
  },
});