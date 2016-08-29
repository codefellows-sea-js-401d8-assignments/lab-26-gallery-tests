'use strict';

const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const API_URL = process.env.API_URL || 'http://localhost:3000';

let plugins = [
  new ExtractText('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: API_URL
  })
];

module.exports = {
  entry: `${__dirname}/app`,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: plugins,
  postcss: function() {
    return [autoprefixer];
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!')
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file?name=image/[hash]-[name].[ext]'
      },
      {
        test: /\.(woff|svg|eot|ttf).*/,
        loader: 'file?limit=10000&name=font/[name].[ext]'
      }
    ]
  }
};
