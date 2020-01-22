/**
 *
 * PrivateRoute
 *
 */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import auth from "../../utils/auth";

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  <Route
    path={path}
    render={props =>
      auth.getUser() !== null ? (
        <Component {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth/login",
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
