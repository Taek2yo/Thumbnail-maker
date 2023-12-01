import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '../components/atoms/Button';

export default {
	title: 'atoms/Button',
	component: Button,
	decorators: [withKnobs],
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
	name: text('text', 'default'),
	$active: boolean('$active', false),
};
