// JS
import sucrase from '@rollup/plugin-sucrase';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// CSS
import Processor from '@modular-css/processor';
import mcss from '@modular-css/rollup';
import purgecss from '@fullhuman/postcss-purgecss';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

const isProd = process.env.PROD === 'true';
const isDev  = process.env.DEV === 'true';

const config = {
    input: './src/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'iife',
        sourcemap: isDev,
        assetFileNames: 'bundle[extname]'
    },
    plugins: [
        // JSON
        json({
            exclude: ['node_modules/**'],
            preferConst: true,
            compact: true
        }),

        // CSS
        mcss({
            dev: isDev,
            map: isDev,
            include: './src/**/*.css',
            processor: new Processor({
                processing: [
                    tailwindcss
                ],
                done: isProd && [
                    purgecss({
                        content: ['./dist/**/*.html', './src/**/*.js', './src/**/*.css'],
                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                        whitelistPatterns: [/^mc.*/]
                    }),
                    cssnano(),
                    autoprefixer
                ]
            })
        }),

        sucrase({
            exclude: ['node_modules/**'],
            transforms: []
        }),
        nodeResolve(),
        commonjs(),

        // Production-only Plugins
        isProd && terser.terser(),

        // Development-only Plugins
        isDev && serve({ contentBase: 'dist', port: 8090 }),
        isDev && livereload('dist')
    ]
};

export default config;