import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
	* {
		margin:0;
		padding:0;
		box-sizing:border-box;
		font-family: 'Poppins', sans-serif;
	}

	body {
		background-color: #141414;
	}

	html {
		overflow-x:hidden;
	}

	h1,h2,h3{
		color:white;
	}

	p {
		color:white;
		font-size: 0.9rem;
	}

	svg {
		width: 20px;
		height:20px;
	}

	a {
		color:white;
		text-decoration:none;
	}

`

export default GlobalStyle