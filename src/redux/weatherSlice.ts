import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		weather: {}
	},
	reducers: {
		set: (state, action) => {
			state.weather = action.payload;
		}
	}
});

export const { set } = weatherSlice.actions;

export default weatherSlice.reducer;
