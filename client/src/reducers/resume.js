import {
  GET_RESUME,
  CREATE_RESUME
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
    case CREATE_RESUME:
      return {
        ...state,
        resume: payload,
        loading: false
      };
    default:
      return state;
  }
}