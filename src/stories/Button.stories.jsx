import React from 'react';

import Button from '../components/atoms/Button';

export default {
	title: 'atoms/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
	name: 'default',
	$active: false,
};
