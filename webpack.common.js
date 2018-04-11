const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        use: 'babel-loader',
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          { loader: 'stylus-loader' },
        ],
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: [/node_modules/, /dist/]
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      }
    ]
  },
  plugins: [
    new FlowWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: process.env.NODE_ENV,
      template: './src/index.pug'
    }),
  ]
};