const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname)
    },
    entry: {
        index: './src/index.js',
        bootstrap: 'bootstrap',
        polyfill: 'babel-polyfill',
        vendor: ["jquery", "popper.js"]
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "style/style-[name].css",
            chunkFilename: "style/style-[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["polyfill","vendor","bootstrap","index"],
            chunksSortMode: "manual",
        }),
        new CopyWebpackPlugin([
            {from: "./node_modules/bootstrap/dist/css/bootstrap.min.css", to: "./style"},
        ]),
        new CopyWebpackPlugin([
            {from: "./node_modules/font-awesome/css/font-awesome.css", to: "./style"},
            {from: "./node_modules/font-awesome/fonts", to: "./fonts"}
        ]),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['style/bootstrap.min.css','style/font-awesome.css'],
            append: false
        }),
    ],

    module: { //Обновлено
        rules: [
            // Правило для JS
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: /node_modules/,
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime','react-hot-loader/babel', 'transform-decorators-legacy'],
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
                exclude: /node_modules/
            },
            // Правило для стилей (css, scss)
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './style'
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ]
            }

        ]
    }
};