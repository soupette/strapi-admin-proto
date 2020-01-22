import { fromJS } from "immutable";

// Simulate the pluginLoaded from 'strapi-admin/admin/src/app.js'
function init({ initialState, appPlugins }) {
  return initialState.update("plugins", () => {
    return fromJS(
      Object.keys(appPlugins).reduce((acc, current) => {
        acc[appPlugins[current].id] = appPlugins[current];

        return acc;
      }, {}),
    );
  });
}

export default init;
