import styled from 'styled-components';

export const InputStyle = styled.input`
	padding: 7px;
	font-size: 16px;
	margin-left: 10px;
	width: 400px;
	border: 1px solid #565da8;
	border-radius: 4px;
	&:focus {
		outline: 1px solid #3545f0;
	}
`;

export const ColorPicker = styled.input`
	cursor: pointer;
	width: 45px;
	height: 45px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-color: transparent;
	border: none;
	&::-webkit-color-swatch {
		border-radius: 100%;
		border: none;
	}
`;
