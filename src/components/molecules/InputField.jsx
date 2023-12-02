import React from 'react';
import Input from '../atoms/Input';
import * as S from '../../styles/components/molecules/InputPanelStyles';

export default function InputField({ label, value, onChange }) {
	const maxleng = label === 'Title' ? 38 : 30;
	return (
		<S.LabelInputWrap>
			<S.Label>
				{label}
				<Input value={value} onChange={onChange} maxleng={maxleng} />
			</S.Label>
		</S.LabelInputWrap>
	);
}
