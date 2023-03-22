import { configureStore } from '@reduxjs/toolkit';
import logging from './logging';
import weatherReducer from './weatherSlice';

export default configureStore({
	reducer: {
		weather: weatherReducer
	},
	middleware: [logging]
});
