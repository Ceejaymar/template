const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader'],
                  publicPath: '/dist'
                })

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: cssConfig
      },
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: 'minimal',
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: 'add path to favicon',
    title: 'Template',
    minify: {
      collapseWhitespace: true
    },
    // filename: '../index.html',
    template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
  }),
    new ExtractTextPlugin({
      filename: 'App.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
