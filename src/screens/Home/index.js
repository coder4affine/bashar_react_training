import React from 'react';
import { Consumer } from '../../context/themeContext';
// import PropTypes from 'prop-types';

const index = () => (
  <div>
    <h1>Home Page</h1>
    <Consumer>
      {value => (
        <div>
          <span>{value.theme}</span>
          <input type="button" value="Change Theme" onClick={value.changeTheme} />
        </div>
      )}
    </Consumer>
  </div>
);

index.propTypes = {};

export default index;
