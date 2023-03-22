import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		turin: {},
		rome: {},
		london: {}
	},
	reducers: {
		set: (state, action) => {
			state.turin = action.payload.turin;
			state.rome = action.payload.rome;
			state.london = action.payload.london;
		}
	}
});

export const { set } = weatherSlice.actions;

export default weatherSlice.reducer;
