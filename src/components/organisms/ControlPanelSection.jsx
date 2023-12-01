import React from 'react';
import InputPanel from '../molecules/InputPanel';
import ButtonPanel from '../molecules/ButtonPanel';
import StylingPanel from '../molecules/StylingPanel';
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
