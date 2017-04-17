const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: 'minimal',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: 'add path to favicon',
    title: 'Template',
    minify: {
      collapseWhitespace: true
    },
    template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
  }),
    new ExtractTextPlugin({
      filename: 'App.css',
      allChunks: true
    })
  ]
}
