/**
 *
 * App
 *
 */
import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Admin from '../Admin';
import AppProvider from '../AppProvider';
import AuthPage from '../AuthPage';
import PrivateRoute from '../PrivateRoute';
import reducer, { initialState } from './reducer';
import init from './init';

function App({ appPlugins }) {
  const [reducerState, dispatch] = useReducer(reducer, { initialState, appPlugins }, init);
  const { plugins } = reducerState.toJS();

  const updatePlugin = (keys, value) => {
    dispatch({
      type: 'UPDATE_PLUGIN',
      keys,
      value,
    });
  };

  return (
    <AppProvider plugins={plugins} updatePlugin={updatePlugin}>
      <Switch>
        <Route path="/auth/:authType" component={AuthPage} />
        <PrivateRoute path="/" component={Admin} />
      </Switch>
    </AppProvider>
  );
}

App.defaultProps = {};
App.propTypes = {
  appPlugins: PropTypes.object,
};

export default App;
