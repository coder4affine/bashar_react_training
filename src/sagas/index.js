import { all } from 'redux-saga/effects';
import author from './authorSaga';

export default function* rootSaga() {
  yield all([author()]);
}
