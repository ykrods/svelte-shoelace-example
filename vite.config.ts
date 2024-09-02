import path from "node:path";

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import copy from "rollup-plugin-simple-copy/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-shoelace-example/",
  build: {
    outDir: "dist/svelte-shoelace-example",
  },
  resolve: {
    alias: [
      { find: "$src/", replacement: path.join(__dirname, "src/") },
    ],
  },
  plugins: [
    svelte(),
    copy({
      extMap: {
        ".svg": "image/svg+xml",
      },
      targets: [
        {
          src: "node_modules/@shoelace-style/shoelace/dist/assets",
          dest: "shoelace/assets",
          filter(src) {
            const re = /.+\/(sun|moon|list|check2-circle|plus-square|x|trash|folder|arrow-clockwise)\.svg$/;
            return re.test(src);
          },
        }
      ],
    }),
  ],
});
