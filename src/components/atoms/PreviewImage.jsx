import React from 'react';
import { PreviewImageStyle } from '../../styles/components/atoms/PreviewImageStyles';

export default function PreviewImage({ imageUrl }) {
	const altImage =
		'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	return <PreviewImageStyle src={imageUrl || altImage} alt="" />;
}
