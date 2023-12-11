import styled from 'styled-components';

export const DropdownContent = styled.div`
	display: ${(props) => (props.$visible ? 'block' : 'none')};
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 1;
	top: -10px;
`;

export const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;
`;
