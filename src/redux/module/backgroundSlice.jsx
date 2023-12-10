import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	gradient: '',
	solid: '',
	imageUrl: '',
};

const backgroundSlice = createSlice({
	name: 'backgroundSlice',
	initialState,
	reducers: {
		setGradientRandom: (state, action) => ({
			...state,
			gradient: action.payload,
		}),
		setSolidRandom: (state, action) => ({
			...state,
			solid: action.payload,
		}),
		setBackgroundImg: (state, action) => ({
			...state,
			imageUrl: action.payload,
		}),
	},
});

export const { setGradientRandom, setSolidRandom, setBackgroundImg } =
	backgroundSlice.actions;
export const getGradientRandom = (state) => state.backgroundSlice.gradient;
export const getSolidRandom = (state) => state.backgroundSlice.solid;
export const getImageUrl = (state) => state.backgroundSlice.imageUrl;

export default backgroundSlice.reducer;
