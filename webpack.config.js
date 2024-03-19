const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  //TODO: Add the correct name of the module.
  name: '',

  exposes: {
  //  TODO: Add the correct expose here. The module you want to expose.
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
