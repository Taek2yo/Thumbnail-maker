import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Text from '../components/atoms/Text';

export default {
	title: 'atoms/Text',
	component: Text,
	decorators: [withKnobs],
	argTypes: {
		content: 'content',
	},
};

const Template = (args) => <Text {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {
	content: text('content', 'default'),
};
