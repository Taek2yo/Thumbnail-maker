import React from 'react';
import Input from '../atoms/Input';

export default function InputField({ label, id, value, onChange }) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<Input id={id} value={value} onChange={onChange} />
		</div>
	);
}
