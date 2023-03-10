import {createContext,useReducer,useEffect} from "react"

export const UserContext = createContext()

export function UserContextProvider({children}) {

	const userReducer = (state,action) => {
		if(action.type == "LOGIN"){
			return {
				user: action.payload
			}
		}else if(action.payload == "LOGOUT") {
			return {
				user: null
			}
		}
	}

	const [state,dispatch] = useReducer(userReducer,{
		user:null
	})

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		if(user){
			dispatch({type:"LOGIN",payload:user})
		}
	},[])

	return (
		<UserContext.Provider value={{...state,dispatch}} >
			<div>
				{children}
			</div>
		</UserContext.Provider>
	)
}