import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	imageUrl: '',
};

const backgroundSlice = createSlice({
	name: 'backgroundSlice',
	initialState,
	reducers: {
		setBackgroundImg: (state, action) => ({
			...state,
			imageUrl: action.payload,
		}),
	},
});

export const { setBackgroundImg } = backgroundSlice.actions;
export const getImageUrl = (state) => state.backgroundSlice.imageUrl;

export default backgroundSlice.reducer;
