/**
 *
 * App
 *
 */
import React, { useReducer } from "react";
import { Switch, Route } from "react-router-dom";
// import PropTypes from 'prop-types';
import Admin from "../Admin";
import AuthPage from "../AuthPage";
import PrivateRoute from "../PrivateRoute";
import reducer, { initialState } from "./reducer";
import init from "./init";

function App() {
  const [reducerState, dispatch] = useReducer(reducer, initialState, init);

  return (
    <Switch>
      <Route path='/auth/:authType' component={AuthPage} />
      <PrivateRoute path='/' component={Admin} />
    </Switch>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
