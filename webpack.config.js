const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { productName, dependencies } = require('./package.json')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.jsx'],
  plugins: [
    new webpack.ExternalsPlugin('commonjs', Object.keys(dependencies)),
    new ExtractTextPlugin('renderer.css'),
    new HtmlWebpackPlugin({
      title: productName,
      filename: 'index.html',
      template: 'src/index.ejs',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [
          path.resolve('./src'),
          path.resolve('./node_modules/react-icons'),
        ],
      },
      {
        test: /\.svg?$/,
        use: 'file-loader',
      },
      // {
      //   test: /\.svg$/,
      //   use: {
      //     loader: '@svgr/webpack',
      //     options: {
      //       prettier: false,
      //     },
      //   },
      //   include: [path.resolve(__dirname, 'src/assets')],
      // },
    ],
  },
}