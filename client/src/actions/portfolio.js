import {
  GET_PORTFOLIOS,
  UPDATE_PORTFOLIO
} from './types';
import { setAlert } from './alert';
import axios from 'axios';

// Get all portfolios
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

// Create / edit a portfolio
export const createPortfolio = (newPortfolio) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    const res = await axios.get(`/api/portfolios`, newPortfolio, config);
    dispatch({
      type: UPDATE_PORTFOLIO,
      payload: res.data
    });
    dispatch(setAlert('Portfolio Created!', 'success'));
  } catch (error) {
    console.error(error);
  }
}