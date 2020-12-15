import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import filesize from 'rollup-plugin-filesize'

const { NODE_ENV = 'development' } = process.env
const isProduction = NODE_ENV === 'production'
const isDevelopment = NODE_ENV === 'development' && process.env.SERVE === 'true'

const config = {
    input: 'src/index.js',
    watch: {
        include: 'src/**'
    },
    external: [
        'core-js/modules/es.array.index-of',
        'core-js/modules/es.object.keys',
        'core-js/modules/es.regexp.constructor',
        'core-js/modules/es.regexp.exec',
        'core-js/modules/es.regexp.to-string',
        'core-js/modules/es.string.replace',
        'core-js/modules/es.array.concat',
        'regenerator-runtime/runtime'
    ],
    plugins: [
        json(),
        babel({
            babelrc: false,
            exclude: ['package.json', '**/node_modules/**'],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        corejs: 3,
                        modules: false,
                        useBuiltIns: 'usage',
                        targets: {
                            node: 'current',
                            ie: '11',
                        },
                    },
                ],
            ],
            // plugins: [
            //     ["@babel/transform-runtime", {
            //         "regenerator": true
            //     }]
            // ]
        }),
        filesize()
    ]
}

export default [
    {
        ...config,
        output: {
            name: 'SmitStore',
            exports: 'named',
            file: pkg['browser'],
            format: 'umd',
        },
        plugins: [
            ...config.plugins,
            resolve({ browser: true }),
            commonjs(),
            isProduction &&
            terser(),
            isDevelopment && serve({ contentBase: ['examples'], open: true }),
            isDevelopment && livereload()
        ].filter(Boolean)
    },
    {
        ...config,
        output: {
            file: pkg['cjs:main'],
            format: 'cjs',
            exports: 'named'
        },
        external: [...config.external, ...Object.keys(pkg.dependencies || {})]
    },
    {
        ...config,
        output: {
            file: pkg['module'],
            format: 'es',
        },
        external: [...config.external, ...Object.keys(pkg.dependencies || {})]
    }
]
