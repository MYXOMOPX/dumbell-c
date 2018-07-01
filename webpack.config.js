const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname)
    },
    entry: {
        index: './src/index.js',
        polyfill: 'babel-polyfill'
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "style-[name].css",
            chunkFilename: "style-[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["polyfill","index"],
            chunksSortMode: "manual",
        })
    ],

    module: { //Обновлено
        rules: [
            // Правило для JS
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime','react-hot-loader/babel'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            // Правило ESLint
            {
                test: /\.jsx?$/,
                enforce: "pre",
                loader: 'eslint-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ],
            },
            // Правило для стилей (css, scss)
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }

        ]
    }
};