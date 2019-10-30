import {
  GET_RESUME,
  UPDATE_RESUME
} from './types';

import axios from 'axios';
import { setAlert } from './alert';

// Get the first resume
export const fetchResume = () => async dispatch => {
  try {
    const res = await axios.get('/api/resumes');
    dispatch({
      type: GET_RESUME,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
}

// Create or update a resume
export const createResume = (formData, history, edit=false) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/resumes', formData, config);
    dispatch({
      type: UPDATE_RESUME,
      payload: res.data
    });
    dispatch(setAlert((!edit ? 'Resume created!' : 'Resume edited!')));

    history.push('/');
  } catch (err) {
    console.error(err);
  }
}

// Create Employment
export const createEmployment = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put('/api/resumes/employment', formData, config);
    dispatch({
      type: UPDATE_RESUME,
      payload: res.data
    });

    dispatch(setAlert('Employment created!'));
    history.push('/');
  } catch (err) {
    console.error(err);
  }
}
// Delete Employment


// Create Education
export const createEducation = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put('/api/resumes/education', formData, config);
    dispatch({
      type: UPDATE_RESUME,
      payload: res.data
    });

    dispatch(setAlert('Education created!'));
    history.push('/');
  } catch (err) {
    console.error(err);
  }
}
// Delete Education


// Create Experience
export const createExperience = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put('/api/resumes/experience', formData, config);
    dispatch({
      type: UPDATE_RESUME,
      payload: res.data
    });

    dispatch(setAlert('Experience created!'));
    history.push('/');
  } catch (err) {
    console.error(err);
  }
}
// Delete Experience