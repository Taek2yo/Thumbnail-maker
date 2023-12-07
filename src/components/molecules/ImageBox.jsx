import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../styles/components/molecules/ImageBoxStyles';
import { selectInput } from '../../redux/module/inputTextSlice';
import { composition } from '../../redux/module/compositionSlice';
import {
	selectTitleFont,
	selectSubTitleFont,
	selectCategoryFont,
} from '../../redux/module/fontSlice';
import PreviewImage from '../atoms/PreviewImage';

export default function ImageBox() {
	const { title, subTitle, category } = useSelector(selectInput);
	const titleFont = useSelector(selectTitleFont);
	const subTitleFont = useSelector(selectSubTitleFont);
	const categoryFont = useSelector(selectCategoryFont);
	const compositionById = useSelector(composition);
	const src =
		'https://img.hani.co.kr/imgdb/resize/2007/1227/68227042_20071227.jpg';

	let content = null;

	if (compositionById === 0 || compositionById === -1) {
		content = (
			<>
				<S.ContentWrap>
					<S.Title style={{ fontFamily: titleFont }}>{title}</S.Title>
					<S.SubTitle style={{ fontFamily: subTitleFont }}>
						{subTitle}
					</S.SubTitle>
				</S.ContentWrap>
				<S.Category style={{ fontFamily: categoryFont }}>{category}</S.Category>
			</>
		);
	} else if (compositionById === 1) {
		content = (
			<S.ContentWrap>
				<S.Title style={{ fontFamily: titleFont }}>{title}</S.Title>
				<S.SubTitle style={{ fontFamily: subTitleFont }}>{subTitle}</S.SubTitle>
			</S.ContentWrap>
		);
	} else if (compositionById === 2) {
		content = (
			<S.ContentWrap>
				<S.Title style={{ fontFamily: titleFont }}>{title}</S.Title>
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
