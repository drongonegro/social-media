import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

import {
	Container
} from "./styles/home.styled.jsx"


import {
	PostsContainer
} from "../components/styles/post.styled.jsx"

import {
	Pfp
} from "../components/styles/profile.styled.jsx"

import Post from "../components/Post.jsx"

import Profile from "../components/Profile.jsx"

import {
	Header,
	UserInfo,
	ProfileContainer,
	Home

} from "./styles/userpage.styled.jsx"

import DropDown from "../components/DropDown.jsx"
import {Link} from "react-router-dom"

import {useContext} from "react"
import { UserContext } from "../context/UserContext.jsx"
import { PostsContext } from "../context/PostsContext.jsx"

function UserPage() {
	const {userId} = useParams()
	const [postss,setPostss] = useState([])
	const [userInfo,setUserInfo] = useState()

	const {posts} = useContext(PostsContext)

	useEffect(() => {
		axios.get(`/api/user/getUser/${userId}`)
			.then(res => {
				setUserInfo(res.data)
		})
	},[])


	useEffect(() => {	
		axios.get(`/api/user/getUserPosts/${userId}`).then(res => setPostss(res.data))
	},[posts])


	return (
		<Container>
			<Header>
				<Home>
					<Link to="/" style={{color:"#f20e5a"}} >HOME</Link>
				</Home>
				<UserInfo>
					<Pfp src={userInfo?.pfp} width={"40px"} height={"40px"} />
					<h2>{userInfo?.username}</h2>
				</UserInfo>

			</Header>
			<PostsContainer>
				{postss?.map((post,index) => {return(
					<Post post={post} index={index} />
				)})}
			</PostsContainer>
		</Container>
	)
}

export default UserPage;