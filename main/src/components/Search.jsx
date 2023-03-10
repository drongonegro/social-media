import { UsersContext } from "../context/UsersContext.jsx"
import {useState,useContext} from "react"
import { Link, useNavigate } from "react-router-dom"

import {
	Container,
	SearchContainer,
	SearchBar,
	SearchIcon,
	UsersContainer,
	UserContainer

} from "./styles/search.styled.jsx"

import { Pfp } from "./styles/profile.styled.jsx"

function Search() {

	const {users} = useContext(UsersContext)

	const [search,setSearch] = useState("")

	const navigate = useNavigate()

	return (
		<Container>
			
			<SearchContainer>
				<SearchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</SearchIcon>

				<SearchBar onChange={e => setSearch(e.target.value)} placeholder="search user" />
			</SearchContainer>

			<UsersContainer>
				{users?.filter(user => user.username.includes(search)).map(user => {
					return (
						<div>
							{
								search ?
								
									<UserContainer onClick={() => navigate(`/${user._id}`)}>
										<Pfp src={user.pfp} width={"40px"} height={"40px"} />
										<h3>
											{user.username}
										</h3>
									</UserContainer>

								: ""
							}
						</div>
					)
				})}
			</UsersContainer>	

		</Container>
	)
}

export default Search;