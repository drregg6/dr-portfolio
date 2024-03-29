import {
  GET_USERS,
  GET_PORTFOLIO,
  GET_PORTFOLIOS,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  CLEAR_PORTFOLIO
} from '../actions/types';

const initialState = {
  users: [],
  editPort: null,
  portfolios: [],
  loading: true
}

export default function portfolio(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_USERS:
      return {
        ...state,
        users: [...payload],
        loading: false
      };
    case GET_PORTFOLIO:
      return {
        ...state,
        editPort: payload,
        loading: false
      }
    case GET_PORTFOLIOS:
      return {
        ...state,
        portfolios: [...payload],
        loading: false
      };
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        portfolios: [...payload],
        loading: false
      };
    case DELETE_PORTFOLIO:
      return {
        ...state,
        portfolios: state.portfolios.filter(project => project._id !== payload),
        loading: false
      }
    case CLEAR_PORTFOLIO:
      return {
        ...state,
        editPort: null,
        loading: false
      };
    default:
      return state;
  }
}