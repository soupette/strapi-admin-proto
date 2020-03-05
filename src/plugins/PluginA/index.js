import Json from './components/Json';
import App from './containers/App';
import Initializer from './containers/Initializer';
import pluginId from './pluginId';

export default strapi => {
  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: 'something',
    icon: 'cog',
    id: pluginId,
    initializer: Initializer,
    injectedComponents: [],
    isReady: false,
    leftMenuLinks: [],
    leftMenuSections: [],
    mainComponent: App,
    name: 'pluginA',
    preventComponentRendering: false,
    trads: {},
  };

  // Register a field during the plugin load
  strapi.registerField({ type: 'json', Component: Json });

  const fields = [{ type: 'timestamp', Component: Json }];

  for (let i in fields) {
    strapi.registerField(fields[i]);
  }

  return strapi.registerPlugin(plugin);
};
