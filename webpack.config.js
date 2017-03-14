const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: 'jquery'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }],
    loaders: [
        {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }
    ]
  },
  plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.hbs',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/de/index.hbs',
            filename: 'de/index.html'
        })
  ]
};