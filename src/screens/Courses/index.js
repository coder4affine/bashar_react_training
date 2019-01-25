import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from '../../context/themeContext';
import Table from './courseTable';
import ErrorBoundary from '../../components/ErrorBoundary';

export default class index extends Component {
  state = {
    courses: [],
    authors: [],
  };

  static propTypes = {};

  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    try {
      const res = await Promise.all([
        fetch('http://localhost:3004/courses'),
        fetch('http://localhost:3004/authors'),
      ]);

      const courses = await res[0].json();
      const authors = await res[1].json();

      this.setState({ courses, authors });
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    const { courses, authors } = this.state;
    return (
      <div>
        <Consumer>{value => <span>{value.theme}</span>}</Consumer> <h1>Courses</h1>
        <ErrorBoundary>
          <Table courses={courses} authors={authors} />
        </ErrorBoundary>
      </div>
    );
  }
}
