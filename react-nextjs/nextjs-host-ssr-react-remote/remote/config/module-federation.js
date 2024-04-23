const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: {
      './injectableComponent': './src/components/injectableComponent',
      './Nav': './src/components/Nav',
      './Counter': './src/components/Counter',
    },
    shared: {},
  }),
  server: [
    new NodeFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './injectableComponent': './src/components/injectableComponent',
        './Nav': './src/components/Nav',
        './Counter': './src/components/Counter',
      },
      remotes: {},
      library: { type: 'commonjs2', name: 'remote' },
    }),
    new StreamingTargetPlugin({
      name: 'remote',
      library: { type: 'commonjs2' },
      remotes: {},
    }),
    // Doesn't work
    /* new UniversalFederationPlugin(
      {
        remoteType: 'script',
        name: 'remote',
        isServer: true,
        filename: 'remoteEntry.js',
        exposes: {
          // './react': 'react',
          // './react-dom': 'react-dom',
          './Counter': './src/components/Counter'
        },
        shared: {},
      })*/
  ],
};
