import { all } from 'redux-saga/effects';
import author from '../screens/Courses/authorSaga';
import courses from '../screens/Courses/coursesSaga';

export default function* rootSaga() {
  yield all([author(), courses()]);
}
