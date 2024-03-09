
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  devtool: "source-map",
  module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sass|scss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        //Assets: images, etc. -----
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: './style.css'
        })
      ],
      optimization: {
          minimizer: [
            new CssMinimizerPlugin()
          ]
        }
}
