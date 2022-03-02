const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: [
        '/src/js/myModules.js',
        '/src/css/style.scss'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    mode: 'development',
    watch:true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
        //   {
        //     test: /\.s[ac]ss$/i,
        //     exclude:/node_modules/,
        //     use: [
        //         {
        //             loader: 'file-loader',
        //             options: {
        //                 options: { outputPath: 'css/', name: '[name].min.css'}
        //             }
        //         },
        //       'sass-loader',
        //     ],
        //   },
        {
            test: /\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ]
        }
        ],
    },
    plugins: [new ESLintPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebpackPlugin()],
}
