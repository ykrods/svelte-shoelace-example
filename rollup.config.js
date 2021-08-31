import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import copy from "rollup-plugin-simple-copy";

import { terser } from 'rollup-plugin-terser';


const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'esm',
    dir: production ? 'docs/dist' : 'public/dist',
    chunkFileNames: '[name].js',
  },
  plugins: [
    svelte({
      extensions: ['.svelte', '.svg'],
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      }
    }),
    css({ output: 'bundle.css' }),
    copy({
      targets: [
        {
          src: 'node_modules/@shoelace-style/shoelace/dist/assets',
          dest: 'public/dist/shoelace/assets'
        },
      ],
      filter(src) {
        const re = /.+\/(sun|moon|list|check2-circle)\.svg$/;
        return re.test(src);
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),

    !production && serve(),
    production && terser(),
  ],
  watch: {
    clearScreen: false
  }
};

// plugin としてサーバを立ち上げるもの
function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;
				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
