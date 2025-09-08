import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Switch base depending on build target
export default defineConfig({
  base: process.env.BUILD_TARGET === "gh-pages" ? "/Karan_Portfolio/" : "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
