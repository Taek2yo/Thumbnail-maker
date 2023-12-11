import { createSlice } from '@reduxjs/toolkit';
import DefaultImage from '../../assets/img/default.webp';

const initialState = {
	gradient: '',
	solid: '',
	imageUrl: DefaultImage,
	countIdx: -1,
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
		setCountIdx: (state, action) => ({
			...state,
			countIdx: action.payload,
		}),
		reset: () => initialState,
	},
});

export const {
	setGradientRandom,
	setSolidRandom,
	setBackgroundImg,
	setCountIdx,
	reset,
} = backgroundSlice.actions;

export const getGradientRandom = (state) => state.backgroundSlice.gradient;
export const getSolidRandom = (state) => state.backgroundSlice.solid;
export const getImageUrl = (state) => state.backgroundSlice.imageUrl;
export const getIdx = (state) => state.backgroundSlice.countIdx;

export default backgroundSlice.reducer;
