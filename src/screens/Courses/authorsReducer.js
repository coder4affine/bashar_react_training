import * as types from '../../constants/types';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_AUTHORS:
      return { ...state, loading: true };

    case types.SUCCESS_AUTHORS:
      return { ...state, loading: false, data: payload };

    case types.ERROR_AUTHORS:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
