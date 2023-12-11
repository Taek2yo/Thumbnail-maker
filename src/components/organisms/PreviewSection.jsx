import React from 'react';
import ImageBox from '../molecules/ImageBox';
import { PreviewSectionStyle } from '../../styles/components/organisms/SectionStyle';

export default function PreviewSection() {
	return (
		<PreviewSectionStyle>
			<ImageBox />
			<span
				style={{
					position: 'absolute',
					bottom: 0,
					right: 10,
					color: '#cdcdcda',
				}}
			>
				ⓒ 2023. Woozy (Taek2yo) <br />
				All rights reserved.
			</span>
		</PreviewSectionStyle>
	);
}
