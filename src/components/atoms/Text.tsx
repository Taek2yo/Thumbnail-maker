import React from 'react';
import { TextStyle } from '../../styles/components/atoms/TextStyles';

interface TextProps {
	content: string;
}

export default function Text({ content }: TextProps) {
	return <TextStyle>{content}</TextStyle>;
}
