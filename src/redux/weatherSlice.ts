import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
	name: 'weather',
	initialState: {},
	reducers: {
		set: (state, action) => {
			state = action.payload;
		}
	}
});
