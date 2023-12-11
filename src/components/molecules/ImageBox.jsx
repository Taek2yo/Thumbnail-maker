import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../styles/components/molecules/ImageBoxStyles';
import { selectInput } from '../../redux/module/inputTextSlice';
import { composition } from '../../redux/module/compositionSlice';
import {
	selectTitleFont,
	selectSubTitleFont,
	selectCategoryFont,
	titleColor,
	subTitleColor,
	categoryColor,
} from '../../redux/module/fontSlice';
import {
	getImageUrl,
	getSolidRandom,
	getGradientRandom,
} from '../../redux/module/backgroundSlice';
import PreviewImage from '../atoms/PreviewImage';

export default function ImageBox() {
	const { title, subTitle, category } = useSelector(selectInput);
	const titleFont = useSelector(selectTitleFont);
	const getTitleColor = useSelector(titleColor);
	const getSubTitleColor = useSelector(subTitleColor);
	const getCategoryColor = useSelector(categoryColor);
	const subTitleFont = useSelector(selectSubTitleFont);
	const categoryFont = useSelector(selectCategoryFont);
	const compositionById = useSelector(composition);
	const imageUrl = useSelector(getImageUrl);

	const solidColor = useSelector(getSolidRandom);
	const gradientColor = useSelector(getGradientRandom);

	let content = null;

	if (compositionById === 0 || compositionById === -1) {
		content = (
			<>
				<S.ContentWrap>
					<S.Title style={{ fontFamily: titleFont, color: getTitleColor }}>
						{title}
					</S.Title>
					<S.SubTitle
						style={{ fontFamily: subTitleFont, color: getSubTitleColor }}
					>
						{subTitle}
					</S.SubTitle>
				</S.ContentWrap>
				<S.Category
					style={{ fontFamily: categoryFont, color: getCategoryColor }}
				>
					{category}
				</S.Category>
			</>
		);
	} else if (compositionById === 1) {
		content = (
			<S.ContentWrap>
				<S.Title style={{ fontFamily: titleFont, color: getTitleColor }}>
					{title}
				</S.Title>
				<S.SubTitle
					style={{ fontFamily: subTitleFont, color: getSubTitleColor }}
				>
					{subTitle}
				</S.SubTitle>
			</S.ContentWrap>
		);
	} else if (compositionById === 2) {
		content = (
			<S.ContentWrap>
				<S.Title style={{ fontFamily: titleFont, color: getTitleColor }}>
					{title}
				</S.Title>
			</S.ContentWrap>
		);
	}

	let backgroundStyle = {};

	if (solidColor) {
		backgroundStyle = { background: solidColor };
	} else if (gradientColor) {
		backgroundStyle = { background: gradientColor };
	} else if (imageUrl) {
		backgroundStyle = { backgroundImage: `url(${imageUrl})` };
	}

	return (
		<S.ImageContainer style={backgroundStyle}>
			{imageUrl && <PreviewImage imageUrl={imageUrl} />}
			{content}
		</S.ImageContainer>
	);
}
