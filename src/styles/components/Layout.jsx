import styled from 'styled-components';
import { flexCenter } from '../global/Mixins';

export const DivideSection = styled.div`
	display: flex;
	align-items: center;
`;

export const PreviewSectionStyle = styled.div`
	${flexCenter};
	flex: 6;
	width: 100%;
`;

export const ControlPanelSectionStyle = styled.div`
	${flexCenter};
	flex-direction: column;
	flex: 4;
	width: 100%;
`;
