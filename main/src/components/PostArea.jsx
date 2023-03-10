import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserContext.jsx"
import useUpload from "../hooks/useUpload.jsx"
import axios from "axios"

import {
	Container,
	Text,
	TextContainer,
	Image,
	UploadButton,
	Share,
	Form

} from "./styles/postarea.styled.jsx"
import { Pfp } from "../components/styles/profile.styled.jsx"

import {PostsContext} from "../context/PostsContext.jsx"

function PostArea({setIsUploading}) {
	const upl_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
	axios.defaults.baseURL = "http://localhost:6969"
	const {user} = useContext(UserContext)
	const {posts,dispatch} = useContext(PostsContext)

	const [currImage,setCurrImage] = useState()
	const [title,setTitle] = useState("")
	const [currImageName,setCurrImageName] = useState("")

	useEffect(() => {
		if(currImage){
			setCurrImageName(currImage)
		}
	},[currImage])

	const createPost = async (e) => {
		e.preventDefault()
		const formData = new FormData() 
		formData.append("file",currImage)
		formData.append("upload_preset",upl_preset)

		if(title.length == 0 && !currImage){
			alert("cant post nothing lil boy!")
		}else {

			if(!currImage){
				setIsUploading(true)
				setTitle("")
				const res = await axios.post("/api/post/createPost", {
					title,
					author: user.id
				})
				const newPosts = [...posts,res.data]
				dispatch({type:"ADD",payload:newPosts})

				setIsUploading(false)

			}else {
				setIsUploading(true)
				setTitle("")
				const {url} = await useUpload(currImage,formData)
				const res = await axios.post("/api/post/createPost", {
					title,
					pic:url,
					author:user.id
				})

				const newPosts = [...posts,res.data]
				dispatch({type:"ADD",payload:newPosts})

				setIsUploading(false)
				setCurrImage("")
				setCurrImageName(false)
			}
		}

	}
	
	return (
		<Container>
			<TextContainer>
				<Pfp src={user.pfp} width={"40px"} height={"40px"} />
				<Form onSubmit={createPost} >
					<Text value={title} onChange={e => setTitle(e.target.value)} placeholder="Whats on your mind?" />

						<UploadButton>
							<label style={{cursor:"pointer"}} htmlFor={"yes"}>{currImageName ? "Image Uploaded" : "Upload Image"}</label>
						</UploadButton>
						<Image onChange={e => setCurrImage(e.target.files[0])} id="yes" type="file" />

					<Share>Share</Share>
				</Form>

			</TextContainer>

			

		</Container>
	)
}

export default PostArea;