import React from 'react';
import { useDispatch } from 'react-redux';
import { reset as resetBackground } from '../../redux/module/backgroundSlice';
import { reset as resetFont } from '../../redux/module/fontSlice';
import { reset as resetInputText } from '../../redux/module/inputTextSlice';
import { reset as resetComposition } from '../../redux/module/compositionSlice';
import * as S from '../../styles/components/molecules/CompleteAndResetBtnStyles';

export default function CompleteAndResetBtn() {
	const dispatch = useDispatch();
	const resetAll = () => {
		dispatch(resetBackground());
		dispatch(resetFont());
		dispatch(resetInputText());
		dispatch(resetComposition());
	};
	return (
		<S.Wrapper>
			<S.ResetBtn onClick={resetAll}>초기화</S.ResetBtn>
			<S.CompleteBtn>완료</S.CompleteBtn>
		</S.Wrapper>
	);
}
