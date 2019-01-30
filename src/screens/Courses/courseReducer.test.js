import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import coursesReducer, { initialState } from './coursesReducer';
import * as types from '../../constants/types';

configure({ adapter: new Adapter() });

describe('test course reducer', () => {
  it('description', () => {
    expect(coursesReducer(undefined, {})).toEqual(initialState);
  });

  it('description', () => {
    expect(coursesReducer(initialState, { type: types.REQUEST_COURSES })).toEqual({
      ...initialState,
      loading: true,
    });
  });
});
