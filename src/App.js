import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends PureComponent {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps.test);

  //   return {
  //     ...prevState,
  //     xyz: nextProps.test
  //   };
  // }

  static propTypes = {
    test: PropTypes.string
  };

  static defaultProps = {
    test: "Hello from default Value"
  };

  state = {
    xyz: "abc",
    abc: [1]
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener("onCopy", this.onCopy);
  }

  onCopy = () => {};

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount = () => {
    document.removeEventListener("onCopy", this.onCopy);
  };

  changeState = () => {
    this.setState({ abc: [2] });
  };

  render() {
    console.log("render");
    console.log(this.state.abc[0]);
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.abc[0]}</p>
          <p>{this.props.test}</p>

          <input
            type="button"
            value="Change State"
            onClick={this.changeState}
          />
        </header>
      </div>
    );
  }
}

export default App;
