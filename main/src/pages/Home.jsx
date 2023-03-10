import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserContext.jsx"
import { UsersContext } from "../context/UsersContext.jsx"
import { PostsContext } from "../context/PostsContext.jsx"
import axios from "axios"
import Profile from "../components/Profile.jsx"
import PostArea from "../components/PostArea.jsx"
import Post from "../components/Post.jsx"
import Search from "../components/Search.jsx"

import {
	Container,
	Header
} from "./styles/home.styled.jsx"

import {
	PostsContainer
} from "../components/styles/post.styled.jsx"

import Cliploader from "react-spinners/Cliploader"



function Home() {

	const {user} = useContext(UserContext)
	const {posts} = useContext(PostsContext)
	const [show,setShow] = useState(false)
	const [isUploading,setIsUploading] = useState()

	const showDropDown = () => {
		setShow(!show)
	}

	return (
		<Container>
			<Header>
				<Search/>
				<PostArea setIsUploading={setIsUploading}/>
			</Header>

			{
				isUploading ? 
				<Cliploader color={"#c12e5f"} loading={isUploading} size={70} />
				:
				<PostsContainer>
					{posts?.map((post,index) => {return(
						<Post post={post} index={index} key={index} />
					)})}
				</PostsContainer>
			}

		</Container>
	)
}

export default Home;