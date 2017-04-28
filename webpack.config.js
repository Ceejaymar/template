const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
  entry: './src/App.jsx',
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
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // port: 9000,
    stats: 'minimal',
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: 'add path to favicon',
      // filename: '../index.html',
    title: 'Template',
    minify: {
      collapseWhitespace: true
    },
    template: './src/index.ejs', // Load a custom template
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
