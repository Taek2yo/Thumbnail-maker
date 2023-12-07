import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Text from '../atoms/Text';
import DropdownMenu from '../organisms/DropdownMenu';
import { FontSizeBtn } from '../../styles/components/atoms/ButtonStyles';
import { ColorPicker } from '../../styles/components/atoms/InputStyles';
import * as S from '../../styles/components/molecules/StyledTextStyles';
import { setFont } from '../../redux/module/fontSlice';

export default function StyledText({
	content,
	isActive,
	onClick,
	onFontChange,
}) {
	const [selectedColor, setSelectedColor] = useState('#000000');
	const dispatch = useDispatch();

	const handleColorChange = (e) => {
		setSelectedColor(e.target.value);
	};

	const determineTarget = () => {
		if (content === 'Title') {
			return 'title';
		}
		if (content === 'SubTitle') {
			return 'subTitle';
		}
		if (content === 'Category') {
			return 'category';
		}
		return 'title';
	};

	const handleFontSelect = (font) => {
		dispatch(setFont({ font, target: determineTarget() }));
		if (onFontChange) {
			onFontChange(font, determineTarget());
		}
	};

	return (
		<S.StyledTextContainer>
			<Text content={content} />
			<S.StyledInnerContainer>
				<DropdownMenu
					target={determineTarget()}
					onFontChange={handleFontSelect}
				/>
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
