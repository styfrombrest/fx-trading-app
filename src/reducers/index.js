import {
  LOAD_DATA_START,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './../consts';

const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DATA_START:
      return { ...state, data: [] };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case LOAD_DATA_FAILURE:
      return { ...state, data: null };

    default:
      return state;
  }
};
