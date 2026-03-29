import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Automatically determine the base path for GitHub Pages
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
    const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
    const isUserSite = repo === `${owner}.github.io`;
    const basePath = process.env.GITHUB_ACTIONS && repo && !isUserSite ? `/${repo}/` : '/';

    return {
      base: basePath,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
