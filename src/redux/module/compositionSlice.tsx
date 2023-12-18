import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompositionState {
	value: number;
}

const initialState: CompositionState = {
	value: 0,
};

const compositionSlice = createSlice({
	name: 'composition',
	initialState,
	reducers: {
		updateComposition: (state, action: PayloadAction<number>) => {
			return {
				...state,
				value: action.payload,
			};
		},
		reset: () => initialState,
	},
});

export const { updateComposition, reset } = compositionSlice.actions;
export const selectComposition = (state: {
	compositionSlice: CompositionState;
}) => state.compositionSlice.value;

export default compositionSlice.reducer;
