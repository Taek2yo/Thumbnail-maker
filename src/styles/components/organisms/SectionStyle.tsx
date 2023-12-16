import styled from 'styled-components';
import { flexCenter } from '../../global/Mixins';

export const PreviewSectionStyle = styled.div`
	${flexCenter};
	flex-direction: column;
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

export const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
	.text {
		background-image: linear-gradient(to right, #9d7eef, #5e5cb7);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		font-weight: bold;
		font-family: 'Rembank';
		font-size: 60px;
	}
	.icon {
		font-size: 40px;
	}
`;
