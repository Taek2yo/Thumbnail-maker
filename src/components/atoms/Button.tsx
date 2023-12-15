import React from 'react';
import { ButtonStyles } from '../../styles/components/atoms/ButtonStyles';

interface BtnProps {
	name: string;
	onClick: () => void;
	$active: boolean;
}

export default function Button({ name, onClick, $active }: BtnProps) {
	return (
		<ButtonStyles type="button" onClick={onClick} $active={$active}>
			{name}
		</ButtonStyles>
	);
}
