/* eslint-disable  react/no-unused-state */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const { Provider, Consumer } = createContext();

export default class themeContext extends Component {
  state = {
    theme: 'light',
    changeTheme: () => {
      this.setState(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' }));
    },
  };

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
