import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	gradient: '',
	solid: '',
	imageUrl:
		'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
