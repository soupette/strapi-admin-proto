/**
 *
 * App
 *
 */
import React, { useReducer, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Strapi from '../../utils/Strapi';
import Admin from '../Admin';
import AppProvider from '../AppProvider';
import AuthPage from '../AuthPage';
import PrivateRoute from '../PrivateRoute';
import StrapiProvider from '../StrapiProvider';
import reducer, { initialState } from './reducer';
import init from './init';

function App({ appPlugins }) {
  // Initialize strapi api
  const strapi = useRef(new Strapi());

  const [reducerState, dispatch] = useReducer(
    reducer,
    {
      initialState,
      appPlugins,
      // Pass it to the init function if you want to use directly the plugin load
      strapi: strapi.current,
    },
    init,
  );
  const { plugins } = reducerState.toJS();

  const updatePlugin = (keys, value) => {
    dispatch({
      type: 'UPDATE_PLUGIN',
      keys,
      value,
    });
  };

  // Also you can use it with a hook

  return (
    <AppProvider plugins={plugins} updatePlugin={updatePlugin}>
      <StrapiProvider strapi={strapi.current}>
        <Switch>
          <Route path="/auth/:authType" component={AuthPage} />
          <PrivateRoute path="/" component={Admin} />
        </Switch>
      </StrapiProvider>
    </AppProvider>
  );
}

App.defaultProps = {};
App.propTypes = {
  appPlugins: PropTypes.object,
};

export default App;
