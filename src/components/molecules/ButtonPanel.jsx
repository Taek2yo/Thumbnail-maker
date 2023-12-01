import React, { useState } from 'react';
import Button from '../atoms/Button';
import * as S from '../../styles/components/ButtonStyles';

export default function ButtonPanel() {
	const [countIndex, setCountIndex] = useState(0);
	console.log(countIndex);
	const buttons = [
		{ name: '그래디언트 랜덤', id: 0 },
		{ name: '단색 랜덤', id: 1 },
		{ name: '이미지 URL 입력하기', id: 2 },
	];

	const handleActiveButton = (e, idx) => {
		setCountIndex(idx);
	};
	return (
		<S.ButtonWrap>
			{buttons.map((v, idx) => (
				<Button
					key={v.id}
					name={v.name}
					$active={countIndex === idx}
					onClick={(e) => handleActiveButton(e, idx)}
				/>
			))}
		</S.ButtonWrap>
	);
}
