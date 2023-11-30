import React from 'react';
import { InputStyle } from '../../styles/components/InputStyles';

export default function Input({ id, onChange, value }) {
	return (
		<InputStyle
			type="input"
			key={id}
			onChange={onChange}
			id={id}
			value={value}
		/>
	);
}
