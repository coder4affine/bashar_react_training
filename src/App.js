import React, { PureComponent } from 'react';
// import PropTypes from "prop-types";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import routeDetails from './utils/routeDetails';
import Route from './route';
import ThemeContext from './context/themeContext';
import './App.css';

class App extends PureComponent {
  state = {};

  render() {
    return (
      <Router>
        <ThemeContext>
          <>
            <Header routes={routeDetails} />
            <Route />
          </>
        </ThemeContext>
      </Router>
    );
  }
}

export default App;
