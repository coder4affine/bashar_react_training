import * as types from '../../constants/types';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_COURSES || types.REQUEST_SAVE_COURSES || types.REQUEST_DELETE_COURSES:
      return { ...state, loading: true };

    case types.SUCCESS_COURSES:
      return { ...state, loading: false, data: payload };

    case types.ERROR_COURSES || types.ERROR_SAVE_COURSES || types.ERROR_DELETE_COURSES:
      return { ...state, loading: false, error: payload };

    case types.SUCCESS_SAVE_COURSES:
      return { ...state, loading: false, data: [payload, ...state.data] };

    case types.SUCCESS_EDIT_COURSES: {
      const index = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), payload, ...state.data.slice(index + 1)],
      };
    }

    case types.SUCCESS_DELETE_COURSES: {
      const index = state.data.findIndex(x => x.id === payload);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      };
    }

    default:
      return state;
  }
};
