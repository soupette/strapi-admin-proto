import App from './containers/App';
import Initializer from './containers/Initializer';
import pluginId from './pluginId';

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

export default plugin;
