import React from 'react';
import Input from '../atoms/Input';
import * as S from '../../styles/components/InputStyles';

export default function InputField({ label, value, onChange }) {
	return (
		<S.LabelInputWrap>
			<S.Label htmlFor={label}>{label}</S.Label>
			<Input value={value} onChange={onChange} />
		</S.LabelInputWrap>
	);
}
