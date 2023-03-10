import {useEffect,useContext, useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import {
	PostContainer,
	UserPartContainer,
	PostInfoContainer,
	PostTitle,
	PostImage,
	RemoveContainer,
	TrashIcon,
	RateContainer,
	Like,
	LikeContainer,
	WhoLiked,
	LikedList,
	LikedUser,
	WhoComContainer,
	CommentIcon,
	CommentInput,
	CommentContainer,
	Send,
	SendIcon,
	CommentSection,
	CommentText,
	CommentCont,

} from "./styles/post.styled.jsx"

import {
	Pfp
} from "./styles/profile.styled.jsx"

import {UserContext} from "../context/UserContext.jsx"
import {PostsContext} from "../context/PostsContext.jsx"

function Post({post,index,comment}) {

	const { title, pic } = post
	const { username, pfp, _id } = post.author

	const {user} = useContext(UserContext)
	const {posts,dispatch} = useContext(PostsContext)
	
	const [currentPost,setCurrentPost] = useState()
	const [showWhoLiked,setShowWhoLiked] = useState(false)

	const [showCommentInput,setShowCommentInput] = useState(false)
	const [commentBody,setCommentBody] = useState("")
	const [showCommentSection,setShowCommentSection] = useState(false)

	const navigate = useNavigate()


	const deletePost = async () => {
		const res = await axios.delete(`/api/post/deletePost/${post._id}`)

		dispatch({type:"REMOVE",payload:res.data._id})
	}

	const like = async () => {	

		let ind

		posts.filter((ppost,id) => {
			if(ppost._id == post._id){
				ind = id
			}
		})

		const res = await axios.put(`/api/post/likePost/${user.id}/${post._id}`)

		const newPosts = [...posts]

		newPosts[ind].likes = [...newPosts[ind].likes,{pfp:user.pfp,username:user.username, id:user.id}]
		newPosts[ind].likes.length = res.data.likes.length

		dispatch({type:"LIKE",payload:newPosts})

	}

	const getWhoLiked = () => {
		setCurrentPost(post)
		setShowWhoLiked(!showWhoLiked)
	}

	const showComment = () => {
		setShowCommentInput(!showCommentInput)
	}

	const commentOn = async () => {
		if(commentBody.length > 0){

			const res = await axios.post("/api/post/comment", {
				body: commentBody,
				postId: post._id,
				authorName: user.username,
				authorPfp: user.pfp,
				authorId: user.id,
			})

			post.comments.push({
				body: commentBody,
				postId: post._id,
				authorName: user.username,
				authorPfp: user.pfp,
				authorId: user.id,
				_id: res.data
			})



			setShowCommentInput(false)
		}else {
			alert("cant send no nothing lil boy")
		}
	}

	const removeComment = async (id,index) => {
		const res = await axios.delete(`/api/post/deleteComment/${post._id}/${id}`)

		post.comments.splice(index,1)
		setShowCommentSection(false)
	}

	return (
		<PostContainer>
			{user.id == _id && 
				<RemoveContainer onClick={deletePost}>
					<TrashIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
					</TrashIcon>

				</RemoveContainer>
			}

			<UserPartContainer>
				<Link to={`/${post.author._id}`} >
					<Pfp src={post.author.pfp} width={"40px"} height={"40px"} />
				</Link>

				<h3>{post.author?.username}</h3>
			</UserPartContainer>	
			<h5 style={{color:"grey"}}>{post.createdAt.split("T")[0]}</h5>
			<h6 style={{color:"grey"}}>{post.createdAt.split("T")[1].split(".")[0]}</h6>

			<PostInfoContainer>
				<PostTitle>{post.title && post.title}</PostTitle>
				<PostImage src={post.pic && post.pic} />

				<RateContainer>
					<LikeContainer>
						<Like onClick={like} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
						</Like>
						<h3>{post?.likes.length}</h3>
					</LikeContainer>

				</RateContainer>
					{	
						<WhoComContainer>
						 	{post.likes.length > 0 ? <WhoLiked onClick={getWhoLiked}>{currentPost && showWhoLiked ? "hide who liked" : "show who liked"}</WhoLiked> : ""}

						 	{
						 		!showCommentInput
						 		?
						 		<CommentIcon onClick={showComment} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</CommentIcon>
								:
								<CommentIcon onClick={showComment} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									 <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</CommentIcon>

						 	}

						</WhoComContainer>
					}
					{
						showCommentInput 
						? 
						<CommentContainer>
							<CommentInput onChange={e => setCommentBody(e.target.value)} type="text" placeholder="comment" />
							<Send onClick={commentOn}>
								<SendIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
								</SendIcon>
							</Send>
						</CommentContainer>
					:
					""
					}
			</PostInfoContainer>	

			{currentPost &&
				showWhoLiked ? <LikedList>
					{currentPost?.likes.map((wl,idx) => {
						return (
							<LikedUser key={idx}>
								<Pfp src={wl.pfp} onClick={() => navigate(`/${wl._id || wl.id}`)} width={"25px"} height={"25px"} />
								<p>
									{wl.username}
								</p>
							</LikedUser>
						)
					})}
				</LikedList>
				: ""
			}
			<CommentText onClick={() => setShowCommentSection(!showCommentSection)}>
				<p>comments</p>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>

			</CommentText>
			{
				showCommentSection
				?
				<CommentSection>	
				{post.comments.map((com,index) => {
					return (
						<div key={index}>
							<CommentCont>
								<Pfp onClick={() => navigate(`/${com.authorId}`)} src={com.authorPfp} width={"25px"} height={"25px"} />
								<p>
									{com.body}
								</p>
								{com.authorId == user.id && 
									<TrashIcon onClick={() => removeComment(com._id,index)} style={{width:"20px", height:"20px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
									</TrashIcon>
								}
							</CommentCont>
						</div>
					)
				})}	
			</CommentSection>
			:
			""
			}

		</PostContainer>
	)
}

export default Post;