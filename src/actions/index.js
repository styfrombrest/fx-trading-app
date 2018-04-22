import {
  LOAD_DATA_START,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './../consts';
import fetchDataApi from './../api/fetchData';

export const loadData = () => async dispatch => {
  dispatch({
    type: LOAD_DATA_START,
  });

  try {
    const data = await fetchDataApi();
    dispatch({
      type: LOAD_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_DATA_FAILURE,
      payload: err,
    });
  }
};
