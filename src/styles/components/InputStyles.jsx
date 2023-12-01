import styled from 'styled-components';
import { flexCenter } from '../global/Mixins';

export const InputStyle = styled.input`
	padding: 10px;
	font-size: 16px;
	margin-left: 10px;
	width: 400px;
	border: 1px solid #565da8;
	border-radius: 12px;
	&:focus {
		outline: 1px solid #3545f0;
	}
`;

export const LabelInputWrap = styled.div`
	${flexCenter};
	width: 500px;
	margin-bottom: 15px;
	margin-right: 15px;
`;

export const Label = styled.label`
	font-size: 18px;
	margin-bottom: 5px;
	width: 100px;
	display: inline-block;
	text-align: left;
`;
