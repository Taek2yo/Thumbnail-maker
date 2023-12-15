import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../molecules/InputField';
import {
	setTitle,
	setSubTitle,
	setCategory,
	selectInput,
} from '../../redux/module/inputTextSlice';

export default function InputPanel() {
	const { title, subTitle, category } = useSelector(selectInput);

	const dispatch = useDispatch();

	const handleTitleChange = (newTitle: string) => {
		dispatch(setTitle(newTitle));
	};

	const handleSubTitleChange = (newSubTitle: string) => {
		dispatch(setSubTitle(newSubTitle));
	};

	const handleCategoryChange = (newCategory: string) => {
		dispatch(setCategory(newCategory));
	};

	return (
		<div>
			<InputField
				label="Title"
				value={title}
				onChange={(e) => handleTitleChange(e.target.value)}
			/>
			<InputField
				label="SubTitle"
				value={subTitle}
				onChange={(e) => handleSubTitleChange(e.target.value)}
			/>
			<InputField
				label="Category"
				value={category}
				onChange={(e) => handleCategoryChange(e.target.value)}
			/>
		</div>
	);
}
