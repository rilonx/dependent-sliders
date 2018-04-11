const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: '3000'
  }
});