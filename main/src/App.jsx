import React, {useState, useEffect,createContext,useContext,useReducer} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import GlobalStyle from "./global.styled.jsx"

import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import UserPage from "./pages/UserPage.jsx"

import Profile from "./components/Profile.jsx"

import {UserContext} from "./context/UserContext.jsx" 

function App() { 

	const {user} = useContext(UserContext)

	return (
		<div>
			<BrowserRouter>
				<GlobalStyle/>
				<Profile/>
				<Routes>
					<Route path="/register" element={<Register/>}/>
					<Route path="/" element={user ? <Home/> : <Login/>}/>
					<Route path="/:userId" element={user ? <UserPage/> : <Login/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;