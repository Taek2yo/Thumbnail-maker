import styled from 'styled-components';

export const flexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexCenterColumn = styled.div`
	${flexCenter};
	flex-direction: column;
`;
