import { connect } from 'react-redux';
import * as types from '../../constants/types';
import courses from './courses';
import test from '../../HOC/testHOC';

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestAuthors: () => dispatch({ type: types.REQUEST_AUTHORS }),
    requestCourses: () => dispatch({ type: types.REQUEST_COURSES }),
    requestSaveCourses: payload => dispatch({ type: types.REQUEST_SAVE_COURSES, payload }),
    requestDeleteCourse: payload => dispatch({ type: types.REQUEST_DELETE_COURSES, payload }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(test(courses));
