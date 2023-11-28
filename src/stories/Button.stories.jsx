import React from 'react';
import Button from '../Buttons';

export default {
	title: 'Button',
	component: Button,
};

function Template(args) {
	return <Button args={args} />;
}

export const Basic = Template.bind({});
