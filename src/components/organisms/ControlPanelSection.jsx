import React from 'react';
import InputPanel from './InputPanel';
import ButtonPanel from '../molecules/ButtonPanel';
import StylingPanel from './StylingPanel';
import CompleteAndResetBtn from '../molecules/CompleteAndResetBtn';
import {
	ControlPanelSectionStyle,
	Header,
} from '../../styles/components/organisms/SectionStyle';

export default function ControlPanelSection() {
	return (
		<ControlPanelSectionStyle>
			<Header>
				<span className="text">Thumbnail Wizard</span>
				<span className="icon">🧙🏻</span>
			</Header>
			<InputPanel />
			<ButtonPanel />
			<StylingPanel />
			<CompleteAndResetBtn />
		</ControlPanelSectionStyle>
	);
}
