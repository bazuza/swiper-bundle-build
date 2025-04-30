import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/swiper.build.js',
    output: {
        file: 'dist/swiper-custom-bundle.js',
        format: 'iife',
        name: 'Swiper',
        sourcemap: false
    },
    plugins: [
        resolve(),
        commonjs(),
        terser({
            format: {
                comments: /@license/i
            }
        })
    ]
};