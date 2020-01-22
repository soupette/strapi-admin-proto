/**
*
* Admin
*
*/
import React, { useReducer } from 'react';
// import PropTypes from 'prop-types';
import reducer, { initialState } from './reducer';
import init from './init';

function Admin() {
  const [reducerState, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      Admin
    </div>
  );
}

Admin.defaultProps = {};
Admin.propTypes = {};

export default Admin;