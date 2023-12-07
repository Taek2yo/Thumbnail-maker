import React, { useState } from 'react';
import StyledText from '../molecules/StyledText';

export default function StylingText() {
	const [buttonStates, setButtonStates] = useState([false, false, false]);
	const [selectedFonts, setSelectedFonts] = useState({
		title: null,
		subTitle: null,
		category: null,
	});

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

	const handleFontChange = (font, target) => {
		setSelectedFonts((prevFonts) => ({ ...prevFonts, [target]: font }));
	};

	return (
		<div style={{ width: '95%' }}>
			{buttons.map((button, idx) => (
				<StyledText
					key={button.id}
					content={button.name}
					isActive={buttonStates[idx]}
					onClick={() => handleActiveButton(idx)}
					onFontChange={handleFontChange}
				/>
			))}
		</div>
	);
}
