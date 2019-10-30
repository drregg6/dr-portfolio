import {
  GET_RESUME,
  UPDATE_RESUME
} from '../actions/types';

const initialState = {
  resume: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_RESUME:
      return {
        ...state,
        resume: payload,
        loading: false
      };
    case UPDATE_RESUME:
      return {
        ...state,
        resume: payload,
        loading: false
      };
    default:
      return state;
  }
}