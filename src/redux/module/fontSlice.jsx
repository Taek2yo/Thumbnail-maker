import { createSlice } from '@reduxjs/toolkit';

const fontSlice = createSlice({
	name: 'font',
	initialState: {
		titleFont: '',
		subTitleFont: '',
		categoryFont: '',
	},
	reducers: {
		setFont: (state, action) => {
			const { font, target } = action.payload;
			return {
				...state,
				[`${target}Font`]: font,
			};
		},
	},
});

export const { setFont } = fontSlice.actions;
export const selectTitleFont = (state) => state.fontSlice.titleFont;
export const selectSubTitleFont = (state) => state.fontSlice.subTitleFont;
export const selectCategoryFont = (state) => state.fontSlice.categoryFont;

export default fontSlice.reducer;
