import styled from "styled-components"

export const PostsContainer = styled.div`
	display:flex;
	padding: 30px;
	flex-direction: column;
	height:max-content;
	width:500px;
	gap: 30px;
`

export const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	height: max-content;
	white-space: inherit;   
	word-break: break-word; 
	position:relative;
	gap: 10px;
	border: 1px solid #c12e5f;
	border-radius: 10px;
	padding: 15px 20px;
	height: max-content;
	box-shadow: 0px 0px 30px;
`

export const UserPartContainer = styled.div`
	display:flex;
	width:max-content;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const PostInfoContainer = styled.div`
	display: flex;
	flex-direction: column;	
	gap: 10px;

`

export const PostTitle = styled.h3`
		
`

export const PostImage = styled.img`

`	

export const RemoveContainer = styled.div`
	position:absolute;
	right:15px;
	width:30px;
	height:30px;
`

export const TrashIcon = styled.svg`
	color:#c12e5f;
	cursor:pointer;
	width:100%;
	height:100%;
`

export const RateContainer = styled.div`
	display:flex;
	width:100%;
	height:max-content;
	gap:5px;
	flex-direction:column;
` 

export const LikeContainer = styled.div`
	display:flex;
	align-items:center;
	gap:5px;
`

export const Like = styled.svg`
	cursor:pointer;
	color:rgba(255,255,255,0.8);
	fill:#c12e5f;
`

export const WhoLiked = styled.a`
	cursor:pointer;
	color:#c12e5f;
	text-decoration: underline;
`

export const LikedList = styled.div`
	display:flex;
	flex-direction: column;
	padding:10px;
	gap:5px;
	width:110px;
	max-width: 300px;
	height: 180px;
	background-color:#191818;
	overflow-y: auto;
`

export const LikedUser = styled.div`
	display:flex;
	height: max-content;
	align-items:center;
	gap:5px;
`

export const WhoComContainer = styled.div`
	display:flex;
	justify-content:space-between;
	gap:10px;
`

export const CommentIcon = styled.svg`
	color:#c12e5f;
	cursor:pointer;
	width:30px;
	height:30px;
`

export const CommentContainer = styled.div`
	display:flex;
	width:100%;
	align-items:center;
	justify-content:center;
	border:1px solid #c12e5f;
	border-radius:10px;
	padding:2px 4px;
`

export const CommentInput = styled.input`
	height:30px;
	outline:none;
	width:100%;
	background-color:transparent;
	color:white;
	padding:5px;
	border:none;
	font-size:1.1rem;
`

export const Send = styled.button`
	width:nax-content;
	height:max-content;
	border:none;
	background-color:transparent;
`

export const SendIcon = styled.svg`
	width:30px;
	height:30px;
	color: #c12e5f;
	cursor:pointer;
`

export const CommentSection = styled.div`
	display:flex;
	align-items:center;
	flex-direction:column;
	gap:10px;
	height:max-content;
	max-height:100px;
	overflow:auto;
`

export const CommentText = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	gap:1px;

	& svg {
		color:#c12e5f;
		cursor:pointer;
	}

	& p {
		cursor:pointer;
		color:#c12e5f;
		border-bottom: 1px solid #c12e5f;
	}
`

export const CommentCont = styled.div`
	display:flex;
	max-width: max-content;
	white-space: inherit; 
	word-break: break-word;  
	padding:10px;
	background-color:#212121;
	border-radius:10px;
	box-shadow:0px 0px 10px;
	justify-content:center;
	align-items:center;
	gap:5px;
`