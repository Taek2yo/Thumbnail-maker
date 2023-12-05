import React, { useState } from 'react';
import StyledText from '../molecules/StyledText';

export default function StylingText() {
	const [buttonStates, setButtonStates] = useState([false, false, false]);

	const buttons = [
		{ name: 'Title', id: 0 },
		{ name: 'SubTitle', id: 1 },
		{ name: 'Category', id: 2 },
	];

	const handleActiveButton = (idx) => {
		const btns = [...buttonStates];
		btns[idx] = !btns[idx];
		setButtonStates(btns);
	};

	return (
		<div style={{ width: '95%' }}>
			{buttons.map((button, idx) => (
				<StyledText
					key={button.id}
					title={button.name}
					isActive={buttonStates[idx]}
					onClick={() => handleActiveButton(idx)}
				/>
			))}
		</div>
	);
}
