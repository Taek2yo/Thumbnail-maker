import React, { useState } from 'react';
import Button from '../atoms/Button';
import * as S from '../../styles/components/molecules/CompositionStyles';
import Text from '../atoms/Text';

export default function ThumbnailComposition() {
	const [countIndex, setCountIndex] = useState(-1);
	const buttons = [
		{ name: '제목/소제목/분류', id: 0 },
		{ name: '제목/소제목', id: 1 },
		{ name: '제목만', id: 2 },
	];
	const handleActiveButton = (e, idx) => {
		setCountIndex(idx);
	};
	return (
		<>
			<Text content="썸네일 구성요소" />
			<S.CompositionContainer>
				{buttons.map((v, idx) => (
					<Button
						key={v.id}
						name={v.name}
						$active={countIndex === idx}
						onClick={(e) => handleActiveButton(e, idx)}
					/>
				))}
			</S.CompositionContainer>
		</>
	);
}
