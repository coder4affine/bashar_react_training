/* eslint-disable react/no-unused-state */

import React from 'react';
import PropTypes from 'prop-types';
import CourseForm from './courseForm';

const createCourse = ({ authors, onSubmit, course }) => (
  <div>
    <h1>Create Course</h1>
    {authors && <CourseForm initialValues={course} authors={authors} onSubmit={onSubmit} />}
  </div>
);

createCourse.propTypes = {
  authors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

export default createCourse;
