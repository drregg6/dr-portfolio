import { userLoaded, loginSuccess, clearAuth } from '../slices/authSlice';
import { setAuthToken } from '../utils/helpers';
import axios from 'axios';
import { setAlert } from './alert';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('/api/auth');
		dispatch(userLoaded(res.data));
	} catch (err) {
		dispatch(clearAuth());
	}
};

export const login = (email, password) => async (dispatch) => {
	const config = { headers: { 'Content-type': 'application/json' } };
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('/api/auth', body, config);
		dispatch(loginSuccess(res.data));
		dispatch(loadUser());
		dispatch(setAlert('Admin login. Welcome!', 'success'));
	} catch (error) {
		const errors = error.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch(clearAuth());
	}
};

export const logout = () => (dispatch) => {
	dispatch(setAlert('Successfully logged out, bye!', 'danger'));
	dispatch(clearAuth());
};
