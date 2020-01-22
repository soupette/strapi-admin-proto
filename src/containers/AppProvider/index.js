/**
 *
 * AppProvider
 *
 */
import React from "react";
import PropTypes from "prop-types";
import AppContext from "../../contexts/AppContext";

const AppProvider = ({ children, ...rest }) => {
  return <AppContext.Provider value={rest}>{children}</AppContext.Provider>;
};

AppProvider.defaultProps = {};
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
