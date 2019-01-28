import { takeEvery, call, put } from 'redux-saga/effects';

const api = async url => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

function* getAuthors() {
  try {
    const res = yield call(api, 'http://localhost:3004/authors');
    yield put({ type: 'SUCCESS_AUTHORS', payload: res });
  } catch (error) {
    yield put({ type: 'SUCCESS_AUTHORS', payload: error });
  }
}

export default function* init() {
  yield takeEvery('REQUEST_AUTHORS', getAuthors);
}
