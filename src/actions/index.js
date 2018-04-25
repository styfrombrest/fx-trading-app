import {
  LOADING_DATA_START,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_FAILURE,
} from './../consts';
import fetchDataApi from './../api/fetchData';

export const loadData = () => async dispatch => {
  dispatch({
    type: LOADING_DATA_START,
  });

  try {
    const data = await fetchDataApi();
    const transformedData = {};
    data.map(
      item => (transformedData[item.pair] = { buy: item.buy, sell: item.sell })
    );

    dispatch({
      type: LOADING_DATA_SUCCESS,
      payload: transformedData,
    });
  } catch (err) {
    dispatch({
      type: LOADING_DATA_FAILURE,
      payload: err,
    });
  }
};
