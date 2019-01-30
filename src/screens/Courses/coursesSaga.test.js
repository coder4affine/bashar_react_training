// import { put, call } from 'redux-saga/effects';
// import { cloneableGenerator } from 'redux-saga/utils';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { deleteCourses, api } from './coursesSaga';
// import * as types from '../../constants/types';

// describe('test delete course', () => {
//   it('delete course', () => {
//     const generator = cloneableGenerator(deleteCourses);
//     expect(generator.next().value).toEqual(
//       call(api, `http://localhost:3004/courses/${payload}`, 'DELETE'),
//     );
//     expect(generator.next().value).toEqual(
//      put({ type: types.SUCCESS_DELETE_COURSES, payload }),
//     );
//   });
// });
