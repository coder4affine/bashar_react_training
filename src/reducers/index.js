import { combineReducers } from 'redux';
import locale from './localeReducer';
import courses from '../screens/Courses/coursesReducer';
import authors from '../screens/Courses/authorsReducer';

export default combineReducers({
  locale,
  courses,
  authors,
});
