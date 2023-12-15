import React from 'react';
import Input from '../atoms/Input';
import * as S from '../../styles/components/organisms/InputPanelStyles';

interface FieldProps {
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, value, onChange }: FieldProps) {
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
