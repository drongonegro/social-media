import styled from "styled-components"

export const Container = styled.div`
	display:flex;
	flex-direction: column;
	gap: 10px;
	position:absolute;
	right:5px;
	top:80px;
`

export const Button = styled.button`
	width:100px;
	height:max-content;
	cursor:pointer;
	padding:5px;
	background-color: transparent;
	color:white;
	border: 2px solid #c12e5f;
	border-radius: 12px;

	&:hover {
		border:none;
	}
`