import styled from "styled-components"


export const Container = styled.div`
	display:flex;
	position:fixed;
	cursor:pointer;
	justify-content: center;
	align-items: center;
	gap:10px;
	right:100px;
	top:22px;
	width:max-content;
	height: max-content;	
	border: 2px solid #c12e5f;
	padding:10px;
	border-radius: 30px;
`

export const Pfp = styled.img`
	width: {(props) => props.width};
	height: {(props) => props.height};
	top: ({props} => props.posY)
	object-fit:cover;
	border-radius: 100%;
	border: 2px solid #c12e5f;
	cursor:pointer;
`