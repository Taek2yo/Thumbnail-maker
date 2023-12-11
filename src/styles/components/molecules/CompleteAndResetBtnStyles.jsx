import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 15px;
	margin-top: 10px;
`;

export const ResetBtn = styled.button`
	width: 200px;
	border-radius: 4px;
	padding: 8px;
	border: none;
	font-family: 'Noto Sans KR';
	font-size: 16px;
	cursor: pointer;
	&:hover {
		background-color: #f32e2e;
		color: white;
		transition:
			background-color 0.2s ease,
			opacity 0.3s ease,
			transform 0.3s ease;
	}
`;

export const CompleteBtn = styled.button`
	width: 200px;
	border-radius: 4px;
	padding: 8px;
	border: none;
	font-family: 'Noto Sans KR';
	font-size: 16px;
	cursor: pointer;
	background-color: #cdcdcd;
	&:hover {
		background-color: #40457e;
		color: white;
		transition:
			background-color 0.2s ease,
			opacity 0.3s ease,
			transform 0.3s ease;
	}
`;
