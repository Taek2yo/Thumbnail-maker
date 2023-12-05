import React, { useState } from 'react';
import Text from '../atoms/Text';
import DropdownMenu from '../organisms/DropdownMenu';
import { FontSizeBtn } from '../../styles/components/atoms/ButtonStyles';
import { ColorPicker } from '../../styles/components/atoms/InputStyles';
import * as S from '../../styles/components/molecules/StyledTextStyles';

export default function StyledText({ title, isActive, onClick }) {
	const [selectedColor, setSelectedColor] = useState('#000000');

	const handleColorChange = (e) => {
		setSelectedColor(e.target.value);
	};
	return (
		<S.StyledTextContainer>
			<Text content={title} />
			<S.StyledInnerContainer>
				<DropdownMenu />
				<FontSizeBtn $active={isActive} onClick={onClick}>
					크기 작게
				</FontSizeBtn>
				<ColorPicker
					type="color"
					value={selectedColor}
					onChange={handleColorChange}
				/>
			</S.StyledInnerContainer>
		</S.StyledTextContainer>
	);
}
