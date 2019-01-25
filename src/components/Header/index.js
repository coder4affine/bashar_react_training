import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context/themeContext';

const index = ({ routes }) => (
  <nav>
    <ul>
      {routes.map(route => {
        if (route.label) {
          return (
            <li key={route.id}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          );
        }
        return null;
      })}
      <Consumer>
        {value => (
          <div>
            <input type="button" value="Change Theme" onClick={value.changeTheme} />
          </div>
        )}
      </Consumer>
    </ul>
  </nav>
);
index.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default index;
