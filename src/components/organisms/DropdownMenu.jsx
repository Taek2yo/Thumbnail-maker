import React, { useState, useEffect, useRef } from 'react';
import {
	DropdownButton,
	FontItem,
} from '../../styles/components/atoms/DropdownAtom';
import {
	DropdownContent,
	DropdownWrapper,
} from '../../styles/components/molecules/DropdownMolecule';

const fonts = ['Noto Sans KR', '미생체', '잘난체', 'Automolie', 'Rembank'];

export default function DropdownMenu() {
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
		// Todo : 선택한 폰트에 대한 추가 로직 , 코드 분리 고민
	};

	return (
		<DropdownWrapper ref={ref}>
			<DropdownButton type="button" onClick={() => handleButtonClick()}>
				{selectedFont || '폰트 선택'}
			</DropdownButton>
			<DropdownContent $visible={$visible}>
				{fonts.map((font) => (
					<FontItem key={font} onClick={() => handleFontSelect(font)}>
						{font}
					</FontItem>
				))}
			</DropdownContent>
		</DropdownWrapper>
	);
}
