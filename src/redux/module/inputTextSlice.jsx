import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: '',
	subTitle: '',
	category: '',
};

const inputTextSlice = createSlice({
	name: 'inputTextSlice',
	initialState,
	reducers: {
		setTitle: (state, action) => ({
			...state,
			title: action.payload,
		}),
		setSubTitle: (state, action) => ({
			...state,
			subTitle: action.payload,
		}),
		setCategory: (state, action) => ({
			...state,
			category: action.payload,
		}),
		reset: () => initialState,
	},
});

export const { setTitle, setSubTitle, setCategory, reset } =
	inputTextSlice.actions;
export const selectInput = (state) => state.inputTextSlice;

export default inputTextSlice.reducer;
