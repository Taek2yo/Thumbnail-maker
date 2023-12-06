import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../styles/components/molecules/ImageBoxStyles';
import { selectInput } from '../../redux/module/inputTextSlice';
import PreviewImage from '../atoms/PreviewImage';

export default function ImageBox() {
	const { title, subTitle, category } = useSelector(selectInput);
	// 예시 이미지
	const src =
		'https://img.hani.co.kr/imgdb/resize/2007/1227/68227042_20071227.jpg';
	return (
		<S.ImageContainer>
			<PreviewImage img={src} />
			<S.ContentWrap>
				<S.Title>{title}</S.Title>
				<S.SubTitle>{subTitle}</S.SubTitle>
			</S.ContentWrap>
			<S.Category>{category}</S.Category>
		</S.ImageContainer>
	);
}
