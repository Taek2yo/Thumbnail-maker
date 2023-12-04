import React from 'react';
import DropdownMenu from '../components/organisms/DropdownMenu';

export default {
	title: 'Components/DropdownMenu',
	component: DropdownMenu,
	argTypes: {
		onSelect: { action: 'select' },
	},
};

const Template = (args) => <DropdownMenu {...args} />;

export const DefaultDropDown = Template.bind({});
DefaultDropDown.args = {};
