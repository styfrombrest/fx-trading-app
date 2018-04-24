import {
  LOAD_INIT_DATA_START,
  LOAD_INIT_DATA_SUCCESS,
  LOAD_INIT_DATA_FAILURE,
} from './../consts';

const initialState = {
  data: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_INIT_DATA_START:
      return { ...state, data: [] };
    case LOAD_INIT_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case LOAD_INIT_DATA_FAILURE:
      return { ...state, error: payload, data: null };

    default:
      return state;
  }
};
