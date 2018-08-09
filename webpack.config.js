const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './view/src/app.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'view/build'),
    filename: 'main.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css']
  },
  module: {
    rules: [{
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      },
      // { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'typed-css-modules-loader',
            options: {
              camelCase: true
            }
          },
          'sass-loader',




        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000, // if less than 10 kb, add base64 encoded image to css
          name: "assets/[hash].[ext]" // if more than 10 kb move to this folder in build using file-loader
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
      "react-dom": "ReactDOM"
    }),
  ]
}