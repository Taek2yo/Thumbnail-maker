import React from 'react';
import { ButtonStyles } from '../../styles/components/ButtonStyles';

export default function Button({ name, id, onClick, $active }) {
	return (
		<ButtonStyles type="button" key={id} onClick={onClick} $active={$active}>
			{name}
		</ButtonStyles>
	);
}
