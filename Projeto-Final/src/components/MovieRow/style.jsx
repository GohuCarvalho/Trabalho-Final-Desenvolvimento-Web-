import styled from 'styled-components';

export const RowWrapper = styled.div`
	margin-bottom: 30px;
`;

export const RowTitle = styled.h2`
	color: #e5e5e5;
	font-size: 1.5rem;
	margin-left: 20px;
	margin-bottom: 15px;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 0 20px;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	min-width: 100%;
	box-sizing: border-box;
	min-height: 300px;
	margin: 0 auto;

	> * {
		flex: 0 1 200px;
		min-width: 200px;
		margin-bottom: 10px;
	}
`;

export const LoadingMessage = styled.p`
	color: #fff;
	text-align: center;
	width: 100%;
	margin: 0;
`;