import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const terserOptions = {
  compress: {
    passes: 2
  }
};

export default [
  {
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx', '.mjs'],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' ),
        preventAssignment: true
      }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled'
      }),
      commonjs(),
      // terser(terserOptions),
      nodePolyfills()
    ],
    external: [
      /@massimo-cassandro\/m-utilities/
    ],
    input: 'src/StaticTable.esm.jsx',
    output: {
      file: 'dist/StaticTable.esm.js',
      format: 'esm', // es
      sourcemap: true
    }
    
  },

  // TEST
  {
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx', '.mjs'],
      }),
      // terser(terserOptions),
      // commonjs()
    ],
    input: 'test/test-esm.js',
    output:{
      file: 'test/test-esm-min.js',
      format: 'iife',
      sourcemap: true
    }
    
  }
];