import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FontState {
	title: {
		font: string;
		color: string;
	};
	subtitle: {
		font: string;
		color: string;
	};
	category: {
		font: string;
		color: string;
	};
}

const initialState: FontState = {
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
		setFont: (
			state,
			action: PayloadAction<{ font: string; target: keyof FontState }>
		) => {
			const { font, target } = action.payload;
			state[target].font = font;
		},
		setColor: (
			state,
			action: PayloadAction<{ target: keyof FontState; color: string }>
		) => {
			const { target, color } = action.payload;
			state[target].color = color;
		},
		reset: () => initialState,
	},
});

export const { setFont, setColor, reset } = fontSlice.actions;

export const selectTitleFont = (state: { fontSlice: FontState }) =>
	state.fontSlice.title.font;
export const selectSubTitleFont = (state: { fontSlice: FontState }) =>
	state.fontSlice.subtitle.font;
export const selectCategoryFont = (state: { fontSlice: FontState }) =>
	state.fontSlice.category.font;

export const titleColor = (state: { fontSlice: FontState }) =>
	state.fontSlice.title.color;
export const subTitleColor = (state: { fontSlice: FontState }) =>
	state.fontSlice.subtitle.color;
export const categoryColor = (state: { fontSlice: FontState }) =>
	state.fontSlice.category.color;

export default fontSlice.reducer;
