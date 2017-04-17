const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: 'add path to favicon',
    title: 'Template',
    minify: {
      collapseWhitespace: true
    },
    hash: true,
    template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
  })]
}
