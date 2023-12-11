import { createSlice } from '@reduxjs/toolkit';

const compositionSlice = createSlice({
	name: 'composition',
	initialState: 0,
	reducers: {
		updateComposition: (state, action) => action.payload,
		reset: () => 0,
	},
});

export const { updateComposition, reset } = compositionSlice.actions;
export const composition = (state) => state.compositionSlice;

export default compositionSlice.reducer;
