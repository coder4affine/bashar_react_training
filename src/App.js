import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Todo from "./screens/Todo";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
