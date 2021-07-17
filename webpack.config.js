//@ts-nocheck
require('webpack');
const TerserPlugin = require('terser-webpack-plugin'); // Default Webpack JS minimizer
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Uses html template file to create index.html with all imports
const path = require('path');

module.exports = (_, args) =>
{
    const isProduction = args && args.mode === 'production';

    const response = {};

    response.mode = !isProduction ? 'development' : 'production';

    response.devtool = !isProduction ? 'eval-source-map' : false;

    response.entry = { app: './src/app-shell.ts' };

    response.output = {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'), // This path has to be absolute,
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
    };

    response.resolve = { extensions: [ '.js', '.ts', '.css' ] };

    /* Loaders run from bottom to top */
    response.module = {
        rules: [
            /* Compile TypeScript files */
            {
                test: /\.ts$/i,
                use: [ 'ts-loader' ]
            },
            /* Load css files and add them to the index file via style-loader */
            {
                test: /\.css$/i,
                use: [ 'css-loader' ]
            },
            /* Treat files with their respective structures. */
            {
                test: /\.(jpe?g|png|svg|webmanifest)$/i,
                type: 'asset/resource'
            },
            /* Treat wrongly marked esm files correctly. */
            {
                test: /[\\/]esm[\\/].*\.js$/i,
                type: 'javascript/auto'
            },
            /* Treat mjs files in a compatible way. */
            {
                test: /\.m?js/i,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    };

    response.plugins = [
        /* Takes all entry point scripts and inserts them into the template file. */
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true,
            hash: false // is done via contenthash and plugins
        })
    ];

    response.optimization = {
        splitChunks: {
            cacheGroups: {
                /* Merge all extracted css files into one */
                styles: {
                    name: 'styles',
                    test: /\.css$/i,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    };

    if (isProduction)
    {
        response.optimization = {
            ...response.optimization,
            runtimeChunk: 'single',
            emitOnErrors: false,
            minimize: true,
            minimizer: [
                /* Default Webpack minimizer */
                new TerserPlugin()
            ]
        };
    }

    response.devServer = {
        hot: false,
        liveReload: true,
        historyApiFallback: true,
        port: 1234
    };

    return response;
};