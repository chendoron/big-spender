const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: Path.resolve('dist'),
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'sass-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
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
