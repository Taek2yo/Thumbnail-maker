import React from 'react';
import Button from '../components/atoms/Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'default',
	id: 0,
	$active: false,
};

export const GradientRandom = Template.bind({});
GradientRandom.args = {
	...Default.args,
	name: '그래디언트 랜덤',
	id: 1,
};

export const SolidRandom = Template.bind({});
SolidRandom.args = {
	...Default.args,
	name: '단색 랜덤',
	id: 2,
};

export const OpenModalImageURL = Template.bind({});
OpenModalImageURL.args = {
	...Default.args,
	name: '이미지 URL 입력하기',
	id: 3,
};
