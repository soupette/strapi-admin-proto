import { fromJS } from 'immutable';

// Simulate the pluginLoaded from 'strapi-admin/admin/src/app.js'
function init({ initialState, appPlugins, strapi }) {
  return initialState.update('plugins', () => {
    return fromJS(
      Object.keys(appPlugins).reduce((acc, current) => {
        const registerPlugin = plugin => {
          return plugin;
        };

        const currentPluginFn = appPlugins[current];
        const plugin = currentPluginFn({
          registerPlugin,
          registerField: strapi.fieldApi.registerField,
          registerFields: strapi.fieldApi.registerFields,
        });

        acc[plugin.id] = plugin;

        return acc;
      }, {}),
    );
  });
}

export default init;
