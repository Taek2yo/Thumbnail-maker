import styled, { css } from 'styled-components';

type OwnProps = {
	$active: boolean;
};

export const Btn = css<OwnProps>`
	padding: 8px;
	border: none;
	cursor: pointer;
	background-color: ${(props) => (props.$active ? '#464d9b' : '#CDCDCD')};
	color: ${(props) => (props.$active ? 'white' : 'white')};
	&:hover {
		background-color: #40457e;
		transition:
			background-color 0.2s ease,
			opacity 0.3s ease,
			transform 0.3s ease;
	}
	font-family: 'Noto Sans KR';
`;

export const ButtonStyles = styled.button<OwnProps>`
	${Btn}
	width: 180px;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
`;

export const FontSizeBtn = styled.button<OwnProps>`
	${Btn}
	width: 80px;
`;

export const CancelBtn = styled.button<OwnProps>`
	width: 70px;
	padding: 8px;
	border: none;
	cursor: pointer;
	color: white;
	background-color: #fa4e4e;
`;

export const ConfirmBtn = styled.button<OwnProps>`
	width: 70px;
	padding: 8px;
	border: none;
	cursor: pointer;
	color: white;
	background-color: #5b61bb;
`;
