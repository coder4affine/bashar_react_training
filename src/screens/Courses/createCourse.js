/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseForm from './courseForm';

class createCourse extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    form: { id: '', title: '', watchHref: '', length: '', category: '', authorId: '' },
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      location: { state },
    } = nextProps;

    if (state) {
      return {
        form: state.course,
      };
    }
    return prevState;
  }

  onSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.id) {
        await fetch(`http://localhost:3004/courses/${values.id}`, {
          method: 'PUT',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      } else {
        await fetch('http://localhost:3004/courses', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      }
      this.props.history.push('courses');
    } catch (error) {
      alert(error);
    } finally {
      setSubmitting(false);
    }
  };

  render() {
    const { form } = this.state;
    const {
      location: { state },
    } = this.props;
    return (
      <div>
        <h1>Create Course</h1>

        {state && state.authors && (
          <CourseForm initialValues={form} authors={state.authors} onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

createCourse.propTypes = {};

export default createCourse;
