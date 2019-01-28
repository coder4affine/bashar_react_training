import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../components/Tooltip';

class courseTable extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    editCourse: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
  };

  getAuthorDetail = id => {
    const { authors } = this.props;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  render() {
    const { courses, editCourse, deleteCourse } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <Tooltip text="Click on Link">
                    <a href={course.watchHref}>Link</a>
                  </Tooltip>
                </td>
                <td>{this.getAuthorDetail(course.authorId)}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
                <td>
                  <button type="button" onClick={() => editCourse(course)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteCourse(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default courseTable;
