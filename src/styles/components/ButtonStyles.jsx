import styled from 'styled-components';

export const ButtonStyles = styled.button`
	width: 200px;
	padding: 8px;
	border: none;
	border-radius: 15px;
	font-size: 16px;
	font-weight: 400;
	cursor: pointer;
	background-color: ${(props) => (props.$active ? '#464d9b' : '#CDCDCD')};
	color: ${(props) => (props.$active ? 'white' : 'white')};
	&:hover {
		background-color: #464d9b;
		transition:
			background-color 0.2s ease,
			opacity 0.3s ease,
			transform 0.3s ease;
	}
`;
