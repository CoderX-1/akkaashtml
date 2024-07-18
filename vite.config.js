// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Specify a port for the development server
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
});
