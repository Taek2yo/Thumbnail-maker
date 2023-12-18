import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputTextState {
	title: string;
	subTitle: string;
	category: string;
}

const initialState: InputTextState = {
	title: '',
	subTitle: '',
	category: '',
};

const inputTextSlice = createSlice({
	name: 'inputTextSlice',
	initialState,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
		setSubTitle: (state, action: PayloadAction<string>) => {
			state.subTitle = action.payload;
		},
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setTitle, setSubTitle, setCategory, reset } =
	inputTextSlice.actions;
export const selectInput = (state: { inputTextSlice: InputTextState }) =>
	state.inputTextSlice;

export default inputTextSlice.reducer;
