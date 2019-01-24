import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {
  state = {
    hasError: false,
  };

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Oops! Something goes wrong</h1>;
    }
    return <div>{this.props.children}</div>;
  }
}
