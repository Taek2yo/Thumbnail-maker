import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../components/atoms/Button';

export default {
	title: 'Button',
	component: Button,
	decorators: [withKnobs],
	argTypes: {
		onClick: { action: 'clicked' },
		onMouseEnter: { action: 'hovered' },
		onMouseLeave: { action: 'unhovered' },
	},
};

export const DefaultButton = () => {
	const nameValue = text('name', 'default');
	const idValue = number('id', 0);
	const onClickHandler = action('handleButtonClick');
	const isActive = boolean('활성', false);

	return (
		<Button
			name={nameValue}
			id={idValue}
			onClick={onClickHandler}
			$active={isActive}
		/>
	);
};

DefaultButton.story = {
	name: 'Button',
};
