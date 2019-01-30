import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default WrappedComponent => {
  class testHOC extends Component {
    state = {};

    constructor(props) {
      super(props);
      console.log('call constructor');
    }

    testMethod = () => {
      console.log('testMethod');
    };

    render() {
      const { title } = this.props;
      return (
        <div>
          {title && <h1>{title}</h1>}
          <WrappedComponent
            testMethod={this.testMethod}
            testData="Hello How are  you?"
            {...this.props}
          />
        </div>
      );
    }
  }

  return testHOC;
};
