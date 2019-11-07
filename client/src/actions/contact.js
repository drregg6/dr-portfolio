import axios from 'axios';
import { setAlert } from './alert';

export const sendEmail = formData => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    console.log('from actions ' + formData);
    const res = await axios.post('/api/contact', formData, config);
    console.log(res);
    dispatch(setAlert('Email sent!', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg), 'danger'));
    }
  }
}