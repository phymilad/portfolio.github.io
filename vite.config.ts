import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio.github.io/', // Replace 'portfolio.github.io' with your repo name
  plugins: [react()],
});