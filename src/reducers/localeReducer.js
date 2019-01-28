const initialState = 'en';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LANGUAGE':
      return payload;

    default:
      return state;
  }
};
