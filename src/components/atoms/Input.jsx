import React from 'react';
import { InputStyle } from '../../styles/components/InputStyles';

export default function Input({ onChange, value }) {
	return <InputStyle type="text" onChange={onChange} value={value} />;
}
