import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import DefaultImage from '../../assets/img/default.webp';

interface BackgroundState {
	gradient: string;
	solid: string;
	imageUrl: string;
	countIdx: number;
}

const initialState: BackgroundState = {
	gradient: '',
	solid: '',
	imageUrl: DefaultImage,
	countIdx: -1,
};

const backgroundSlice = createSlice({
	name: 'backgroundSlice',
	initialState,
	reducers: {
		setGradientRandom: (state, action: PayloadAction<string>) => {
			state.gradient = action.payload;
		},
		setSolidRandom: (state, action: PayloadAction<string>) => {
			state.solid = action.payload;
		},
		setBackgroundImg: (state, action: PayloadAction<string>) => {
			state.imageUrl = action.payload;
		},
		setCountIdx: (state, action: PayloadAction<number>) => {
			state.countIdx = action.payload;
		},
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

export const getGradientRandom = (state: {
	backgroundSlice: BackgroundState;
}) => state.backgroundSlice.gradient;
export const getSolidRandom = (state: { backgroundSlice: BackgroundState }) =>
	state.backgroundSlice.solid;
export const getImageUrl = (state: { backgroundSlice: BackgroundState }) =>
	state.backgroundSlice.imageUrl;
export const getIdx = (state: { backgroundSlice: BackgroundState }) =>
	state.backgroundSlice.countIdx;

export default backgroundSlice.reducer;
