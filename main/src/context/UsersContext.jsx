import {createContext,useReducer,useEffect} from "react"
import axios from "axios"

export const UsersContext = createContext()

export function UsersContextProvider({children}) {

	const usersReducer = (state,action) => {
		if(action.type == "GET_ALL"){
			return {
				users: action.payload
			}
		}else if(action.type == "ADD_USER"){
			return {
				users: [...state.users,action.payload]
			}
		}
	}

	const [state,dispatch] = useReducer(usersReducer,{
		users:null
	})

	useEffect(() => {
		axios.get("/api/user/getUsers")
			.then(res => {
				dispatch({type:"GET_ALL", payload:res.data})
			})
	},[])

	return (
		<UsersContext.Provider value={{...state,dispatch}} >
			<div>
				{children}
			</div>
		</UsersContext.Provider>
	)
}