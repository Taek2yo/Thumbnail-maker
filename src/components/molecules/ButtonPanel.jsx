import React from 'react';
import Button from '../atoms/Button';

export default function ButtonPanel() {
	const testOnclick = () => {
		console.log('text');
	};
	return (
		<div>
			<Button text="그래디언트 랜덤" onClick={testOnclick} />
			<Button text="단색 랜덤" />
			<Button text="이미지 URL 입력하기" />
		</div>
	);
}
