import React from 'react';
import { ButtonStyles } from '../../styles/components/ButtonStyles';

export default function Button({ name, onClick, $active }) {
	return (
		<ButtonStyles type="button" onClick={onClick} $active={$active}>
			{name}
		</ButtonStyles>
	);
}
