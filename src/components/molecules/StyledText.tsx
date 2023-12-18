import React, { useState, useCallback, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import Text from '../atoms/Text';
import DropdownMenu from '../organisms/DropdownMenu';
import { ColorPicker } from '../../styles/components/atoms/InputStyles';
import * as S from '../../styles/components/molecules/StyledTextStyles';
import { setFont, setColor } from '../../redux/module/fontSlice';
import { FontState } from '../../redux/module/fontSlice';

interface StyledTextProps {
	content: string;
	isActive: boolean;
	onClick: () => void;
	onFontChange?: (font: string, target: string) => void;
}

export default function StyledText({ content, onFontChange }: StyledTextProps) {
	const [localState, setLocalState] = useState({
		selectedColor: '#000000',
	});

	const dispatch = useDispatch();

	const handleColorChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const newColor = e.target.value;
		setLocalState((prevState) => ({
			...prevState,
			selectedColor: newColor,
		}));
	}, []);

	const determineTarget = useCallback(() => {
		const contentMap: { [key: string]: keyof FontState } = {
			Title: 'title',
			SubTitle: 'subtitle',
			Category: 'category',
		};

		return contentMap[content] || 'title';
	}, [content]);

	const handleFontSelect = useCallback(
		(font: string) => {
			const target: keyof FontState = determineTarget();
			dispatch(setFont({ font, target }));
			if (onFontChange) {
				onFontChange(font, target);
			}
		},
		[determineTarget, onFontChange, dispatch]
	);

	const handleLocal = useCallback(() => {
		dispatch(
			setColor({
				color: localState.selectedColor,
				target: content.toLowerCase() as keyof FontState,
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
