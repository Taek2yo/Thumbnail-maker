import { configureStore } from '@reduxjs/toolkit';
import inputTextSlice from '../module/inputTextSlice';

export const store = configureStore({
	reducer: {
		inputTextSlice,
	},
});
