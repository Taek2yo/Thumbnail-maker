import { createSlice } from '@reduxjs/toolkit';

const compositionSlice = createSlice({
	name: 'composition',
	initialState: -1,
	reducers: {
		updateComposition: (state, action) => action.payload,
	},
});

export const { updateComposition } = compositionSlice.actions;
export const composition = (state) => state.compositionSlice;

export default compositionSlice.reducer;
