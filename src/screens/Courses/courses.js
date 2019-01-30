import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from './courseTable';
import ErrorBoundary from '../../components/ErrorBoundary';
import Modal from '../../components/Modal';
import CreateCourse from './createCourse';

export default class index extends Component {
  static propTypes = {
    requestAuthors: PropTypes.func.isRequired,
    authors: PropTypes.object.isRequired,
    requestCourses: PropTypes.func.isRequired,
    courses: PropTypes.object.isRequired,
    requestSaveCourses: PropTypes.func.isRequired,
    requestDeleteCourse: PropTypes.func.isRequired,
    testData: PropTypes.string.isRequired,
  };

  state = {
    open: false,
    form: { id: '', title: '', watchHref: '', length: '', category: '', authorId: '' },
  };

  constructor(props) {
    super(props);
    props.requestCourses();
    props.requestAuthors();
  }

  createCourse = () => {
    this.setState({ open: true });
  };

  deleteCourse = async id => {
    this.props.requestDeleteCourse(id);
  };

  editCourse = course => {
    this.setState({ form: course, open: true });
  };

  onSubmit = () => {};

  render() {
    const { authors, courses, testData } = this.props;

    if (authors.loading || courses.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.StrictMode>
        <div>
          <h1>{testData}</h1>
          <input type="button" value="Create Course" onClick={this.createCourse} />
          <ErrorBoundary>
            <Table
              courses={courses.data}
              authors={authors.data}
              deleteCourse={this.deleteCourse}
              editCourse={this.editCourse}
            />
          </ErrorBoundary>
          <Modal open={this.state.open} closeModal={() => this.setState({ open: false })}>
            <CreateCourse
              course={this.state.form}
              authors={authors.data}
              onSubmit={values => {
                this.props.requestSaveCourses(values);
                this.setState({ open: false });
              }}
            />
          </Modal>
        </div>
      </React.StrictMode>
    );
  }
}
