import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const index = ({ routes }) => (
  <nav>
    <ul>
      {routes.map(route => (
        <li key={route.id}>
          <Link to={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
index.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default index;
