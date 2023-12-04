import React from 'react';
import InputPanel from './InputPanel';
import ButtonPanel from '../molecules/ButtonPanel';
import StylingPanel from './StylingPanel';
import { ControlPanelSectionStyle } from '../../styles/components/organisms/SectionStyle';

export default function ControlPanelSection() {
	return (
		<ControlPanelSectionStyle>
			<InputPanel />
			<ButtonPanel />
			<StylingPanel />
		</ControlPanelSectionStyle>
	);
}
