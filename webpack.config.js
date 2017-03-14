const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        }),
        new CopyWebpackPlugin([
            { from: 'static/403.html', to: '.' },
            { from: 'static/404.html', to: '.' },
            { from: 'static/error.html', to: '.' },
            { from: 'static/favicon.ico', to: '.' },
            { from: 'static/manifest.json', to: '.' },
            { from: 'static/robots.txt', to: '.' },
            { from: 'static/icon/android-icon.png', to: 'icon/.' },
            { from: 'static/icon/apple-icon.png', to: 'icon/.' },
            { from: 'static/icon/favicon.png', to: 'icon/.' },
            { from: 'static/icon/flickr.png', to: 'icon/.' },
            { from: 'static/icon/instagram.png', to: 'icon/.' },
            { from: 'static/icon/linkedin.png', to: 'icon/.' },
            { from: 'static/icon/ms-icon.png', to: 'icon/.' },
            { from: 'static/WEB-INF/web.xml', to: 'WEB-INF/.' }
        ])
  ]
};