import { configureStore } from '@reduxjs/toolkit';
import inputTextSlice from '../module/inputTextSlice';
import compositionSlice from '../module/compositionSlice';

export const store = configureStore({
	reducer: {
		inputTextSlice,
		compositionSlice,
	},
});
