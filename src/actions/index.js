import {
  LOAD_INIT_DATA_START,
  LOAD_INIT_DATA_SUCCESS,
  LOAD_INIT_DATA_FAILURE,
} from './../consts';
import fetchDataApi from './../api/fetchData';

export const loadData = () => async dispatch => {
  dispatch({
    type: LOAD_INIT_DATA_START,
  });

  try {
    const data = await fetchDataApi();
    const transformedData = {};
    data.map(
      item => (transformedData[item.pair] = { buy: item.buy, sell: item.sell })
    );

    dispatch({
      type: LOAD_INIT_DATA_SUCCESS,
      payload: transformedData,
    });
  } catch (err) {
    dispatch({
      type: LOAD_INIT_DATA_FAILURE,
      payload: err,
    });
  }
};
