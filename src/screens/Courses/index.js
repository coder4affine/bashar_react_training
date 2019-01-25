import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './courseTable';
import ErrorBoundary from '../../components/ErrorBoundary';

export default class index extends Component {
  state = {
    courses: [],
    authors: [],
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
  };

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

  createCourse = () => {
    this.props.history.push({
      pathname: 'createCourse',
      state: {
        authors: this.state.authors,
      },
    });
  };

  deleteCourse = async id => {
    try {
      await fetch(`http://localhost:3004/courses/${id}`, {
        method: 'DELETE',
      });
      const { courses } = this.state;
      this.setState({
        courses: courses.filter(x => x.id !== id),
      });
    } catch (error) {
      alert(error);
    }
  };

  editCourse = course => {
    this.props.history.push({
      pathname: 'createCourse',
      state: {
        authors: this.state.authors,
        course,
      },
    });
  };

  render() {
    const { courses, authors } = this.state;
    return (
      <div>
        <input type="button" value="Create Course" onClick={this.createCourse} />
        <ErrorBoundary>
          <Table
            courses={courses}
            authors={authors}
            deleteCourse={this.deleteCourse}
            editCourse={this.editCourse}
          />
        </ErrorBoundary>
      </div>
    );
  }
}
