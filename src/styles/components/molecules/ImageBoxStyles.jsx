import styled from 'styled-components';

export const ImageContainer = styled.div`
	position: relative;
	max-width: 100%;
	width: 800px;
	height: 600px;
	background-color: white;
	box-shadow: 5px 5px 5px 5px black;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
`;

export const ThumbnailTitle = styled.div`
	position: absolute;
	top: 220px;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	font-size: 48px;
	font-weight: bold;
	width: 100%;
	margin: 0;
	padding: 0;
`;

export const ThumbnailSubTitle = styled.div`
	position: absolute;
	top: calc(52% + 20px);
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	font-weight: bold;
	font-size: 24px;
	border-top: 2px solid white;
	padding-top: 5px;
`;

export const ThumbnailCategory = styled.div`
	position: absolute;
	bottom: 0;
	margin-bottom: 15px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
	font-weight: bold;
	font-size: 24px;
	overflow: hidden;
	width: 100%;
	text-align: center;
`;
