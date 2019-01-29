import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../../constants/types';

const wait = ms => new Promise(res => setTimeout(res, ms));

const api = async url => {
  await wait(1000);
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

function* getAuthors() {
  try {
    const res = yield call(api, 'http://localhost:3004/authors');

    yield put({ type: types.SUCCESS_AUTHORS, payload: res });
  } catch (error) {
    yield put({ type: types.ERROR_AUTHORS, payload: error });
  }
}

export default function* init() {
  yield takeLatest(types.REQUEST_AUTHORS, getAuthors);
}
