import React from 'react';
import { PreviewImageStyle } from '../../styles/components/atoms/PreviewImageStyles';

export default function PreviewImage({ img }) {
	return <PreviewImageStyle src={img} />;
}
