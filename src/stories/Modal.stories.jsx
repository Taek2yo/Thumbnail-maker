import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Modal from '../components/molecules/Modal';

export default {
	title: 'molcules/Modal',
	component: Modal,
	decorators: [withKnobs],
	argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
	url: text('text', 'image url'),
};
