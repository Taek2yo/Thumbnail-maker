import React from 'react';
import Input from '../atoms/Input';
import * as S from '../../styles/components/molecules/InputPanelStyles';

export default function InputField({ label, value, onChange }) {
	return (
		<S.LabelInputWrap>
			<S.Label>
				{label}
				<Input value={value} onChange={onChange} />
			</S.Label>
		</S.LabelInputWrap>
	);
}
