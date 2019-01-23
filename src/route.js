import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Todo from './screens/Todo';
import Home from './screens/Home';
import About from './screens/About';

export default class route extends Component {
  state = {};

  static propTypes = {};

  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/todo/" component={Todo} />
      </>
    );
  }
}
