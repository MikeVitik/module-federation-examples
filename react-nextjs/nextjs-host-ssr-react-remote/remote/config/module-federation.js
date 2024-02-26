const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
// const { UniversalFederationPlugin } = require('@module-federation/node');
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: {
      // './react': 'react',
      // './react-dom': 'react-dom',
      './Nav': './src/components/Nav',
    },
    shared: {},
  }),
  server: [
    new NodeFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Nav': './src/components/Nav',
      },
      remotes: {},
      library: { type: 'commonjs-module' },
    }),
    new StreamingTargetPlugin({
      name: 'remote',
      library: { type: 'commonjs-module' },
      remotes: {},
    }),
    // Doesn't work
    // new UniversalFederationPlugin(
    //   {
    //     name: 'remote',
    //     filename: 'remoteEntry.js',
    //     exposes: {
    //       // './react': 'react',
    //       // './react-dom': 'react-dom',
    //       './Nav': './src/components/Nav',
    //     },
    //     shared: {},
    //   }
  ],
};
