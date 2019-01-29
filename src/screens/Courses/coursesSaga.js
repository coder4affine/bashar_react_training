import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects';
import * as types from '../../constants/types';

// const wait = ms => new Promise(res => setTimeout(res, ms));

const api = async (url, method = null, headers = null, body = null) => {
  let options = {};
  if (method) {
    options = { ...options, method };
  }
  if (headers) {
    options = {
      ...options,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    };
  }
  if (body) {
    options = { ...options, body };
  }
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

function* getCourses() {
  try {
    const res = yield call(api, 'http://localhost:3004/courses');

    yield put({ type: types.SUCCESS_COURSES, payload: res });
  } catch (error) {
    yield put({ type: types.ERROR_COURSES, payload: error });
  }
}

function* saveCourses({ payload }) {
  try {
    let url = 'http://localhost:3004/courses';
    let method = 'POST';
    if (payload.id) {
      url = `${url}/${payload.id}`;
      method = `PUT`;
    }
    const res = yield call(api, url, method, {}, JSON.stringify(payload));
    if (payload.id) {
      yield put({ type: types.SUCCESS_EDIT_COURSES, payload: res });
    } else {
      yield put({ type: types.SUCCESS_SAVE_COURSES, payload: res });
    }
  } catch (error) {
    yield put({ type: types.ERROR_SAVE_COURSES, payload: error });
  }
}

function* deleteCourses({ payload }) {
  try {
    yield call(api, `http://localhost:3004/courses/${payload}`, 'DELETE');

    yield put({ type: types.SUCCESS_DELETE_COURSES, payload });
  } catch (error) {
    yield put({ type: types.ERROR_DELETE_COURSES, payload: error });
  }
}

function* get() {
  yield takeEvery(types.REQUEST_COURSES, getCourses);
}

function* save() {
  yield takeLatest(types.REQUEST_SAVE_COURSES, saveCourses);
}

function* delCourse() {
  yield takeLatest(types.REQUEST_DELETE_COURSES, deleteCourses);
}

export default function* init() {
  yield all([get(), save(), delCourse()]);
}
