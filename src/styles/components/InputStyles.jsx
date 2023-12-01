import styled from 'styled-components';
import { flexCenter } from '../global/Mixins';

export const InputStyle = styled.input`
	padding: 5px;
	font-size: 16px;
	margin-left: 10px;
	width: 350px;
`;

export const LabelInputWrap = styled.div`
	${flexCenter};
	margin-bottom: 15px;
`;

export const Label = styled.label`
	font-size: 18px;
	margin-bottom: 5px;
	width: 100px;
	display: inline-block;
	text-align: center;
`;
