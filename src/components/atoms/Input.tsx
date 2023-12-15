import React from 'react';
import { InputStyle } from '../../styles/components/atoms/InputStyles';

interface InputProps {
	value: string;
	maxleng: number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ onChange, value, maxleng }: InputProps) {
	return (
		<InputStyle
			type="text"
			onChange={onChange}
			value={value}
			maxLength={maxleng}
		/>
	);
}
