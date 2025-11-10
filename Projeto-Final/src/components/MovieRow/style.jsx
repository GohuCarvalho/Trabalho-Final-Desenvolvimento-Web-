import styled from 'styled-components';

export const RowWrapper = styled.div`
	margin-bottom: 30px;
`;

export const RowTitle = styled.h2`
	color: #ffffffff;
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 25px;
	width: 100%;
	font-weight: bold;
	font-family: "Bungee", sans-serif;
	
	&:hover {
		transform: scale(1.05);
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 0 20px;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-width: 100%;
	box-sizing: border-box;
	min-height: 300px;
	margin: 0 auto;

	> * {
		flex: 0 1 250px;
		min-width: 250px;
		margin: 0;
	}
`;

export const LoadingMessage = styled.p`
	color: #fff;
	text-align: center;
	width: 100%;
	margin: 0;
`;