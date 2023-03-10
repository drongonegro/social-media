import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext.jsx"
import {
	Container,
	Pfp
} from "./styles/profile.styled.jsx"
import DropDown from "../components/DropDown.jsx"

function Profile() {

	const {user} = useContext(UserContext)

	const [isShow,setIsShow] = useState(false)

	const toggle = () => {
		setIsShow(!isShow)
	}
	return (	
		<Container onClick={toggle}>
			<Pfp src={user?.pfp} width={"40px"} height={"40px"} />
			<h3>{user?.username}</h3>
			{isShow && <DropDown/>}
		</Container>
	)
}

export default Profile;