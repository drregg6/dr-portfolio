import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';
import resumeReducer from '../features/resume/resumeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    portfolios: portfolioReducer,
    resumes: resumeReducer
  },
});
