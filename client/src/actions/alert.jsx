import { addAlert, removeAlert } from '../slices/alertSlice';

export const setAlert =
	(msg, alertType, timeout = 5000) =>
	(dispatch) => {
		const id = crypto.randomUUID();
		dispatch(addAlert({ msg, alertType, id }));
		setTimeout(() => dispatch(removeAlert(id)), timeout);
	};
