import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
// import { terser } from 'rollup-plugin-terser';

const plugins = [
  resolve({
      mainFields: false, // <-- this library is not an ES6 module
      browser: true, // <-- suppress node-specific features
  }),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    __buildDate__: () => JSON.stringify(new Date())
  })
];

export default [
  {
    input: 'src/app-container.js',
    output: {
      file: 'dist/app.js',
      format: 'umd',
      name: 'plex-library-html'
    },
    plugins: [...plugins],
  },
];
