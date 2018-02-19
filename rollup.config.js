import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'coinslot',
      file: pkg.main,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    minify(),
  ],
};