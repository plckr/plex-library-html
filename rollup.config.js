import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import { terser } from 'rollup-plugin-terser';

const plugins = [
  resolve({
      mainFields: false, // <-- this library is not an ES6 module
      browser: true, // <-- suppress node-specific features
  }),
  commonjs()
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/app.js',
      format: 'umd',
      name: 'plex-library-html'
    },
    plugins: [...plugins],
  },
];
