import React from 'react';
import ControlPanelSection from '../organisms/ControlPanelSection';
import PreviewSection from '../organisms/PreviewSection';
import * as S from '../../styles/components/Layout';

export default function Home() {
	return (
		<S.divideSection>
			<ControlPanelSection />
			<PreviewSection />
		</S.divideSection>
	);
}
