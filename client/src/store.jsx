import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';
import authReducer from './slices/authSlice';
import portfolioReducer from './slices/portfolioSlice';
import resumeReducer from './slices/resumeSlice';

const store = configureStore({
	reducer: {
		alert: alertReducer,
		auth: authReducer,
		portfolio: portfolioReducer,
		resume: resumeReducer,
	},
});

export default store;
