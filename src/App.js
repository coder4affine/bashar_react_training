import React, { PureComponent } from 'react';
// import PropTypes from "prop-types";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Route from './route';
import './App.css';

class App extends PureComponent {
  state = {};

  render() {
    return (
      <Router>
        <>
          <Header />
          <Route />
        </>
      </Router>
    );
  }
}

export default App;
