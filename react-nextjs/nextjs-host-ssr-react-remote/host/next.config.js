const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { DefinePlugin } = require('webpack');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new DefinePlugin({ __IS_SERVER__: options.isServer }),
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          remote: `remote@http://localhost:8081/${
            options.isServer ? 'server' : 'client'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
      }),
    );
    return config;
  },
};
