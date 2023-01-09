import { combineReducers } from 'redux';

import portfolio from './portfolio';
import resume from './resume';
import alert from './alert';
import auth from './auth';

const portfolioReducer = portfolio.portfolioReducer;
const resumeReducer = resume.resumeReducer;
const alertReducer = alert.alertReducer;
const authReducer = auth.authReducer;

export default combineReducers({
  portfolioReducer,
  resumeReducer,
  alertReducer,
  authReducer
});