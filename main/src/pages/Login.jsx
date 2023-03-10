import {useState} from "react"
import { 
	Container, 
	FormContainer, 
	Form,
	Input,
	Submit

} from "./styles/login.styled.jsx"
import {useContext} from "react"
import {UserContext} from "../context/UserContext.jsx"
import axios from "axios"
import {Link} from "react-router-dom"

function Login(){
	axios.defaults.baseURL = "http://localhost:6969"
	const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")

	const {user,dispatch} = useContext(UserContext)

	const login = async (e) => {
		e.preventDefault()

		const res = await axios.post("/api/user/login", {
			username,
			password
		})

		if(res.status == 200){
			localStorage.setItem("user", JSON.stringify(res.data))

			dispatch({type:"LOGIN",payload:res.data})
		}
	}

	return (
		<Container>
			<FormContainer>
					<h1>Login</h1>
					<Form onSubmit={login}>
						<Input required onChange={e => setUsername(e.target.value)} type="text" placeholder="username" />
						<Input required onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
						<Submit>Submit</Submit>
					</Form>
					<div style={{display:"flex",gap:"5px"}}>
						<span style={{color:"white"}} >no account?</span>
						<Link style={{color:"#c12e5f"}} to="/register" >REGISTER</Link>
					</div>
				</FormContainer>
		</Container>
	)
}

export default Login;