import {
  GET_RESUME,
  UPDATE_RESUME,
  DELETE_EXPERIENCE,
  DELETE_EMPLOYMENT,
  DELETE_EDUCATION
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
    case DELETE_EXPERIENCE:
      return {
        ...state,
        resume: state.resume.experience.filter(project => project.id !== payload),
        loading: false
      }
    case DELETE_EMPLOYMENT:
      return {
        ...state,
        resume: state.resume.employment.filter(job => job.id !== payload),
        loading: false
      }
    case DELETE_EDUCATION:
      return {
        ...state,
        resume: state.resume.education.filter(school => school.id !== payload),
        loading: false
      }
    default:
      return state;
  }
}