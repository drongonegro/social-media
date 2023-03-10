import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {UserContextProvider} from "./context/UserContext.jsx"
import {UsersContextProvider} from "./context/UsersContext.jsx"
import {PostsContextProvider} from "./context/PostsContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
	<UserContextProvider>

		<UsersContextProvider>
			
			<PostsContextProvider>

				    <App/>
				
			</PostsContextProvider>

		</UsersContextProvider>
		
	</UserContextProvider>
)
