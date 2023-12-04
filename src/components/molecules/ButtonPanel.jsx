import React, { useState } from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { ButtonWrap } from '../../styles/components/molecules/ButtonPanelStyles';

export default function ButtonPanel() {
	const [countIndex, setCountIndex] = useState(-1);
	const buttons = [
		{ name: '그래디언트 랜덤', id: 0 },
		{ name: '단색 랜덤', id: 1 },
		{ name: '이미지 URL 입력하기', id: 2 },
	];

	const handleActiveButton = (e, idx) => {
		setCountIndex(idx);
	};

	return (
		<>
			<Text content="배경 색 설정" />
			<ButtonWrap>
				{buttons.map((v, idx) => (
					<Button
						key={v.id}
						name={v.name}
						$active={countIndex === idx}
						onClick={(e) => handleActiveButton(e, idx)}
					/>
				))}
			</ButtonWrap>
		</>
	);
}
