import child_process from 'child_process';

import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import copy from "rollup-plugin-simple-copy";

import terser from '@rollup/plugin-terser';

// https://github.com/rollup/plugins/issues/1366
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
global['__filename'] = __filename;

const production = !process.env.ROLLUP_WATCH;

const dest = production ? 'docs' : 'public/svelte-shoelace-example';

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'esm',
    dir: dest,
    chunkFileNames: '[name].js',
  },
  plugins: [
    svelte({
      extensions: ['.svelte', '.svg'],
      onwarn: (warning, handler) => {
        if (
          warning.code === 'a11y-no-static-element-interactions' &&
            warning.message.includes("<sl-")
        ) return;
        handler(warning);
      },
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      }
    }),
    css({ output: 'bundle.css' }),
    copy({
      targets: [
        {
          src: 'src/static',
          dest,
        },
        {
          src: 'node_modules/@shoelace-style/shoelace/dist/assets',
          dest: `${dest}/shoelace/assets`,
          filter(src) {
            const re = /.+\/(sun|moon|list|check2-circle|check-lg|chevron-right)\.svg$/;
            return re.test(src);
          }
        },
      ],
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),

    !production && serve(),
    production && terser(),
  ],
  watch: {
    include: "src/**",
    chokidar: false,
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;
        child_process.spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}
