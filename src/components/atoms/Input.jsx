import React from 'react';
import { InputStyle } from '../../styles/components/atoms/InputStyles';

export default function Input({ onChange, value, maxleng }) {
	return (
		<InputStyle
			type="text"
			onChange={onChange}
			value={value}
			maxLength={maxleng}
		/>
	);
}
