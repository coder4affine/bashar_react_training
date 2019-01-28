const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REQUEST_COURSES':
      return { ...state, loading: true };

    case 'SUCCESS_COURSES':
      return { ...state, loading: false, data: payload };

    case 'ERROR_COURSES':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
