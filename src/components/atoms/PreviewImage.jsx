import React from 'react';
import { PreviewImageStyle } from '../../styles/components/atoms/PreviewImageStyles';

export default function PreviewImage({ imageUrl }) {
	return <PreviewImageStyle src={imageUrl} alt="" />;
}
