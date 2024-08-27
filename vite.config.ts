import path from "node:path";

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "$src/", replacement: path.join(__dirname, "src/") },
    ],
  },
  plugins: [svelte()],
});
