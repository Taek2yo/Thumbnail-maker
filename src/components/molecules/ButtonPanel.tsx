import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { ButtonWrap } from '../../styles/components/molecules/ButtonPanelStyles';
import {
	setBackgroundImg,
	setSolidRandom,
	setGradientRandom,
	setCountIdx,
	getIdx,
} from '../../redux/module/backgroundSlice';
import Modal from './Modal';

interface ButtonInfo {
	name: string;
	id: number;
}

const buttons = [
	{ name: '그래디언트 랜덤', id: 0 },
	{ name: '단색 랜덤', id: 1 },
	{ name: '이미지 URL 입력하기', id: 2 },
];

export default function ButtonPanel() {
	const dispatch = useDispatch();
	const [open, setOpen] = useState<boolean>(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};
	const getCountIdx = useSelector(getIdx);

	const generateRandomGradient = () => {
		dispatch(setBackgroundImg(''));
		dispatch(setSolidRandom(''));
		const randomColor = () => Math.floor(Math.random() * 128) + 128;
		const color1 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
		const color2 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
		const color3 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

		const gradientColor = `linear-gradient(-45deg, ${color1}, ${color2}, ${color3})`;
		dispatch(setGradientRandom(gradientColor));
	};

	const generateRandomSolid = () => {
		dispatch(setBackgroundImg(''));
		const randomSolid = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		dispatch(setSolidRandom(randomSolid));
	};

	const handleGradientButton = () => {
		generateRandomGradient();
		dispatch(setCountIdx(0));
	};

	const handleSolidButton = () => {
		generateRandomSolid();
		dispatch(setCountIdx(1));
	};

	const handleModalButton = () => {
		openModal();
		dispatch(setCountIdx(2));
	};

	return (
		<>
			<Text content="배경 색 설정" />
			<ButtonWrap>
				{buttons.map((v: ButtonInfo, idx: number) => (
					<Button
						key={v.id}
						name={v.name}
						$active={getCountIdx === idx}
						onClick={() => {
							if (idx === 0) handleGradientButton();
							else if (idx === 1) handleSolidButton();
							else if (idx === 2) handleModalButton();
						}}
					/>
				))}
			</ButtonWrap>
			{open && <Modal onClose={closeModal} />}
		</>
	);
}
