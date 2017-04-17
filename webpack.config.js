const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}
