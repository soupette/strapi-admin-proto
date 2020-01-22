/**
 *
 * Menu
 *
 */
import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
// import PropTypes from 'prop-types';

function Menu() {
  const { plugins } = useAppContext();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        {Object.keys(plugins).map(plugin => {
          const { id, name } = plugins[plugin];

          return (
            <Link to={`/plugins/${id}`} key={id}>
              {name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

Menu.defaultProps = {};
Menu.propTypes = {};

export default Menu;
