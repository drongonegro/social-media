import {createContext,useReducer,useEffect} from "react"
import axios from "axios"

export const PostsContext = createContext()

export function PostsContextProvider({children}) {

	const postsReducer = (state,action) => {
		if(action.type == "ADD"){
			return {
				posts: action.payload
			}
		}else if(action.type == "REMOVE"){
			return {
				posts: state.posts.filter(post => post._id !== action.payload)
			}
		}else if(action.type == "LIKE"){
			return {
				posts: action.payload 
			}
		}
	}

	const [state,dispatch] = useReducer(postsReducer,{
		posts:[]
	})

	useEffect(() => {
		axios.get("/api/post/getPosts").then(res => dispatch({type:"ADD",payload:res.data}))
	},[])

	return (
		<PostsContext.Provider value={{...state,dispatch}} >
			<div>
				{children}
			</div>
		</PostsContext.Provider>
	)
}