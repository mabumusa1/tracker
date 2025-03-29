import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  // Dev specific overrides here
  plugins: [
    serve({
      open: true,
      contentBase: ['dist', 'public'],
      host: 'localhost',
      port: 3000
    }),
    livereload({
      watch: 'dist'
    })
  ]
};