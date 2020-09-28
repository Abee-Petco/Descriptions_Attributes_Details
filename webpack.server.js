const path = require('path');
const nodeExternals = require('webpack-node-externals');

const ReactConfig = {
  mode: 'production',
  entry: './server.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'server-bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
};

var CompressionPlugin = require('compression-webpack-plugin');

const NodeConfig = {
  mode: 'production',
  entry: __dirname + '/client/src/render.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$/,
      threshold: 5000,
      minRatio: 0.8
    })
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  }
};

module.exports = [ReactConfig, NodeConfig];