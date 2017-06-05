const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.vue',
  output: {
    filename: 'bundle.js',
    path: Path.resolve('dist'),
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'sass-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.pug',
  })],
  devServer: {
    compress: true,
    port: 9000,
  },
};
