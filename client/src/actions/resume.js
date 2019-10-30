import {
  GET_RESUME,
  CREATE_RESUME
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
      type: CREATE_RESUME,
      payload: res.data
    });
    dispatch(setAlert((!edit ? 'Resume created!' : 'Resume edited!')));

    history.push('/');
  } catch (err) {
    console.error(err);
  }
} 