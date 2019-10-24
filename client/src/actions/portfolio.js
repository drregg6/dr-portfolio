import { GET_PORTFOLIOS } from './types';
import axios from 'axios';

export const fetchPortfolios = () => async dispatch => {
  try {
    const res = await axios.get(`/api/portfolios`);
    dispatch({
      type: GET_PORTFOLIOS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
}