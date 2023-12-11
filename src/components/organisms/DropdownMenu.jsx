import React, { useState, useEffect, useRef, memo } from 'react';
import {
	DropdownButton,
	FontItem,
} from '../../styles/components/atoms/DropdownAtom';
import {
	DropdownContent,
	DropdownWrapper,
} from '../../styles/components/molecules/DropdownMolecule';

const fonts = [
	{ name: '없음', value: '' },
	{ name: 'Noto Sans KR', value: 'Noto Sans KR' },
	{ name: '미생체', value: 'MiSaeng' },
	{ name: '잘난체', value: 'Jalnan2' },
	{ name: 'Automolie (영어)', value: 'AutoMobileContest' },
	{ name: 'Rembank (영어)', value: 'Rembank' },
];

function DropdownMenu({ target, onFontChange }) {
	const [$visible, setVisible] = useState(false);
	const [selectedFont, setSelectedFont] = useState(null);
	const ref = useRef(null);

	const handleButtonClick = () => {
		setVisible(!$visible);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setVisible(false);
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [ref, setVisible]);

	const handleFontSelect = (font) => {
		setSelectedFont(font);
		setVisible(false);
		if (onFontChange) {
			onFontChange(font, target);
		}
	};

	return (
		<DropdownWrapper ref={ref}>
			<DropdownButton type="button" onClick={() => handleButtonClick()}>
				{selectedFont || '폰트 선택'}
			</DropdownButton>
			<DropdownContent $visible={$visible}>
				{fonts.map((v) => (
					<FontItem key={v.name} onClick={() => handleFontSelect(v.value)}>
						{v.name}
					</FontItem>
				))}
			</DropdownContent>
		</DropdownWrapper>
	);
}

export default memo(DropdownMenu);
