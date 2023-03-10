import {useContext} from "react"
import {UserContext} from "../context/UserContext.jsx"
import {Link,useNavigate} from "react-router-dom"
import {
	Container,
	Button
} from "./styles/dropdown.styled.jsx"


function DropDown() {

	const {user,dispatch} = useContext(UserContext)
	const navigate = useNavigate()

	const logout = () => {
		dispatch({type:"LOGOUT"})

		localStorage.removeItem("user")
	}

	const gotoProfile = () => {
		navigate(`/${user.id}`)
	}

	return (
		<Container>
			<Button onClick={logout}>Log Out</Button>
			<Button onClick={gotoProfile} >Profile</Button>
		</Container>
	)
}

export default DropDown;