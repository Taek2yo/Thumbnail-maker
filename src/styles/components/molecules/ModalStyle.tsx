import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 45%;
	left: 45%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 400px;
	padding: 15px;
	border: 3px solid #5860b8;
	border-radius: 4px;
	gap: 20px;
	background-color: white;
	z-index: 99;
	span {
		font-family: 'Noto Sans KR';
	}
`;

export const BtnWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
	justify-content: right;
`;

export const ModalInput = styled.input`
	padding: 8px;
	width: 90%;
	border: 1px solid gray;
	border-radius: 4px;
	outline: none;
	&:focus {
		outline: none;
	}
`;
