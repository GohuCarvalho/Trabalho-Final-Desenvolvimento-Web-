import styled from 'styled-components';

export const RowWrapper = styled.div`
	margin-bottom: 30px;
`;

export const RowTitle = styled.h2`
	color: #f4e10b;
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 25px;
	width: 100%;
	font-weight: bold;
	text-transform: uppercase;
	text-shadow: 
		0 1px 0 #ccc,
		0 2px 0 #c9c9c9,
		0 3px 0 #bbb,
		0 4px 0 #b9b9b9,
		0 5px 0 #aaa,
		0 6px 1px rgba(0,0,0,.1),
		0 0 5px rgba(0,0,0,.1),
		0 1px 3px rgba(0,0,0,.3),
		0 3px 5px rgba(0,0,0,.2),
		0 5px 10px rgba(0,0,0,.25),
		0 10px 10px rgba(0,0,0,.2),
		0 20px 20px rgba(0,0,0,.15);
	transition: all 0.3s ease;
	
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