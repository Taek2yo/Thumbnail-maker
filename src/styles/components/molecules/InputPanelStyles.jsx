import styled from 'styled-components';
import { flexCenter } from '../../global/Mixins';

export const LabelInputWrap = styled.div`
	${flexCenter};
	width: 100%;
	margin-bottom: 15px;
	margin-right: 15px;
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 18px;
	margin-bottom: 5px;
	width: 100%;
	color: white;
	font-weight: bold;
`;
