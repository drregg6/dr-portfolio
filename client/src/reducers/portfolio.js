import {
  GET_PORTFOLIOS,
  GET_PORTFOLIO,
  GET_USER_PORTFOLIOS,
  UPDATE_PORTFOLIO,
  CLEAR_PORTFOLIO
} from '../actions/types';

const initialState = {
  portfolios: [],
  editPort: {},
  userPortfolios: [],
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
    case GET_PORTFOLIO:
      return {
        ...state,
        editPort: payload,
        loading: false
      }
    case GET_USER_PORTFOLIOS:
      return {
        ...state,
        userPortfolios: [...payload],
        loading: false
      };
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        portfolios: [...payload],
        loading: false
      };
    case CLEAR_PORTFOLIO:
      return {
        ...state,
        editPort: {},
        loading: false
      };
    default:
      return state;
  }
}