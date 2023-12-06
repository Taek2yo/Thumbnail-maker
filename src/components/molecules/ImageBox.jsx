import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../styles/components/molecules/ImageBoxStyles';
import { selectInput } from '../../redux/module/inputTextSlice';
import { composition } from '../../redux/module/compositionSlice';
import PreviewImage from '../atoms/PreviewImage';

export default function ImageBox() {
	const { title, subTitle, category } = useSelector(selectInput);
	const compositionById = useSelector(composition);
	console.log(compositionById);
	const src =
		'https://img.hani.co.kr/imgdb/resize/2007/1227/68227042_20071227.jpg';

	let content = null;

	if (compositionById === 0 || compositionById === -1) {
		content = (
			<>
				<S.ContentWrap>
					<S.Title>{title}</S.Title>
					<S.SubTitle>{subTitle}</S.SubTitle>
				</S.ContentWrap>
				<S.Category>{category}</S.Category>
			</>
		);
	} else if (compositionById === 1) {
		content = (
			<S.ContentWrap>
				<S.Title>{title}</S.Title>
				<S.SubTitle>{subTitle}</S.SubTitle>
			</S.ContentWrap>
		);
	} else if (compositionById === 2) {
		content = (
			<S.ContentWrap>
				<S.Title>{title}</S.Title>
			</S.ContentWrap>
		);
	}

	return (
		<S.ImageContainer>
			<PreviewImage img={src} />
			{content}
		</S.ImageContainer>
	);
}
