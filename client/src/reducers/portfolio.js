import {
  GET_PORTFOLIOS,
  UPDATE_PORTFOLIO
} from '../actions/types';

const initialState = {
  portfolios: [],
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_PORTFOLIOS:
      return {
        ...state,
        portfolios: [...payload],
        loading: false
      };
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        portfolios: [...state.portfolios, ...payload],
        loading: false
      }
    default:
      return state;
  }
}