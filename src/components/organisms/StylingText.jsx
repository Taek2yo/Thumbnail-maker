import React from 'react';
import Text from '../atoms/Text';
import DropdownMenu from './DropdownMenu';

export default function StylingText() {
	return (
		<div>
			<div>
				<Text content="Title" />
				<DropdownMenu />
				{/* <button>크기</button>
				<button>기울기</button>
				<button>색</button> */}
			</div>
			<div>
				<Text content="SubTitle" />
				<DropdownMenu />
				{/* <button>크기</button>
				<button>기울기</button>
				<button>색</button> */}
			</div>
			<div>
				<Text content="Category" />
				<DropdownMenu />
				{/* <button>크기</button>
				<button>기울기</button>
				<button>색</button> */}
			</div>
		</div>
	);
}
