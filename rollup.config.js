import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cins.esm.js', // es6模块化使用
      format: 'esm',
    },
    {
      file: 'dist/cins.umd.js', // script标签引入
      format: 'umd',
      name: 'Cins',
    },
  ],
  plugins: [typescript(), terser()],
};
