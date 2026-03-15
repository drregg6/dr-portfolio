// https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {};

const store = configureStore(rootReducer, initialState);

export default store;
