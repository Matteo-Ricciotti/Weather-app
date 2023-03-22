import { configureStore } from '@reduxjs/toolkit';
import logging from './logging';
import weatherReducer from './weatherSlice';

type UnkProperties = {
	[key: string]: any;
};

export interface State {
	weather: {
		turin: UnkProperties;
		rome: UnkProperties;
		london: UnkProperties;
	};
}

export default configureStore({
	reducer: {
		weather: weatherReducer
	},
	middleware: [logging]
});
