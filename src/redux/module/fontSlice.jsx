import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: {
		font: '',
		color: '#000000',
	},
	subtitle: {
		font: '',
		color: '#000000',
	},
	category: {
		font: '',
		color: '#000000',
	},
};

const fontSlice = createSlice({
	name: 'font',
	initialState,
	reducers: {
		setFont: (state, action) => {
			const { font, target } = action.payload;
			return {
				...state,
				[target]: {
					...state[target],
					font,
				},
			};
		},
		setColor: (state, action) => {
			const { target, color } = action.payload;
			return {
				...state,
				[target]: {
					...state[target],
					color,
				},
			};
		},
		reset: () => initialState,
	},
});

export const { setFont, setColor, reset } = fontSlice.actions;

export const selectTitleFont = (state) => state.fontSlice.title.font;
export const selectSubTitleFont = (state) => state.fontSlice.subtitle.font;
export const selectCategoryFont = (state) => state.fontSlice.category.font;

export const titleColor = (state) => state.fontSlice.title.color;
export const subTitleColor = (state) => state.fontSlice.subtitle.color;
export const categoryColor = (state) => state.fontSlice.category.color;

export default fontSlice.reducer;
