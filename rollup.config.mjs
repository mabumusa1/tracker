import typescript from "@rollup/plugin-typescript";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import pkg from './package.json' assert { type: "json" };
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';

const isDev = process.env.ROLLUP_WATCH

const banner = `/*!
 * Tracker.js v${pkg.version}
 * (c) ${new Date().getFullYear()} Tracker Analytics
 * @license Commercial
 */`;

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/tracker.js',
      format: 'iife',
      name: 'Tracker',
      banner,
      sourcemap: true,
    },
    {
      file: 'dist/tracker.esm.js',
      format: 'es',
      banner,
      sourcemap: true,
    }
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: 'src' }
      ]
    }),
    typescript({
      sourceMap: true,
      outDir: 'dist',
    }),
    !isDev && terser({
      output: {
        comments: (node, comment) => {
          return /@license/i.test(comment.value);
        }
      }
    })
  ].filter(Boolean),
};

if (isDev) {
  config.plugins.push(
    serve({
      open: true,
      contentBase: ['dist', 'public'],
      host: 'localhost',
      port: 3000
    }),
    livereload({
      watch: 'dist'
    })
  );
}

export default config;