import styled from 'styled-components';
import { flexCenter } from '../../global/Mixins';

export const PreviewSectionStyle = styled.div`
	${flexCenter};
	flex: 6.5;
	width: 90%;
	height: 100vh;
	background-color: #1e1e1e;
`;

export const ControlPanelSectionStyle = styled.div`
	${flexCenter};
	flex-direction: column;
	flex: 3.5;
	width: 100%;
	height: 100vh;
	background-color: #2c2c2c;
`;
