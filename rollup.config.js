import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import filesize from 'rollup-plugin-filesize'
import autoExternals from 'rollup-plugin-auto-external'

const { NODE_ENV = 'development' } = process.env
const isProduction = NODE_ENV === 'production'
const isDevelopment = NODE_ENV === 'development' && process.env.SERVE === 'true'

const moduleExternals = [
    'regenerator-runtime/runtime',
    // 'core-js/modules/es.regexp.constructor',
    // 'core-js/modules/es.regexp.exec',
    // 'core-js/modules/es.regexp.to-string',
    // 'core-js/modules/es.string.replace',
    // '@babel/runtime/helpers/classCallCheck',
    // '@babel/runtime/helpers/createClass',
    // 'core-js/modules/es.array.concat',
    // '@babel/runtime/helpers/defineProperty',
    // '@babel/runtime/helpers/inherits',
    // '@babel/runtime/helpers/possibleConstructorReturn',
    // '@babel/runtime/helpers/getPrototypeOf',
    // '@babel/runtime/helpers/typeof',
    // '@babel/runtime/regenerator',
    // '@babel/runtime/helpers/asyncToGenerator',
]

const config = {
    input: 'src/index.js',
    watch: {
        include: 'src/**'
    },
    external: ['axios'],
    plugins: [
        json(),
        autoExternals(),
        babel({
            exclude: ['package.json', '**/node_modules/**'],
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-syntax-import-meta",
                ["@babel/plugin-proposal-class-properties", { "loose": false }],
                "@babel/plugin-proposal-json-strings"
            ]
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
            format: 'umd'
        },
        plugins: [
            ...config.plugins,
            resolve({
                browser: true,
            }),
            commonjs(),
            isProduction &&
            terser(),
            isDevelopment && serve({ contentBase: ['examples'], open: true }),
            isDevelopment && livereload()
        ].filter(Boolean),
        external: [...config.external, ...Object.keys(pkg.dependencies || {})]
    },
    {
        ...config,
        output: {
            file: pkg['cjs:main'],
            format: 'cjs',
            exports: 'named'
        },
        external: [...config.external, ...moduleExternals, ...Object.keys(pkg.dependencies || {})]
    },
    {
        ...config,
        output: {
            file: pkg['module'],
            format: 'es',
        },
        external: [...config.external, ...moduleExternals, ...Object.keys(pkg.dependencies || {})]
    }
]
