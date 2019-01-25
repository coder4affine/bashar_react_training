import React, { Component } from 'react';
import PropTypes from 'prop-types';

class courseTable extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
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
    const { courses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <a href={course.watchHref}>Link</a>
                </td>
                <td>{this.getAuthorDetail(course.authorId)}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

courseTable.propTypes = {};

export default courseTable;
