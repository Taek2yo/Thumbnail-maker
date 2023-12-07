import { configureStore } from '@reduxjs/toolkit';
import inputTextSlice from '../module/inputTextSlice';
import compositionSlice from '../module/compositionSlice';
import fontSlice from '../module/fontSlice';

export const store = configureStore({
	reducer: {
		inputTextSlice,
		compositionSlice,
		fontSlice,
	},
});
