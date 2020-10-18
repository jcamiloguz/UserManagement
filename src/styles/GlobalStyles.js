import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
	font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size:16px;
}
:root {
  --blue-primary: #273C75;
  --blue-dark: #192A56;
  --yellow-primary: #FBC531;
  --yellow-dark: #E1B12C;
  --red-primary: #E84118;
  --red-dark: #C23616;
  --bg-primary: #FCFCFC;
  --bg-secondary: #F5F6FA;
}

*, *:before, *:after {
	box-sizing: inherit;
}
body{
	background-color:var(--bg-secondary);
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