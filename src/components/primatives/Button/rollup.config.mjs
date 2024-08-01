import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import dts from "rollup-plugin-dts";

export default {
    input: 'index.tsx',
    output: [{
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
    }, {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true,
    }],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: ['react', 'react-dom', '@radix-ui/react-slot', '@tylerrobins/lib-utils', 'class-variance-authority'],
};