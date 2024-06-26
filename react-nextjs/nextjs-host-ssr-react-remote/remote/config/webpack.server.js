const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: 'http://localhost:8081/server/'
  },
  target: false,
  name: 'server',
  plugins: [...moduleFederationPlugin.server],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
