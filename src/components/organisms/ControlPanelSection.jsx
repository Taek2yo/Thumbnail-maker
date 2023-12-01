import React from 'react';
import InputPanel from '../molecules/InputPanel';
import ButtonPanel from '../molecules/ButtonPanel';
import StylingPanel from '../molecules/StylingPanel';
import * as S from '../../styles/components/Layout';

export default function ControlPanelSection() {
	return (
		<S.ControlPanelSectionStyle>
			<InputPanel />
			<ButtonPanel />
			<StylingPanel />
		</S.ControlPanelSectionStyle>
	);
}
