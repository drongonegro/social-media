import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	justify-content: center;
	position:relative;
	align-items: center;
	background-color: #141414;
	height:100vh
`

export const FormContainer = styled.div`
	display:flex;
	flex-direction: column;
	gap:30px;
	align-items:center;
	justify-content:center;
	position:absolute;
	top:20%;
	width: 300px;
	height: 350px;
	background-color: #0c0c0c;
	border-radius: 10px;
	border: 2px solid #c12e5f;
`

export const Form = styled.form`
	display:flex;
	flex-direction: column;
	gap:20px;
`

export const Input = styled.input`
	background-color:transparent;
	color:white;
	border:1px solid #141414;
	outline:none;
	padding:5px;
	border-radius:10px;

	&:focus {
		outline: 1px solid #c12e5f;
	}
`
export const UploadButton = styled.div`
	display:flex;
	align-items:center;
	justify-content:flex-start;
	gap:4px;
	padding:5px;
	background-color: transparent;
	color:white;
	border: 1px solid #c12e5f;
	border-radius: 12px;
	width:max-content;
`

export const Submit = styled.button`
	display:flex;
	justify-content:center;
	align-items:center;
	color:white;
	cursor:pointer;
	border: 1px solid #c12e5f;
	background-color:transparent;	
	border-radius:10px;
	height:30px;	
	font-size:0.9rem;

	&:hover{
		border:none;
	}
`