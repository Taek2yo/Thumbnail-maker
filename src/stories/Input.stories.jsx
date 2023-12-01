import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/atoms/Input';

export default {
	title: 'atoms/Input',
	component: Input,
	argTypes: {
		onChange: { action: 'changed' },
	},
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	onChange: action('onChange'),
	value: 'default',
};
