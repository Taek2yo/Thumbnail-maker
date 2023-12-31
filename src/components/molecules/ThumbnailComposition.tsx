import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectComposition,
	updateComposition,
} from '../../redux/module/compositionSlice';
import Button from '../atoms/Button';
import * as S from '../../styles/components/molecules/CompositionStyles';
import Text from '../atoms/Text';

const buttons = [
	{ name: '제목/소제목/분류', id: 0 },
	{ name: '제목/소제목', id: 1 },
	{ name: '제목만', id: 2 },
];

export default function ThumbnailComposition() {
	const dispatch = useDispatch();
	const compositionById = useSelector(selectComposition);

	const handleActiveButton = (idx: number) => {
		dispatch(updateComposition(idx));
	};

	return (
		<>
			<Text content="썸네일 구성요소" />
			<S.CompositionContainer>
				{buttons.map((v, idx) => (
					<Button
						key={v.id}
						name={v.name}
						$active={compositionById === idx}
						onClick={() => handleActiveButton(idx)}
					/>
				))}
			</S.CompositionContainer>
		</>
	);
}
