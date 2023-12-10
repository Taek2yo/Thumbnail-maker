import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Text from '../atoms/Text';
import DropdownMenu from '../organisms/DropdownMenu';
import { FontSizeBtn } from '../../styles/components/atoms/ButtonStyles';
import { ColorPicker } from '../../styles/components/atoms/InputStyles';
import * as S from '../../styles/components/molecules/StyledTextStyles';
import { setFont, setColor } from '../../redux/module/fontSlice';

export default function StyledText({
	content,
	isActive,
	onClick,
	onFontChange,
}) {
	const [localState, setLocalState] = useState({
		selectedColor: '#000000',
	});

	const dispatch = useDispatch();

	const handleColorChange = useCallback((e) => {
		const newColor = e.target.value;
		setLocalState((prevState) => ({
			...prevState,
			selectedColor: newColor,
		}));
	}, []);
	const determineTarget = useCallback(() => {
		const contentMap = {
			Title: 'title',
			SubTitle: 'subtitle',
			Category: 'category',
		};

		return contentMap[content] || 'title';
	}, [content]);

	const handleFontSelect = useCallback(
		(font) => {
			dispatch(setFont({ font, target: determineTarget() }));
			if (onFontChange) {
				onFontChange(font, determineTarget());
			}
		},
		[determineTarget, onFontChange]
	);

	const handleLocal = useCallback(() => {
		dispatch(
			setColor({
				color: localState.selectedColor,
				target: content.toLowerCase(),
			})
		);
	}, [localState.selectedColor, content]);

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
					value={localState.selectedColor}
					onChange={handleColorChange}
					onBlur={handleLocal}
				/>
			</S.StyledInnerContainer>
		</S.StyledTextContainer>
	);
}
