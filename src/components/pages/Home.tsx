import React from 'react';
import ControlPanelSection from '../organisms/ControlPanelSection';
import PreviewSection from '../organisms/PreviewSection';
import * as S from '../../styles/global/Layout';

export default function Home() {
	return (
		<S.DivideSection>
			<ControlPanelSection />
			<PreviewSection />
		</S.DivideSection>
	);
}
