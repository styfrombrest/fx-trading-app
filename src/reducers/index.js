import {
  LOADING_DATA_START,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_FAILURE,
} from './../consts';

const initialState = {
  data: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_DATA_START:
      return state;
    case LOADING_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
      };
    case LOADING_DATA_FAILURE:
      return { ...state, error: payload, data: null };

    default:
      return state;
  }
};
