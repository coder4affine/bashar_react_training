import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const index = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo/">Todo</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </nav>
);
index.propTypes = {};

export default index;
