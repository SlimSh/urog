const path = require('path');
const webpack = require('webpack');

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
      rules: [
        {enforce: "pre", test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "source-map-loader" },
        { test: /\.css$/, use: 'css-loader' },
        { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: 'awesome-typescript-loader' }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        "React": "react",
        "react-dom": "ReactDOM"
      }),
    ]
  }
  