import styled from "styled-components"

export const Container = styled.div`
	display:flex;
	position:absolute;
	height:max-content;
	flex-direction:column;
	left:15px;
	gap:30px;
`

export const SearchContainer = styled.div`
	display:flex;
	height:max-content;
	align-items:center;
	border: 2px solid #c12e5f;
	height: 70px;
	gap:5px;
	padding-left:10px;
	border-radius: 30px;

`

export const SearchBar = styled.input`
	width: 400px;
	height:45px;
	outline:none;
	background-color:transparent;
	color:white;
	font-size:1.2rem;
	border-radius: 10px;
	padding-left:5px;
	border:none;
`

export const SearchIcon = styled.svg`
	width: 30px;
	height: 30px;
	color:#ff0c5d;
`

export const UsersContainer = styled.div`
	display:flex;
	position:absolute;
	top:100px;
	height:max-content;
	width:400px;
	flex-direction:column;
	gap:18px;
	align-items:center;
`

export const UserContainer = styled.div`
	display:flex;
	cursor:pointer;
	min-height:65px;
	min-width:150px;
	max-width: max-content;
	max-height: max-content;
	align-items:center;
	justify-content:center;
	gap:10px;
	background-color:#1e1e1e;
	box-shadow: 0px 0px 10px;
	border-radius:30px;
	border: 2px solid  #c12e5f;
`