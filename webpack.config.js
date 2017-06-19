const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: Path.resolve('dist'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          camelCase: true,
          localIdentName: '[local]_[hash:base64:5]',
          modules: true,
          sourceMap: true,
        },
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
      exclude: /node_modules/,
    }, {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.pug$/,
      use: 'pug-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug',
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
};
