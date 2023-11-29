import React, { useState } from 'react';
import Button from '../atoms/Button';

export default function ButtonPanel() {
	const [activeButton, setActiveButton] = useState(null);

	const buttons = [
		{ name: '그래디언트 랜덤', id: 1 },
		{ name: '단색 랜덤', id: 2 },
		{ name: '이미지 URL 입력하기', id: 3 },
	];

	const handleGradientRandom = () => {
		// TODO : 기능 구현
		setActiveButton('그래디언트 랜덤');
	};

	const handleSolidRandom = () => {
		// TODO : 기능 구현
		setActiveButton('단색 랜덤');
	};

	const handleImageUrlInput = () => {
		// TODO : 기능 구현
		setActiveButton('이미지 URL 입력하기');
	};

	const buttonFunctions = {
		'그래디언트 랜덤': handleGradientRandom,
		'단색 랜덤': handleSolidRandom,
		'이미지 URL 입력하기': handleImageUrlInput,
	};

	const handleButtonClick = (name) => {
		setActiveButton(name);
		if (buttonFunctions[name]) {
			buttonFunctions[name]();
		}
	};

	return (
		<div>
			{buttons.map((item) => (
				<Button
					key={item.id}
					onClick={() => handleButtonClick(item.name)}
					name={item.name}
					$active={item.name === activeButton}
				/>
			))}
		</div>
	);
}
