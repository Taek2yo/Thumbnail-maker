import React from 'react';
import * as S from '../../styles/components/molecules/ModalStyle';
import * as B from '../../styles/components/atoms/ButtonStyles';

export default function Modal({ onClose }) {
	const handleCancel = () => {
		onClose();
	};

	const handleConfirm = () => {
		// TODO : 이미지 url 전송 로직 추가
		onClose();
	};
	return (
		<S.ModalContainer>
			<span>이미지 URL 주소를 입력해주세요😉</span>
			<S.ModalInput type="text" placeholder="URL 주소 입력" />
			<S.BtnWrapper>
				<B.CancelBtn onClick={handleCancel}>취소</B.CancelBtn>
				<B.ConfirmBtn onClick={handleConfirm}>확인</B.ConfirmBtn>
			</S.BtnWrapper>
		</S.ModalContainer>
	);
}
