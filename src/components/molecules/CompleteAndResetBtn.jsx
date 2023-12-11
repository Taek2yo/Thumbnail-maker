import React from 'react';
import html2canvas from 'html2canvas';
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

	const saveImageToFile = (dataUrl, fileName) => {
		const link = document.createElement('a');
		link.href = dataUrl;
		link.download = fileName;
		document.body.appendChild(link);

		link.addEventListener('click', () => {
			window.alert('이미지가 다운로드 성공 🎉');
		});

		link.click();
		document.body.removeChild(link);
	};

	const captureImage = () => {
		const imageContainer = document.getElementById('capture-element');

		if (imageContainer) {
			html2canvas(imageContainer).then((canvas) => {
				const imageDataUrl = canvas.toDataURL('image/png');
				saveImageToFile(imageDataUrl, 'captured_image.png');
			});
		}
	};

	return (
		<S.Wrapper>
			<S.ResetBtn onClick={resetAll}>초기화</S.ResetBtn>
			<S.CompleteBtn onClick={captureImage}>완료</S.CompleteBtn>
		</S.Wrapper>
	);
}
