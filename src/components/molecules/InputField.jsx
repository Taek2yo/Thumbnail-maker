import React from 'react';
import Input from '../atoms/Input';

export default function InputField({ label, value, onChange }) {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<Input value={value} onChange={onChange} />
		</div>
	);
}
