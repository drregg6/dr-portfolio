import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: localStorage.getItem('token'),
		user: null,
		isAuthenticated: false,
		loading: true,
	},
	reducers: {
		userLoaded: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
			state.loading = false;
		},
		loginSuccess: (state, action) => {
			localStorage.setItem('token', action.payload.token);
			state.token = action.payload.token;
			state.isAuthenticated = true;
			state.loading = false;
		},
		clearAuth: (state) => {
			localStorage.removeItem('token');
			state.token = null;
			state.user = null;
			state.isAuthenticated = false;
			state.loading = false;
		},
	},
});

export const { userLoaded, loginSuccess, clearAuth } = authSlice.actions;
export default authSlice.reducer;
