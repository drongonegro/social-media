import styled from "styled-components"

export const Container = styled.div`
	display:flex;
	gap:30px;
	align-items:center;
	justify-content:center;
	width: 600px;
	height: 80px;
	background-color: transparent;
	box-shadow: 0px 0px 50px;
	border: 2px solid #c12e5f;
	border-radius: 30px;

`
export const TextContainer = styled.div`
	display:flex;
	align-items:center;
	gap:15px;

`

export const Text = styled.textarea`
	position:relative;
	width: 300px;
	height:30px;
	resize: none;
	outline:none;
	background-color:transparent;
	color:white;
	border:none;
	font-size:1.2rem;
`

export const Image = styled.input`	
	display:none;

`

export const UploadButton = styled.div`
	padding:5px;
	background-color: transparent;
	color:white;
	border: 2px solid #c12e5f;
	border-radius: 12px;
`

export const Share = styled.button`
	padding:5px;
	cursor:pointer;
	background-color: transparent;
	font-size: 1rem;
	color:white;
	border: 2px solid #c12e5f;
	border-radius: 12px;
`

export const Form = styled.form`
	display:flex;	
	gap:10px;
	position:relative;
`

export const ButtonsContainer = styled.div`
	display:flex;
	gap:10px;
`

export const LContainer = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	gap:10px;
`