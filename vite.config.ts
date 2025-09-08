import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? "/Karan_Portfolio/" : "/",  // 👈 dynamic base
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

