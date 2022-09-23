const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//this is important for our babel-plugins which help us know we are runnng in development mode
process.env.NODE_ENV = 'development'

module.exports = {
    //enable only the development features
    mode: 'development',
    target: 'web',
    //source map let us see our original code when debugging in browser
    devtool: 'cheap-module-source-map',
    stats: 'minimal',

    entry: './src/index',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        https: false,
        client: {
            overlay: true,
            reconnect: true,

        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        })
    ],

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']

            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }

        ],
    },
}