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
	background: none;
`;

export const ContentWrap = styled.div`
	position: absolute;
	top: 42%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.div`
	z-index: 1;
	font-size: 48px;
	font-weight: bold;
	margin: 0;
	padding: 0;
	display: inline-block;
	box-sizing: border-box;
`;

export const SubTitle = styled.div`
	z-index: 1;
	font-weight: bold;
	font-size: 24px;
	border-top: 2px solid white;
	padding-top: 5px;
	display: inline-block;
	box-sizing: border-box;
	margin-top: 10px;
	width: fit-content;
`;

export const Category = styled.div`
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
