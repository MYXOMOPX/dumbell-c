const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CFG = {
      publicPath: "/static/"
};

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index.js'
    ],
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: CFG.publicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: CFG.publicPath
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ]
            }

        ]
    }
};