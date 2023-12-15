import React from 'react';
import { PreviewImageStyle } from '../../styles/components/atoms/PreviewImageStyles';

interface PreviewImageProps {
	imageUrl: string;
}

export default function PreviewImage({ imageUrl }: PreviewImageProps) {
	return <PreviewImageStyle src={imageUrl} alt="" />;
}
