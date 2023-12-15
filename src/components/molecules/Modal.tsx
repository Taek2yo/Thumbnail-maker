import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBackgroundImg } from '../../redux/module/backgroundSlice';
import * as S from '../../styles/components/molecules/ModalStyle';
import * as B from '../../styles/components/atoms/ButtonStyles';

interface ModalProps {
	onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
	const [imageUrl, setImageUrl] = useState<string>('');
	const dispatch = useDispatch();
	const handleCancel = (): void => {
		onClose();
	};

	const handleConfirm = (): void => {
		dispatch(setBackgroundImg(imageUrl));
		onClose();
	};
	return (
		<S.ModalContainer>
			<span>이미지 URL 주소를 입력해주세요😉</span>
			<S.ModalInput
				type="text"
				placeholder="URL 주소 입력"
				value={imageUrl}
				onChange={(e) => setImageUrl(e.target.value)}
			/>
			<S.BtnWrapper>
				<B.CancelBtn onClick={handleCancel}>취소</B.CancelBtn>
				<B.ConfirmBtn onClick={handleConfirm}>확인</B.ConfirmBtn>
			</S.BtnWrapper>
		</S.ModalContainer>
	);
}
