import React from 'react';
import InputPanel from '../molecules/InputPanel';
import ButtonPanel from '../molecules/ButtonPanel';
import StylingPanel from '../molecules/StylingPanel';
import * as S from '../../styles/global/Mixins';

export default function ControlPanelSection() {
	return (
		<S.flexCenterColumn>
			<InputPanel />
			<ButtonPanel />
			<StylingPanel />
		</S.flexCenterColumn>
	);
}
