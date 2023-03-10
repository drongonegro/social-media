import {useState,useContext} from "react"
import {useNavigate} from "react-router-dom"
import { UsersContext } from "../context/UsersContext.jsx"

import { 
	Container, 
	FormContainer, 
	Form,
	Input,
	Submit,
	UploadButton

} from "./styles/register.styled.jsx"

import useUpload from "../hooks/useUpload.jsx"
import axios from "axios"
import Cliploader from "react-spinners/Cliploader"
import {Link} from "react-router-dom"

function Register(){
	const upl_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
	axios.defaults.baseURL = "http://localhost:6969"
	const {users,dispatch} = useContext(UsersContext)

	const [currImage,setCurrImage] = useState("")
	const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")
	const [isLoading,setIsLoading] = useState()

	const navigate = useNavigate()


	const register = async (e) => {
		e.preventDefault()
		const formData = new FormData() 
		formData.append("file",currImage)
		formData.append("upload_preset",upl_preset)

		if(!currImage){
			if(username.length > 12) {
				alert("username too long")
				return
			}
			setIsLoading(true)
			const res = await axios.post("/api/user/register", {
				username,
				password,
			})	
			if(res.status == 200){
				dispatch({type:"ADD_USER",payload:res.data})
				setIsLoading(false)
				navigate("/")
			}

		}else {
			if(username.length > 12) {
				alert("username too long")
				return
			}
			setIsLoading(true)
			const { url } = await useUpload(currImage,formData)
			setIsLoading(false)
			const res = await axios.post("/api/user/register", {
				username,
				password,
				pfp:url,
			})
			dispatch({type:"ADD_USER",payload:res.data})
			navigate("/")
		}

	}
	return (
		<Container>
			{
				isLoading ? 
				<Cliploader color={"#c12e5f"} loading={isLoading} size={100} />
				:
				<FormContainer>
					<h1>Register</h1>
					<Form onSubmit={register}>
						<Input required onChange={e => setUsername(e.target.value)} type="text" placeholder="username" />
						<Input required onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
						<UploadButton>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
							</svg>

							<label style={{cursor:"pointer"}} htmlFor="uploadPfp">Profile Picture</label>
							<Input style={{display:"none"}} onChange={e => setCurrImage(e.target.files[0])} id="uploadPfp" name="pfp" type="file" accept="image/*" />
						</UploadButton>
						<Submit>Submit</Submit>
					</Form>
					<div style={{display:"flex",gap:"5px"}}>
						<span style={{color:"white"}} >have account?</span>
						<Link style={{color:"#c12e5f"}} to="/login">LOGIN</Link>
					</div>
				</FormContainer>
			}

		</Container>
	)
}

export default Register;