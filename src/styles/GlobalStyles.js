import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
	font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size:16px;
}

*, *:before, *:after {
	box-sizing: inherit;
}

ul, li, h1, h2, h3, p, button ,hr{
	margin: 0;
	padding: 0;
}

ul {
	list-style: none;
}

button: {
	background: transparent;
	border: 0;
	outline: 0;
}


`