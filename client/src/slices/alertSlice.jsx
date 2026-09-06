import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
	name: 'alert',
	initialState: [],
	reducers: {
		addAlert: (state, action) => {
			state.push(action.payload);
		},
		removeAlert: (state, action) => {
			return state.filter((a) => a.id !== action.payload);
		},
	},
});

export const { addAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
